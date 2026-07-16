// Funkcja obsługująca żądania GET z aplikacji webowej
function doGet(e) {
  try {
    Logger.log('=== START doGet ===');
    Logger.log('Parametry: ' + JSON.stringify(e.parameter));
    
    // Jeśli to request o saldo
    if (e.parameter.action === 'getBalance') {
      return getClientBalance(e);
    }
    
    const module = e.parameter.module || 'containers';
    
    if (module === 'clients') {
      return handleClientsModule(e);
    } else if (module === 'containers') {
      return handleContainers(e);
    } else if (module === 'sales') {
      return handleSales(e);
    } else if (module === 'complaints') {
      return handleComplaints(e);
    } else if (module === 'notes') {
      return handleNotes(e);
    } else {
      throw new Error('Nieznany moduł: ' + module);
    }
    
  } catch (error) {
    Logger.log('=== BŁĄD w doGet ===');
    Logger.log('Błąd: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== MODUŁ 1: POJEMNIKI =====
function handleContainers(e) {
  Logger.log('=== MODUŁ: POJEMNIKI ===');
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dataSheet = getOrCreateSheet(ss, 'Dane');
  
  const data = {
    timestamp: e.parameter.timestamp || new Date().toLocaleString('pl-PL'),
    user: e.parameter.user || 'unknown',
    client: e.parameter.client || '',
    issuedContainers: parseInt(e.parameter.issuedContainers) || 0,
    issuedExtensions: parseInt(e.parameter.issuedExtensions) || 0,
    returnedContainers: parseInt(e.parameter.returnedContainers) || 0,
    returnedExtensions: parseInt(e.parameter.returnedExtensions) || 0
  };
  
  // Dodaj nagłówki, jeśli arkusz jest pusty
  if (dataSheet.getLastRow() === 0) {
    dataSheet.appendRow([
      'Data i godzina',
      'Użytkownik',
      'Klient - Kod',
      'Klient - Nazwa',
      'Pojemniki wydane',
      'Nadstawki wydane',
      'Pojemniki zwrócone',
      'Nadstawki zwrócone'
    ]);
    
    const headerRange = dataSheet.getRange(1, 1, 1, 8);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#667eea');
    headerRange.setFontColor('#ffffff');
    dataSheet.setFrozenRows(1);
  }
  
  // Rozdziel kod i nazwę klienta
  const clientParts = data.client.split(' - ');
  const clientCode = clientParts[0] || data.client;
  const clientName = clientParts[1] || '';
  
  // Dodaj wiersz z danymi
  dataSheet.appendRow([
    data.timestamp,
    data.user,
    clientCode,
    clientName,
    data.issuedContainers,
    data.issuedExtensions,
    data.returnedContainers,
    data.returnedExtensions
  ]);
  
  dataSheet.autoResizeColumns(1, 8);
  updateSummaryTable(ss);
  
  Logger.log('Pojemniki zapisane pomyślnie');
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Dane pojemników zapisane pomyślnie'
  })).setMimeType(ContentService.MimeType.JSON);
}

// ===== MODUŁ 2: SPRZEDAŻ =====
function handleSales(e) {
  Logger.log('=== MODUŁ: SPRZEDAŻ ===');
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = getOrCreateSheet(ss, 'Sprzedaż');
  
  const data = {
    timestamp: e.parameter.timestamp || new Date().toLocaleString('pl-PL'),
    user: e.parameter.user || 'unknown',
    client: e.parameter.client || '',
    description: e.parameter.description || ''
  };
  
  Logger.log('Dane sprzedaży: ' + JSON.stringify(data));
  
  // Dodaj nagłówki, jeśli arkusz jest pusty
  if (salesSheet.getLastRow() === 0) {
    salesSheet.appendRow([
      'Data i godzina',
      'Użytkownik',
      'Klient - Kod',
      'Klient - Nazwa',
      'Opis sprzedaży'
    ]);
    
    const headerRange = salesSheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f5576c');
    headerRange.setFontColor('#ffffff');
    salesSheet.setFrozenRows(1);
  }
  
  // Rozdziel kod i nazwę klienta
  const clientParts = data.client.split(' - ');
  const clientCode = clientParts[0] || data.client;
  const clientName = clientParts[1] || '';
  
  // Dodaj wiersz z danymi
  salesSheet.appendRow([
    data.timestamp,
    data.user,
    clientCode,
    clientName,
    data.description
  ]);
  
  salesSheet.autoResizeColumns(1, 5);
  
  Logger.log('Sprzedaż zapisana pomyślnie');
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Sprzedaż zapisana pomyślnie'
  })).setMimeType(ContentService.MimeType.JSON);
}

