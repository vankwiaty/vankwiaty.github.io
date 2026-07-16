/**
 * ============================================================
 *  SYSTEM EWIDENCJI – kompletny kod Google Apps Script
 * ============================================================
 *
 * JAK WDROŻYĆ:
 * 1. Otwórz arkusz Google → Rozszerzenia → Apps Script
 * 2. USUŃ całą starą treść Code.gs i wklej TEN plik
 * 3. Zapisz (Ctrl+S)
 * 4. Wdróż → Nowe wdrożenie → Typ: Aplikacja internetowa
 *    - Wykonuj jako: Ja
 *    - Kto ma dostęp: Wszyscy
 * 5. Skopiuj URL wdrożenia do CONFIG.SHEET_URL w index.html
 *    (jeśli aktualizujesz istniejące wdrożenie: Zarządzaj wdrożeniami
 *     → ołówek → Wersja: Nowa → Wdróż – URL zwykle zostaje ten sam)
 *
 * ARKUSZE (tworzone automatycznie, jeśli ich nie ma):
 * - Pojemniki
 * - Sprzedaz
 * - Reklamacje
 * - Notatki
 * - Klienci
 *
 * UWAGA: Jeśli masz już dane w arkuszach o INNYCH nazwach,
 * zmień stałe SHEET_* poniżej na swoje nazwy.
 */

var SHEET_CONTAINERS = 'Pojemniki';
var SHEET_SALES = 'Sprzedaz';
var SHEET_COMPLAINTS = 'Reklamacje';
var SHEET_NOTES = 'Notatki';
var SHEET_CLIENTS = 'Klienci';
var CLIENTS_ADMIN_USER = 'tom';

var DEFAULT_CLIENTS_SEED = {
  '58B': 'FLO', '58C': 'ZKT', '58D': 'ALE', '58E': 'ARC', '58F': 'JEA',
  '58G': 'INS', '58H': 'ONI', '58J': 'LAW', '58K': 'SAL', '58L': 'MDL',
  '58M': 'FLD', '58N': 'MON', '58P': 'REN', '58Q': 'ZYL', '58Z': 'ZYL'
};

function doGet(e) {
  try {
    e = e || { parameter: {} };
    var p = e.parameter || {};

    if (p.action === 'getBalance') {
      return handleGetBalance(p);
    }

    var module = String(p.module || '').trim();

    if (module === 'clients') {
      return handleClientsModule(p);
    }
    if (module === 'containers') {
      return handleContainers(p);
    }
    if (module === 'sales') {
      return handleSales(p);
    }
    if (module === 'complaints') {
      return handleComplaints(p);
    }
    if (module === 'notes') {
      return handleNotes(p);
    }
    if (module) {
      return jsonResponse_({ status: 'error', message: 'Nieznany moduł: ' + module });
    }

    return jsonResponse_({ status: 'error', message: 'Brak parametru module lub action' });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: 'Error: ' + err });
  }
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSpreadsheet_() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getOrCreateSheet_(name, headers) {
  var ss = getSpreadsheet_();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers && headers.length) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }
  } else if (sheet.getLastRow() === 0 && headers && headers.length) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  return sheet;
}

/* ===================== POJEMNIKI ===================== */

function handleContainers(p) {
  var sheet = getOrCreateSheet_(SHEET_CONTAINERS, [
    'Timestamp', 'User', 'Client',
    'IssuedContainers', 'IssuedExtensions',
    'ReturnedContainers', 'ReturnedExtensions'
  ]);
  sheet.appendRow([
    p.timestamp || new Date().toLocaleString('pl-PL'),
    p.user || '',
    p.client || '',
    Number(p.issuedContainers || 0),
    Number(p.issuedExtensions || 0),
    Number(p.returnedContainers || 0),
    Number(p.returnedExtensions || 0)
  ]);
  return jsonResponse_({ status: 'success', message: 'Dane pojemników zapisane pomyślnie' });
}

function handleGetBalance(p) {
  var clientCode = String(p.clientCode || '').trim().toUpperCase();
  if (!clientCode) {
    return jsonResponse_({ status: 'error', message: 'Brak clientCode' });
  }

  var sheet = getOrCreateSheet_(SHEET_CONTAINERS, [
    'Timestamp', 'User', 'Client',
    'IssuedContainers', 'IssuedExtensions',
    'ReturnedContainers', 'ReturnedExtensions'
  ]);

  var totalIssued = 0;
  var totalIssuedExt = 0;
  var totalReturned = 0;
  var totalReturnedExt = 0;

  var lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    var values = sheet.getRange(2, 1, lastRow, 7).getValues();
    for (var i = 0; i < values.length; i++) {
      var client = String(values[i][2] || '').trim().toUpperCase();
      // Frontend zapisuje "58B - FLO", saldo pyta o "58B"
      if (client === clientCode || client.indexOf(clientCode + ' ') === 0 || client.indexOf(clientCode + '-') === 0) {
        totalIssued += Number(values[i][3] || 0);
        totalIssuedExt += Number(values[i][4] || 0);
        totalReturned += Number(values[i][5] || 0);
        totalReturnedExt += Number(values[i][6] || 0);
      }
    }
  }

  return jsonResponse_({
    status: 'success',
    data: {
      clientCode: clientCode,
      totalIssued: totalIssued,
      totalIssuedExt: totalIssuedExt,
      totalReturned: totalReturned,
      totalReturnedExt: totalReturnedExt,
      balance: totalIssued - totalReturned,
      balanceExt: totalIssuedExt - totalReturnedExt
    }
  });
}

/* ===================== SPRZEDAŻ / REKLAMACJE / NOTATKI ===================== */

function handleSales(p) {
  var sheet = getOrCreateSheet_(SHEET_SALES, ['Timestamp', 'User', 'Client', 'Description']);
  sheet.appendRow([
    p.timestamp || new Date().toLocaleString('pl-PL'),
    p.user || '',
    p.client || '',
    p.description || ''
  ]);
  return jsonResponse_({ status: 'success', message: 'Sprzedaż zapisana pomyślnie' });
}

function handleComplaints(p) {
  var sheet = getOrCreateSheet_(SHEET_COMPLAINTS, ['Timestamp', 'User', 'Client', 'Description']);
  sheet.appendRow([
    p.timestamp || new Date().toLocaleString('pl-PL'),
    p.user || '',
    p.client || '',
    p.description || ''
  ]);
  return jsonResponse_({ status: 'success', message: 'Reklamacja zapisana pomyślnie' });
}

function handleNotes(p) {
  var sheet = getOrCreateSheet_(SHEET_NOTES, ['Timestamp', 'User', 'Client', 'Description']);
  sheet.appendRow([
    p.timestamp || new Date().toLocaleString('pl-PL'),
    p.user || '',
    p.client || '',
    p.description || ''
  ]);
  return jsonResponse_({ status: 'success', message: 'Notatka zapisana pomyślnie' });
}

/* ===================== KLIENCI (wspólna lista) ===================== */

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

function getOrCreateClientsSheet_() {
  return getOrCreateSheet_(SHEET_CLIENTS, ['Kod', 'Nazwa']);
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
