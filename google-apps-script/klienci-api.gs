/**
 * ============================================================
 *  SYNCHRONIZACJA KLIENTÓW – wklej do projektu Google Apps Script
 * ============================================================
 *
 * 1. Otwórz projekt Apps Script powiązany z arkuszem (ten sam,
 *    którego URL jest w CONFIG.SHEET_URL w index.html).
 * 2. Wklej CAŁĄ treść tego pliku na końcu istniejącego Code.gs
 *    (albo jako nowy plik w projekcie).
 * 3. W funkcji doGet(e), w miejscu gdzie obsługujesz e.parameter.module
 *    (switch / if-else dla containers, sales, complaints, notes),
 *    DODAJ obsługę modułu "clients":
 *
 *      if (module === 'clients') {
 *        return handleClientsModule(e.parameter);
 *      }
 *
 *    Albo na początku doGet:
 *
 *      if (e.parameter.module === 'clients') {
 *        return handleClientsModule(e.parameter);
 *      }
 *
 * 4. Wdróż ponownie: Wdróż → Zarządzaj wdrożeniami → ołówek →
 *    Wersja: Nowa wersja → Wdróż.
 *    (Jeśli URL się zmieni, zaktualizuj CONFIG.SHEET_URL w index.html.)
 *
 * Skrypt utworzy arkusz "Klienci" (kolumny: Kod | Nazwa) i wypełni
 * go domyślną listą przy pierwszym odczycie.
 */

var CLIENTS_SHEET_NAME = 'Klienci';
var CLIENTS_ADMIN_USER = 'tom';

var DEFAULT_CLIENTS_SEED = {
  '58B': 'FLO', '58C': 'ZKT', '58D': 'ALE', '58E': 'ARC', '58F': 'JEA',
  '58G': 'INS', '58H': 'ONI', '58J': 'LAW', '58K': 'SAL', '58L': 'MDL',
  '58M': 'FLD', '58N': 'MON', '58P': 'REN', '58Q': 'ZYL', '58Z': 'ZYL'
};

function handleClientsModule(params) {
  var clientsAction = String(params.clientsAction || params.op || '').trim();
  if (clientsAction === 'list' || clientsAction === 'get') {
    return handleGetClients();
  }
  if (clientsAction === 'add') {
    return handleAddClient(params);
  }
  if (clientsAction === 'remove') {
    return handleRemoveClient(params);
  }
  return jsonResponse_({
    status: 'error',
    message: 'Nieznana akcja klientów. Użyj: list, add, remove'
  });
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateClientsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CLIENTS_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CLIENTS_SHEET_NAME);
    sheet.appendRow(['Kod', 'Nazwa']);
    sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  }
  return sheet;
}

function readClientsMap_() {
  var sheet = getOrCreateClientsSheet_();
  var lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    var codes = Object.keys(DEFAULT_CLIENTS_SEED);
    for (var i = 0; i < codes.length; i++) {
      var code = codes[i];
      sheet.appendRow([code, DEFAULT_CLIENTS_SEED[code]]);
    }
    lastRow = sheet.getLastRow();
  }

  var clients = {};
  if (lastRow >= 2) {
    var values = sheet.getRange(2, 1, lastRow, 2).getValues();
    for (var r = 0; r < values.length; r++) {
      var c = String(values[r][0] || '').trim().toUpperCase();
      var n = String(values[r][1] || '').trim().toUpperCase();
      if (c) clients[c] = n || c;
    }
  }
  return clients;
}

function findClientRow_(sheet, code) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return -1;
  var values = sheet.getRange(2, 1, lastRow, 1).getValues();
  var target = String(code || '').trim().toUpperCase();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0] || '').trim().toUpperCase() === target) {
      return i + 2;
    }
  }
  return -1;
}

function handleGetClients() {
  try {
    return jsonResponse_({
      status: 'success',
      data: { clients: readClientsMap_() }
    });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: String(err) });
  }
}

function handleAddClient(params) {
  try {
    var user = String(params.user || '').trim();
    if (user !== CLIENTS_ADMIN_USER) {
      return jsonResponse_({ status: 'error', message: 'Brak uprawnień' });
    }

    var code = String(params.code || '').trim().toUpperCase();
    var name = String(params.name || '').trim().toUpperCase();
    if (!code || !name) {
      return jsonResponse_({ status: 'error', message: 'Podaj kod i nazwę klienta' });
    }

    var sheet = getOrCreateClientsSheet_();
    if (findClientRow_(sheet, code) !== -1) {
      return jsonResponse_({ status: 'error', message: 'Klient o tym kodzie już istnieje' });
    }

    sheet.appendRow([code, name]);
    return jsonResponse_({
      status: 'success',
      message: 'Klient dodany',
      data: { clients: readClientsMap_() }
    });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: String(err) });
  }
}

function handleRemoveClient(params) {
  try {
    var user = String(params.user || '').trim();
    if (user !== CLIENTS_ADMIN_USER) {
      return jsonResponse_({ status: 'error', message: 'Brak uprawnień' });
    }

    var code = String(params.code || '').trim().toUpperCase();
    if (!code) {
      return jsonResponse_({ status: 'error', message: 'Podaj kod klienta' });
    }

    var sheet = getOrCreateClientsSheet_();
    var row = findClientRow_(sheet, code);
    if (row === -1) {
      return jsonResponse_({ status: 'error', message: 'Nie znaleziono klienta' });
    }

    sheet.deleteRow(row);
    return jsonResponse_({
      status: 'success',
      message: 'Klient usunięty',
      data: { clients: readClientsMap_() }
    });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: String(err) });
  }
}