// ===== MODUŁ 3: REKLAMACJE =====
function handleComplaints(e) {
  Logger.log('=== MODUŁ: REKLAMACJE ===');
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const complaintsSheet = getOrCreateSheet(ss, 'Reklamacje');
  
  const data = {
    timestamp: e.parameter.timestamp || new Date().toLocaleString('pl-PL'),
    user: e.parameter.user || 'unknown',
    client: e.parameter.client || '',
    description: e.parameter.description || ''
  };
  
  Logger.log('Dane reklamacji: ' + JSON.stringify(data));
  
  // Dodaj nagłówki, jeśli arkusz jest pusty
  if (complaintsSheet.getLastRow() === 0) {
    complaintsSheet.appendRow([
      'Data i godzina',
      'Użytkownik',
      'Klient - Kod',
      'Klient - Nazwa',
      'Opis reklamacji'
    ]);
    
    const headerRange = complaintsSheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#fee140');
    headerRange.setFontColor('#333333');
    complaintsSheet.setFrozenRows(1);
  }
  
  // Rozdziel kod i nazwę klienta
  const clientParts = data.client.split(' - ');
  const clientCode = clientParts[0] || data.client;
  const clientName = clientParts[1] || '';
  
  // Dodaj wiersz z danymi
  complaintsSheet.appendRow([
    data.timestamp,
    data.user,
    clientCode,
    clientName,
    data.description
  ]);
  
  complaintsSheet.autoResizeColumns(1, 5);
  
  Logger.log('Reklamacja zapisana pomyślnie');
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Reklamacja zapisana pomyślnie'
  })).setMimeType(ContentService.MimeType.JSON);
}

// ===== MODUŁ 4: NOTATKI =====
function handleNotes(e) {
  Logger.log('=== MODUŁ: NOTATKI ===');
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const notesSheet = getOrCreateSheet(ss, 'Notatki');
  
  const data = {
    timestamp: e.parameter.timestamp || new Date().toLocaleString('pl-PL'),
    user: e.parameter.user || 'unknown',
    client: e.parameter.client || 'Ogólna',
    description: e.parameter.description || ''
  };
  
  Logger.log('Dane notatki: ' + JSON.stringify(data));
  
  // Dodaj nagłówki, jeśli arkusz jest pusty
  if (notesSheet.getLastRow() === 0) {
    notesSheet.appendRow([
      'Data i godzina',
      'Użytkownik',
      'Klient - Kod',
      'Klient - Nazwa',
      'Treść notatki'
    ]);
    
    const headerRange = notesSheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#a8edea');
    headerRange.setFontColor('#333333');
    notesSheet.setFrozenRows(1);
  }
  
  // Rozdziel kod i nazwę klienta (jeśli podano)
  let clientCode = '';
  let clientName = '';
  
  if (data.client !== 'Ogólna' && data.client.includes(' - ')) {
    const clientParts = data.client.split(' - ');
    clientCode = clientParts[0] || '';
    clientName = clientParts[1] || '';
  }
  
  // Dodaj wiersz z danymi
  notesSheet.appendRow([
    data.timestamp,
    data.user,
    clientCode,
    clientName,
    data.description
  ]);
  
  notesSheet.autoResizeColumns(1, 5);
  
  Logger.log('Notatka zapisana pomyślnie');
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Notatka zapisana pomyślnie'
  })).setMimeType(ContentService.MimeType.JSON);
}

// ===== MODUŁ 5: KLIENCI (wspólna lista dla wszystkich) =====
var CLIENTS_ADMIN_USER = 'tom';

