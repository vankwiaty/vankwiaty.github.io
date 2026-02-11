<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Ewidencji</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }

        .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }

        .header p {
            font-size: 14px;
            opacity: 0.9;
        }

        .content {
            padding: 30px 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
            font-size: 14px;
        }

        input, select, textarea {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s;
            font-family: inherit;
        }

        textarea {
            min-height: 100px;
            resize: vertical;
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #667eea;
        }

        button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        button:active {
            transform: translateY(0);
        }

        button:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
        }

        .btn-secondary {
            background: #6c757d;
            margin-top: 10px;
        }

        .btn-logout {
            background: #dc3545;
            margin-top: 10px;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }

        .menu-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 15px;
            padding: 25px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            text-align: center;
        }

        .menu-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .menu-card.containers {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .menu-card.sales {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }

        .menu-card.complaints {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            color: white;
        }

        .menu-card-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }

        .menu-card-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .menu-card-desc {
            font-size: 14px;
            opacity: 0.9;
        }

        .step-indicator {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            padding: 0 10px;
        }

        .step {
            flex: 1;
            text-align: center;
            padding: 10px;
            position: relative;
        }

        .step::before {
            content: '';
            position: absolute;
            top: 15px;
            left: 0;
            right: 0;
            height: 2px;
            background: #e0e0e0;
            z-index: -1;
        }

        .step:first-child::before {
            left: 50%;
        }

        .step:last-child::before {
            right: 50%;
        }

        .step-number {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #e0e0e0;
            color: #999;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .step.active .step-number {
            background: #667eea;
            color: white;
        }

        .step.completed .step-number {
            background: #28a745;
            color: white;
        }

        .step-label {
            font-size: 12px;
            color: #666;
        }

        .hidden {
            display: none;
        }

        .user-info {
            background: #f8f9fa;
            padding: 10px 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user-info span {
            font-size: 14px;
            color: #666;
        }

        .alert {
            padding: 12px 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-size: 14px;
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .summary-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .summary-item:last-child {
            border-bottom: none;
        }

        .summary-label {
            color: #666;
        }

        .summary-value {
            font-weight: 600;
            color: #333;
        }

        .loading {
            text-align: center;
            padding: 20px;
        }

        .spinner {
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .back-to-menu {
            background: #6c757d;
            margin-top: 15px;
        }

        .module-header {
            text-align: center;
            margin-bottom: 25px;
        }

        .module-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }

        .module-title {
            font-size: 22px;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
        }

        .module-desc {
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🗂️ System Ewidencji</h1>
            <p>Pojemniki • Sprzedaż • Reklamacje</p>
        </div>

        <div class="content">
            <!-- Login Screen -->
            <div id="loginScreen">
                <div class="form-group">
                    <label for="username">Nazwa użytkownika</label>
                    <input type="text" id="username" placeholder="Wpisz swoją nazwę">
                </div>
                <div class="form-group">
                    <label for="password">Hasło</label>
                    <input type="password" id="password" placeholder="Wpisz hasło">
                </div>
                <div id="loginError" class="alert alert-error hidden"></div>
                <button onclick="login()">Zaloguj się</button>
            </div>

            <!-- Main Menu -->
            <div id="mainMenu" class="hidden">
                <div class="user-info">
                    <span>Zalogowany: <strong id="loggedUser"></strong></span>
                    <button class="btn-logout" onclick="logout()" style="width: auto; padding: 5px 15px; font-size: 14px;">Wyloguj</button>
                </div>

                <h3 style="text-align: center; margin-bottom: 20px; color: #333;">Wybierz moduł</h3>

                <div class="menu-grid">
                    <div class="menu-card containers" onclick="openModule('containers')">
                        <div class="menu-card-icon">📦</div>
                        <div class="menu-card-title">Pojemniki</div>
                        <div class="menu-card-desc">Ewidencja wydań i zwrotów</div>
                    </div>

                    <div class="menu-card sales" onclick="openModule('sales')">
                        <div class="menu-card-icon">💰</div>
                        <div class="menu-card-title">Sprzedaż ze stocku</div>
                        <div class="menu-card-desc">Rejestracja sprzedaży</div>
                    </div>

                    <div class="menu-card complaints" onclick="openModule('complaints')">
                        <div class="menu-card-icon">⚠️</div>
                        <div class="menu-card-title">Reklamacje</div>
                        <div class="menu-card-desc">Zgłoszenia reklamacyjne</div>
                    </div>
                </div>
            </div>

            <!-- MODULE 1: CONTAINERS -->
            <div id="containersModule" class="hidden">
                <div class="user-info">
                    <span><strong id="loggedUserContainers"></strong></span>
                </div>

                <div class="module-header">
                    <div class="module-icon">📦</div>
                    <div class="module-title">Ewidencja Pojemników</div>
                </div>

                <!-- Step Indicator -->
                <div class="step-indicator">
                    <div class="step active" id="containerStep1">
                        <div class="step-number">1</div>
                        <div class="step-label">Klient</div>
                    </div>
                    <div class="step" id="containerStep2">
                        <div class="step-number">2</div>
                        <div class="step-label">Wydanie</div>
                    </div>
                    <div class="step" id="containerStep3">
                        <div class="step-number">3</div>
                        <div class="step-label">Zwrot</div>
                    </div>
                    <div class="step" id="containerStep4">
                        <div class="step-number">4</div>
                        <div class="step-label">Podsumowanie</div>
                    </div>
                </div>

                <!-- Container screens -->
                <div id="containerScreen1">
                    <div class="form-group">
                        <label for="containerClientSelect">Wybierz klienta</label>
                        <select id="containerClientSelect">
                            <option value="">-- Wybierz klienta --</option>
                        </select>
                    </div>
                    <button onclick="containerGoToStep2()">Dalej</button>
                    <button class="back-to-menu" onclick="backToMenu()">Powrót do menu</button>
                </div>

                <div id="containerScreen2" class="hidden">
                    <h3 style="margin-bottom: 20px; color: #333;">Wydanie pojemników</h3>
                    <div class="form-group">
                        <label for="issuedContainers">Pojemniki wydane</label>
                        <input type="number" id="issuedContainers" min="0" value="0">
                    </div>
                    <div class="form-group">
                        <label for="issuedExtensions">Nadstawki wydane</label>
                        <input type="number" id="issuedExtensions" min="0" value="0">
                    </div>
                    <button onclick="containerGoToStep3()">Dalej</button>
                    <button class="btn-secondary" onclick="containerGoToStep1()">Wstecz</button>
                </div>

                <div id="containerScreen3" class="hidden">
                    <h3 style="margin-bottom: 20px; color: #333;">Zwrot pojemników</h3>
                    <div class="form-group">
                        <label for="returnedContainers">Pojemniki zwrócone</label>
                        <input type="number" id="returnedContainers" min="0" value="0">
                    </div>
                    <div class="form-group">
                        <label for="returnedExtensions">Nadstawki zwrócone</label>
                        <input type="number" id="returnedExtensions" min="0" value="0">
                    </div>
                    <button onclick="containerGoToStep4()">Dalej</button>
                    <button class="btn-secondary" onclick="containerGoToStep2()">Wstecz</button>
                </div>

                <div id="containerScreen4" class="hidden">
                    <h3 style="margin-bottom: 20px; color: #333;">Podsumowanie</h3>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <div class="summary-item">
                            <span class="summary-label">Klient:</span>
                            <span class="summary-value" id="summaryClient"></span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Pojemniki wydane:</span>
                            <span class="summary-value" id="summaryIssuedContainers"></span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Nadstawki wydane:</span>
                            <span class="summary-value" id="summaryIssuedExtensions"></span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Pojemniki zwrócone:</span>
                            <span class="summary-value" id="summaryReturnedContainers"></span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Nadstawki zwrócone:</span>
                            <span class="summary-value" id="summaryReturnedExtensions"></span>
                        </div>
                    </div>
                    <div id="containerSubmitMessage" class="hidden"></div>
                    <button onclick="submitContainerData()" id="containerSubmitBtn">Zapisz do arkusza</button>
                    <button class="btn-secondary" onclick="containerGoToStep3()">Wstecz</button>
                    <button class="btn-secondary" onclick="containerStartOver()">Nowy wpis</button>
                </div>
            </div>

            <!-- MODULE 2: SALES -->
            <div id="salesModule" class="hidden">
                <div class="user-info">
                    <span><strong id="loggedUserSales"></strong></span>
                </div>

                <div class="module-header">
                    <div class="module-icon">💰</div>
                    <div class="module-title">Sprzedaż ze stocku</div>
                </div>

                <div class="form-group">
                    <label for="salesClientSelect">Wybierz klienta</label>
                    <select id="salesClientSelect">
                        <option value="">-- Wybierz klienta --</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="salesDescription">Opis sprzedaży</label>
                    <textarea id="salesDescription" placeholder="Wpisz szczegóły sprzedaży (produkt, ilość, cena, itp.)"></textarea>
                </div>

                <div id="salesMessage" class="hidden"></div>
                
                <button onclick="submitSalesData()" id="salesSubmitBtn">Zapisz sprzedaż</button>
                <button class="back-to-menu" onclick="backToMenu()">Powrót do menu</button>
            </div>

            <!-- MODULE 3: COMPLAINTS -->
            <div id="complaintsModule" class="hidden">
                <div class="user-info">
                    <span><strong id="loggedUserComplaints"></strong></span>
                </div>

                <div class="module-header">
                    <div class="module-icon">⚠️</div>
                    <div class="module-title">Reklamacje</div>
                </div>

                <div class="form-group">
                    <label for="complaintsClientSelect">Wybierz klienta</label>
                    <select id="complaintsClientSelect">
                        <option value="">-- Wybierz klienta --</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="complaintsDescription">Opis reklamacji</label>
                    <textarea id="complaintsDescription" placeholder="Wpisz szczegóły reklamacji (powód, produkty, itp.)"></textarea>
                </div>

                <div id="complaintsMessage" class="hidden"></div>
                
                <button onclick="submitComplaintsData()" id="complaintsSubmitBtn">Zapisz reklamację</button>
                <button class="back-to-menu" onclick="backToMenu()">Powrót do menu</button>
            </div>

            <!-- Loading indicator -->
            <div id="loadingScreen" class="hidden">
                <div class="loading">
                    <div class="spinner"></div>
                    <p style="margin-top: 15px; color: #666;">Zapisywanie danych...</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Configuration
        const CONFIG = {
            SHEET_URL: 'https://script.google.com/macros/s/AKfycbxPStMbunGAIXYjqAh3WISU1AnvMblRNdI59Bst3C-FSHC1QHEB1PU2UELmbItrEHga/exec', // URL z Google Apps Script
            USERS: {
                'mikolaj': 'rs3',
                'tom': 'glc',
                'anita': 'rav4'
            }
        };

        const CLIENTS = {
            "58B": "FLO",
            "58C": "ZKT",
            "58D": "ALE",
            "58E": "ARC",
            "58F": "JEA",
            "58G": "INS",
            "58H": "ONI",
            "58J": "LAW",
            "58K": "SAL",
            "58L": "MDL",
            "58M": "FLD",
            "58N": "MON",
            "58P": "REN",
            "58Q": "ZYL",
            "58Z": "ZYL"
        };

        let currentUser = null;
        let currentModule = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            populateClientSelects();
            checkLogin();
        });

        function checkLogin() {
            const savedUser = localStorage.getItem('loggedUser');
            if (savedUser) {
                currentUser = savedUser;
                showMainMenu();
            }
        }

        function login() {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('loginError');

            if (!username || !password) {
                errorDiv.textContent = 'Wypełnij wszystkie pola';
                errorDiv.classList.remove('hidden');
                return;
            }

            if (CONFIG.USERS[username] && CONFIG.USERS[username] === password) {
                currentUser = username;
                localStorage.setItem('loggedUser', username);
                errorDiv.classList.add('hidden');
                showMainMenu();
            } else {
                errorDiv.textContent = 'Nieprawidłowa nazwa użytkownika lub hasło';
                errorDiv.classList.remove('hidden');
            }
        }

        function logout() {
            localStorage.removeItem('loggedUser');
            currentUser = null;
            currentModule = null;
            hideAllScreens();
            document.getElementById('loginScreen').classList.remove('hidden');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }

        function showMainMenu() {
            hideAllScreens();
            document.getElementById('mainMenu').classList.remove('hidden');
            document.getElementById('loggedUser').textContent = currentUser;
        }

        function populateClientSelects() {
            const selects = ['containerClientSelect', 'salesClientSelect', 'complaintsClientSelect'];
            selects.forEach(selectId => {
                const select = document.getElementById(selectId);
                for (const [code, name] of Object.entries(CLIENTS)) {
                    const option = document.createElement('option');
                    option.value = `${code} - ${name}`;
                    option.textContent = `${code} - ${name}`;
                    select.appendChild(option);
                }
            });
        }

        function hideAllScreens() {
            const screens = [
                'loginScreen', 'mainMenu', 'containersModule', 'salesModule', 
                'complaintsModule', 'loadingScreen'
            ];
            screens.forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
        }

        function openModule(module) {
            currentModule = module;
            hideAllScreens();
            
            if (module === 'containers') {
                document.getElementById('containersModule').classList.remove('hidden');
                document.getElementById('loggedUserContainers').textContent = currentUser;
                containerGoToStep1();
            } else if (module === 'sales') {
                document.getElementById('salesModule').classList.remove('hidden');
                document.getElementById('loggedUserSales').textContent = currentUser;
            } else if (module === 'complaints') {
                document.getElementById('complaintsModule').classList.remove('hidden');
                document.getElementById('loggedUserComplaints').textContent = currentUser;
            }
        }

        function backToMenu() {
            // Reset forms
            if (currentModule === 'containers') {
                containerStartOver();
            } else if (currentModule === 'sales') {
                document.getElementById('salesClientSelect').value = '';
                document.getElementById('salesDescription').value = '';
                document.getElementById('salesMessage').classList.add('hidden');
            } else if (currentModule === 'complaints') {
                document.getElementById('complaintsClientSelect').value = '';
                document.getElementById('complaintsDescription').value = '';
                document.getElementById('complaintsMessage').classList.add('hidden');
            }
            
            currentModule = null;
            showMainMenu();
        }

        // ===== CONTAINERS MODULE =====
        function containerGoToStep1() {
            containerUpdateSteps(1);
            containerShowScreen('containerScreen1');
        }

        function containerGoToStep2() {
            const client = document.getElementById('containerClientSelect').value;
            if (!client) {
                alert('Wybierz klienta');
                return;
            }
            containerUpdateSteps(2);
            containerShowScreen('containerScreen2');
        }

        function containerGoToStep3() {
            containerUpdateSteps(3);
            containerShowScreen('containerScreen3');
        }

        function containerGoToStep4() {
            containerUpdateSteps(4);
            containerUpdateSummary();
            containerShowScreen('containerScreen4');
        }

        function containerUpdateSteps(currentStep) {
            for (let i = 1; i <= 4; i++) {
                const step = document.getElementById(`containerStep${i}`);
                if (i < currentStep) {
                    step.classList.add('completed');
                    step.classList.remove('active');
                } else if (i === currentStep) {
                    step.classList.add('active');
                    step.classList.remove('completed');
                } else {
                    step.classList.remove('active', 'completed');
                }
            }
        }

        function containerShowScreen(screenId) {
            ['containerScreen1', 'containerScreen2', 'containerScreen3', 'containerScreen4'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            document.getElementById(screenId).classList.remove('hidden');
        }

        function containerUpdateSummary() {
            document.getElementById('summaryClient').textContent = document.getElementById('containerClientSelect').value;
            document.getElementById('summaryIssuedContainers').textContent = document.getElementById('issuedContainers').value;
            document.getElementById('summaryIssuedExtensions').textContent = document.getElementById('issuedExtensions').value;
            document.getElementById('summaryReturnedContainers').textContent = document.getElementById('returnedContainers').value;
            document.getElementById('summaryReturnedExtensions').textContent = document.getElementById('returnedExtensions').value;
        }

        async function submitContainerData() {
            const submitBtn = document.getElementById('containerSubmitBtn');
            const messageDiv = document.getElementById('containerSubmitMessage');
            
            submitBtn.disabled = true;
            hideAllScreens();
            document.getElementById('loadingScreen').classList.remove('hidden');

            const params = new URLSearchParams({
                module: 'containers',
                timestamp: new Date().toLocaleString('pl-PL'),
                user: currentUser,
                client: document.getElementById('containerClientSelect').value,
                issuedContainers: document.getElementById('issuedContainers').value,
                issuedExtensions: document.getElementById('issuedExtensions').value,
                returnedContainers: document.getElementById('returnedContainers').value,
                returnedExtensions: document.getElementById('returnedExtensions').value
            });

            try {
                await fetch(CONFIG.SHEET_URL + '?' + params.toString(), {
                    method: 'GET',
                    redirect: 'follow'
                });

                document.getElementById('containersModule').classList.remove('hidden');
                containerShowScreen('containerScreen4');
                document.getElementById('loadingScreen').classList.add('hidden');
                
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '✓ Dane zapisane pomyślnie!';
                messageDiv.classList.remove('hidden');
                
                setTimeout(() => {
                    containerStartOver();
                }, 2000);

            } catch (error) {
                console.error('Error:', error);
                
                document.getElementById('containersModule').classList.remove('hidden');
                containerShowScreen('containerScreen4');
                document.getElementById('loadingScreen').classList.add('hidden');
                
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '✓ Dane prawdopodobnie zapisane. Sprawdź arkusz.';
                messageDiv.classList.remove('hidden');
                
                setTimeout(() => {
                    containerStartOver();
                }, 3000);
            } finally {
                submitBtn.disabled = false;
            }
        }

        function containerStartOver() {
            document.getElementById('containerClientSelect').value = '';
            document.getElementById('issuedContainers').value = '0';
            document.getElementById('issuedExtensions').value = '0';
            document.getElementById('returnedContainers').value = '0';
            document.getElementById('returnedExtensions').value = '0';
            document.getElementById('containerSubmitMessage').classList.add('hidden');
            containerGoToStep1();
        }

        // ===== SALES MODULE =====
        async function submitSalesData() {
            const client = document.getElementById('salesClientSelect').value;
            const description = document.getElementById('salesDescription').value.trim();
            const messageDiv = document.getElementById('salesMessage');
            const submitBtn = document.getElementById('salesSubmitBtn');

            if (!client) {
                alert('Wybierz klienta');
                return;
            }

            if (!description) {
                alert('Wpisz opis sprzedaży');
                return;
            }

            submitBtn.disabled = true;
            hideAllScreens();
            document.getElementById('loadingScreen').classList.remove('hidden');

            const params = new URLSearchParams({
                module: 'sales',
                timestamp: new Date().toLocaleString('pl-PL'),
                user: currentUser,
                client: client,
                description: description
            });

            try {
                await fetch(CONFIG.SHEET_URL + '?' + params.toString(), {
                    method: 'GET',
                    redirect: 'follow'
                });

                document.getElementById('salesModule').classList.remove('hidden');
                document.getElementById('loadingScreen').classList.add('hidden');
                
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '✓ Sprzedaż zapisana pomyślnie!';
                messageDiv.classList.remove('hidden');
                
                setTimeout(() => {
                    document.getElementById('salesClientSelect').value = '';
                    document.getElementById('salesDescription').value = '';
                    messageDiv.classList.add('hidden');
                }, 2000);

            } catch (error) {
                console.error('Error:', error);
                
                document.getElementById('salesModule').classList.remove('hidden');
                document.getElementById('loadingScreen').classList.add('hidden');
                
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '✓ Sprzedaż prawdopodobnie zapisana. Sprawdź arkusz.';
                messageDiv.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
            }
        }

        // ===== COMPLAINTS MODULE =====
        async function submitComplaintsData() {
            const client = document.getElementById('complaintsClientSelect').value;
            const description = document.getElementById('complaintsDescription').value.trim();
            const messageDiv = document.getElementById('complaintsMessage');
            const submitBtn = document.getElementById('complaintsSubmitBtn');

            if (!client) {
                alert('Wybierz klienta');
                return;
            }

            if (!description) {
                alert('Wpisz opis reklamacji');
                return;
            }

            submitBtn.disabled = true;
            hideAllScreens();
            document.getElementById('loadingScreen').classList.add('hidden');

            const params = new URLSearchParams({
                module: 'complaints',
                timestamp: new Date().toLocaleString('pl-PL'),
                user: currentUser,
                client: client,
                description: description
            });

            try {
                await fetch(CONFIG.SHEET_URL + '?' + params.toString(), {
                    method: 'GET',
                    redirect: 'follow'
                });

                document.getElementById('complaintsModule').classList.remove('hidden');
                document.getElementById('loadingScreen').classList.add('hidden');
                
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '✓ Reklamacja zapisana pomyślnie!';
                messageDiv.classList.remove('hidden');
                
                setTimeout(() => {
                    document.getElementById('complaintsClientSelect').value = '';
                    document.getElementById('complaintsDescription').value = '';
                    messageDiv.classList.add('hidden');
                }, 2000);

            } catch (error) {
                console.error('Error:', error);
                
                document.getElementById('complaintsModule').classList.remove('hidden');
                document.getElementById('loadingScreen').classList.add('hidden');
                
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '✓ Reklamacja prawdopodobnie zapisana. Sprawdź arkusz.';
                messageDiv.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
            }
        }

        // Allow Enter key to login
        document.getElementById('password').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });
    </script>
</body>
</html>