var DEFAULT_CLIENTS_SEED = {
  '58B': 'FLO', '58C': 'ZKT', '58D': 'ALE', '58E': 'ARC', '58F': 'JEA',
  '58G': 'INS', '58H': 'ONI', '58J': 'LAW', '58K': 'SAL', '58L': 'MDL',
  '58M': 'FLD', '58N': 'MON', '58P': 'REN', '58Q': 'ZYL', '58Z': 'ZYL'
};

function handleClientsModule(e) {
  Logger.log('=== MODUŁ: KLIENCI ===');
  var clientsAction = String(e.parameter.clientsAction || e.parameter.op || '').trim();

  if (clientsAction === 'list' || clientsAction === 'get') {
    return handleGetClients();
  }
  if (clientsAction === 'add') {
    return handleAddClient(e);
  }
  if (clientsAction === 'remove') {
    return handleRemoveClient(e);
  }

  return ContentService.createTextOutput(JSON.stringify({
    status: 'error',
    message: 'Nieznana akcja klientów. Użyj: list, add, remove'
  })).setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateClientsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getOrCreateSheet(ss, 'Klienci');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Kod', 'Nazwa']);
    var headerRange = sheet.getRange(1, 1, 1, 2);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#434343');
    headerRange.setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readClientsMap_() {
  var sheet = getOrCreateClientsSheet_();
  var lastRow = sheet.getLastRow();

  // Pierwsze uruchomienie – wypełnij domyślną listą
  if (lastRow < 2) {
    var codes = Object.keys(DEFAULT_CLIENTS_SEED);
    for (var i = 0; i < codes.length; i++) {
      sheet.appendRow([codes[i], DEFAULT_CLIENTS_SEED[codes[i]]]);
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
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: { clients: readClientsMap_() }
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: String(err)
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleAddClient(e) {
  try {
    var user = String(e.parameter.user || '').trim();
    if (user !== CLIENTS_ADMIN_USER) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Brak uprawnień'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var code = String(e.parameter.code || '').trim().toUpperCase();
    var name = String(e.parameter.name || '').trim().toUpperCase();
    if (!code || !name) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Podaj kod i nazwę klienta'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = getOrCreateClientsSheet_();
    if (findClientRow_(sheet, code) !== -1) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Klient o tym kodzie już istnieje'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([code, name]);
    sheet.autoResizeColumns(1, 2);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Klient dodany',
      data: { clients: readClientsMap_() }
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: String(err)
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleRemoveClient(e) {
  try {
    var user = String(e.parameter.user || '').trim();
    if (user !== CLIENTS_ADMIN_USER) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Brak uprawnień'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var code = String(e.parameter.code || '').trim().toUpperCase();
    if (!code) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Podaj kod klienta'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = getOrCreateClientsSheet_();
    var row = findClientRow_(sheet, code);
    if (row === -1) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Nie znaleziono klienta'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.deleteRow(row);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Klient usunięty',
      data: { clients: readClientsMap_() }
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: String(err)
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Funkcja obsługująca żądania POST z aplikacji webowej (dla kompatybilności wstecznej)
function doPost(e) {
  try {
    Logger.log('=== START doPost ===');
    
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log('Arkusz: ' + ss.getName());
    
    const dataSheet = getOrCreateSheet(ss, 'Dane');
    Logger.log('Karta "Dane" - wierszy przed: ' + dataSheet.getLastRow());
    
    const data = JSON.parse(e.postData.contents);
    Logger.log('Otrzymane dane: ' + JSON.stringify(data));
    
    // Dodaj nagłówki, jeśli arkusz jest pusty
    if (dataSheet.getLastRow() === 0) {
      Logger.log('Dodawanie nagłówków...');
      dataSheet.appendRow([
        'Data i godzina',
        'Użytkownik',
        'Klient - Kod',
        'Klient - Nazwa',
        'Pojemniki wydane',
        'Nadstawki wydane',
        'Pojemniki zwrócone',
        'Nadstawki zwrócone'
      ]);
      
      const headerRange = dataSheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#667eea');
      headerRange.setFontColor('#ffffff');
      dataSheet.setFrozenRows(1);
      Logger.log('Nagłówki dodane');
    }
    
    // Rozdziel kod i nazwę klienta
    const clientParts = data.client.split(' - ');
    const clientCode = clientParts[0] || data.client;
    const clientName = clientParts[1] || '';
    
    Logger.log('Klient: ' + clientCode + ' - ' + clientName);
    
    // Dodaj wiersz z danymi
    const rowData = [
      data.timestamp,
      data.user,
      clientCode,
      clientName,
      data.issuedContainers,
      data.issuedExtensions,
      data.returnedContainers,
      data.returnedExtensions
    ];
    
    Logger.log('Dodawanie wiersza: ' + JSON.stringify(rowData));
    dataSheet.appendRow(rowData);
    Logger.log('Wiersz dodany! Wierszy po: ' + dataSheet.getLastRow());
    
    dataSheet.autoResizeColumns(1, 8);
    
    Logger.log('Aktualizacja tabeli podsumowującej...');
    updateSummaryTable(ss);
    Logger.log('Tabela zaktualizowana');
    
    Logger.log('=== KONIEC doPost - SUKCES ===');
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Dane zapisane pomyślnie'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('=== BŁĄD w doPost ===');
    Logger.log('Błąd: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Funkcja tworząca/aktualizująca arkusz "Tabela" ze spójnymi danymi
function updateSummaryTable(ss) {
  const dataSheet = ss.getSheetByName('Dane');
  const tableSheet = getOrCreateSheet(ss, 'Tabela');
  
  if (!dataSheet || dataSheet.getLastRow() <= 1) {
    return;
  }
  
  const dataRange = dataSheet.getRange(2, 1, dataSheet.getLastRow() - 1, 8);
  const data = dataRange.getValues();
  
  const summary = {};
  
  data.forEach(row => {
    const clientCode = row[2];
    const clientName = row[3];
    const issuedContainers = parseInt(row[4]) || 0;
    const issuedExtensions = parseInt(row[5]) || 0;
    const returnedContainers = parseInt(row[6]) || 0;
    const returnedExtensions = parseInt(row[7]) || 0;
    
    if (!clientCode) return;
    
    if (!summary[clientCode]) {
      summary[clientCode] = {
        name: clientName,
        totalIssued: 0,
        totalIssuedExt: 0,
        totalReturned: 0,
        totalReturnedExt: 0,
        balance: 0,
        balanceExt: 0
      };
    }
    
    summary[clientCode].totalIssued += issuedContainers;
    summary[clientCode].totalIssuedExt += issuedExtensions;
    summary[clientCode].totalReturned += returnedContainers;
    summary[clientCode].totalReturnedExt += returnedExtensions;
  });
  
  // Oblicz bilanse (POPRAWIONA LOGIKA: zwrócone - wydane = minus gdy klient ma nasze pojemniki)
  Object.keys(summary).forEach(code => {
    summary[code].balance = summary[code].totalReturned - summary[code].totalIssued;
    summary[code].balanceExt = summary[code].totalReturnedExt - summary[code].totalIssuedExt;
  });
  
  tableSheet.clear();
  
  const headers = [
    'Kod',
    'Klient',
    'Pojemniki wydane (suma)',
    'Nadstawki wydane (suma)',
    'Pojemniki zwrócone (suma)',
    'Nadstawki zwrócone (suma)',
    'Bilans pojemników',
    'Bilans nadstawek'
  ];
  tableSheet.appendRow(headers);
  
  const headerRange = tableSheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#667eea');
  headerRange.setFontColor('#ffffff');
  headerRange.setHorizontalAlignment('center');
  tableSheet.setFrozenRows(1);
  
  const sortedCodes = Object.keys(summary).sort();
  sortedCodes.forEach(code => {
    const client = summary[code];
    tableSheet.appendRow([
      code,
      client.name,
      client.totalIssued,
      client.totalIssuedExt,
      client.totalReturned,
      client.totalReturnedExt,
      client.balance,
      client.balanceExt
    ]);
  });
  
  if (tableSheet.getLastRow() > 1) {
    tableSheet.getRange(2, 1, tableSheet.getLastRow() - 1, 1).setHorizontalAlignment('center');
    
    for (let col = 3; col <= headers.length; col++) {
      tableSheet.getRange(2, col, tableSheet.getLastRow() - 1, 1).setHorizontalAlignment('center');
    }
    
    const balanceRange = tableSheet.getRange(2, 7, tableSheet.getLastRow() - 1, 2);
    balanceRange.setFontWeight('bold');
    
    const balanceValues = balanceRange.getValues();
    balanceValues.forEach((row, i) => {
      row.forEach((val, j) => {
        const cell = tableSheet.getRange(i + 2, j + 7);
        // POPRAWIONA LOGIKA: ujemny = klient ma nasze (czerwony), dodatni = zwrócił więcej (żółty), zero = OK (zielony)
        if (val < 0) {
          cell.setBackground('#f8d7da').setFontColor('#721c24'); // Czerwony - klient ma nasze
        } else if (val > 0) {
          cell.setBackground('#fff3cd').setFontColor('#856404'); // Żółty - zwrócił więcej
        } else {
          cell.setBackground('#d4edda').setFontColor('#155724'); // Zielony - OK
        }
      });
    });
  }
  
  tableSheet.autoResizeColumns(1, headers.length);
  
  tableSheet.getRange(tableSheet.getLastRow() + 2, 1)
    .setValue('Ostatnia aktualizacja: ' + new Date().toLocaleString('pl-PL'))
    .setFontStyle('italic')
    .setFontColor('#666666');
}

// Pomocnicza funkcja do tworzenia arkusza, jeśli nie istnieje
function getOrCreateSheet(ss, sheetName) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  return sheet;
}

// Funkcja do ręcznego odświeżenia tabeli
function refreshSummaryTable() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  updateSummaryTable(ss);
  SpreadsheetApp.getUi().alert('Tabela została odświeżona!');
}

// Funkcja tworząca menu w arkuszu
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🔄 Ewidencja')
    .addItem('Odśwież tabelę podsumowującą', 'refreshSummaryTable')
    .addItem('Wyczyść arkusz Dane', 'clearDataSheet')
    .addItem('Wyczyść arkusz Sprzedaż', 'clearSalesSheet')
    .addItem('Wyczyść arkusz Reklamacje', 'clearComplaintsSheet')
    .addItem('Wyczyść arkusz Notatki', 'clearNotesSheet')
    .addToUi();
}

// Funkcje czyszczące
function clearDataSheet() {
  clearSheet('Dane', 'Tabela');
}

function clearSalesSheet() {
  clearSheet('Sprzedaż');
}

function clearComplaintsSheet() {
  clearSheet('Reklamacje');
}

function clearNotesSheet() {
  clearSheet('Notatki');
}

function clearSheet(sheetName, alsoSheetName) {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    'Potwierdzenie',
    'Czy na pewno chcesz wyczyścić WSZYSTKIE dane z arkusza "' + sheetName + '"? Tej operacji nie można cofnąć!',
    ui.ButtonSet.YES_NO
  );
  
  if (response == ui.Button.YES) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    if (sheet) {
      sheet.clear();
      ui.alert('Arkusz "' + sheetName + '" został wyczyszczony.');
      
      if (alsoSheetName) {
        const alsoSheet = ss.getSheetByName(alsoSheetName);
        if (alsoSheet) {
          alsoSheet.clear();
        }
      }
    }
  }
}

// Nowa funkcja - pobieranie salda klienta
function getClientBalance(e) {
  Logger.log('=== POBIERANIE SALDA ===');
  
  const clientCode = e.parameter.clientCode || '';
  Logger.log('Kod klienta: ' + clientCode);
  
  if (!clientCode) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: 'Nie podano kodu klienta'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dataSheet = ss.getSheetByName('Dane');
  
  if (!dataSheet || dataSheet.getLastRow() <= 1) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: {
        clientCode: clientCode,
        totalIssued: 0,
        totalIssuedExt: 0,
        totalReturned: 0,
        totalReturnedExt: 0,
        balance: 0,
        balanceExt: 0
      }
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Pobierz wszystkie dane
  const dataRange = dataSheet.getRange(2, 1, dataSheet.getLastRow() - 1, 8);
  const data = dataRange.getValues();
  
  // Sumuj dla wybranego klienta
  let totalIssued = 0;
  let totalIssuedExt = 0;
  let totalReturned = 0;
  let totalReturnedExt = 0;
  
  data.forEach(row => {
    const rowClientCode = row[2]; // Kod klienta (kolumna C)
    
    if (rowClientCode === clientCode) {
      totalIssued += parseInt(row[4]) || 0;
      totalIssuedExt += parseInt(row[5]) || 0;
      totalReturned += parseInt(row[6]) || 0;
      totalReturnedExt += parseInt(row[7]) || 0;
    }
  });
  
  // POPRAWIONA LOGIKA: wydane - zwrócone = ile jest u klienta
  const balance = totalIssued - totalReturned;
  const balanceExt = totalIssuedExt - totalReturnedExt;
  
  Logger.log('Saldo: U klienta Pojemniki=' + balance + ', Nadstawki=' + balanceExt);
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    data: {
      clientCode: clientCode,
      totalIssued: totalIssued,
      totalIssuedExt: totalIssuedExt,
      totalReturned: totalReturned,
      totalReturnedExt: totalReturnedExt,
      balance: balance,
      balanceExt: balanceExt
    }
  })).setMimeType(ContentService.MimeType.JSON);
}

// Funkcje testowe
function testUpdateTable() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  updateSummaryTable(ss);
  Logger.log('Tabela zaktualizowana pomyślnie!');
}

function testHandleContainers() {
  const mockEvent = {
    parameter: {
      module: 'containers',
      timestamp: new Date().toLocaleString('pl-PL'),
      user: 'test_user',
      client: '58B - FLO',
      issuedContainers: '10',
      issuedExtensions: '5',
      returnedContainers: '8',
      returnedExtensions: '3'
    }
  };
  
  const result = doGet(mockEvent);
  Logger.log('Test pojemników: ' + result.getContent());
}

function testHandleSales() {
  const mockEvent = {
    parameter: {
      module: 'sales',
      timestamp: new Date().toLocaleString('pl-PL'),
      user: 'test_user',
      client: '58C - ZKT',
      description: 'Sprzedaż 10 kartonów papryki czerwonej po 5 EUR/szt'
    }
  };
  
  const result = doGet(mockEvent);
  Logger.log('Test sprzedaży: ' + result.getContent());
}

function testHandleComplaints() {
  const mockEvent = {
    parameter: {
      module: 'complaints',
      timestamp: new Date().toLocaleString('pl-PL'),
      user: 'test_user',
      client: '58D - ALE',
      description: 'Reklamacja jakości - pomidory przegniłe, batch #12345'
    }
  };
  
  const result = doGet(mockEvent);
  Logger.log('Test reklamacji: ' + result.getContent());
}

function testHandleNotes() {
  const mockEvent = {
    parameter: {
      module: 'notes',
      timestamp: new Date().toLocaleString('pl-PL'),
      user: 'test_user',
      client: '58B - FLO',
      description: 'Pamiętać o specjalnych wymaganiach jakościowych dla tego klienta'
    }
  };
  
  const result = doGet(mockEvent);
  Logger.log('Test notatki: ' + result.getContent());
}

function debugSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('=== INFORMACJE O ARKUSZU ===');
  Logger.log('Nazwa arkusza: ' + ss.getName());
  Logger.log('URL arkusza: ' + ss.getUrl());
  Logger.log('Liczba kart: ' + ss.getSheets().length);
  Logger.log('');
  
  const sheets = ss.getSheets();
  sheets.forEach((sheet, index) => {
    Logger.log('Karta #' + (index + 1) + ':');
    Logger.log('  Nazwa: "' + sheet.getName() + '"');
    Logger.log('  Wierszy: ' + sheet.getLastRow());
    Logger.log('  Kolumn: ' + sheet.getLastColumn());
    Logger.log('');
  });
  
  Logger.log('=== KONIEC DEBUGOWANIA ===');
}

// Test funkcji getBalance
function testGetBalance() {
  const mockEvent = {
    parameter: {
      action: 'getBalance',
      clientCode: '58B'
    }
  };
  
  const result = doGet(mockEvent);
  Logger.log('Test getBalance: ' + result.getContent());
}
