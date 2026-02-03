<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ewidencja Pojemnik贸w</title>
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

        input, select {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input:focus, select:focus {
            outline: none;
            border-color: #667eea;
        }

        .number-input {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .number-input input {
            text-align: center;
            font-size: 20px;
            font-weight: 600;
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
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>馃摝 Ewidencja Pojemnik贸w</h1>
            <p>System rejestracji wyda艅 i zwrot贸w</p>
        </div>

        <div class="content">
            <!-- Login Screen -->
            <div id="loginScreen">
                <div class="form-group">
                    <label for="username">Nazwa u偶ytkownika</label>
                    <input type="text" id="username" placeholder="Wpisz swoj膮 nazw臋">
                </div>
                <div class="form-group">
                    <label for="password">Has艂o</label>
                    <input type="password" id="password" placeholder="Wpisz has艂o">
                </div>
                <div id="loginError" class="alert alert-error hidden"></div>
                <button onclick="login()">Zaloguj si臋</button>
            </div>

            <!-- Main App -->
            <div id="mainApp" class="hidden">
                <div class="user-info">
                    <span>Zalogowany: <strong id="loggedUser"></strong></span>
                    <button class="btn-logout" onclick="logout()" style="width: auto; padding: 5px 15px; font-size: 14px;">Wyloguj</button>
                </div>

                <!-- Step Indicator -->
                <div class="step-indicator">
                    <div class="step active" id="step1">
                        <div class="step-number">1</div>
                        <div class="step-label">Klient</div>
                    </div>
                    <div class="step" id="step2">
                        <div class="step-number">2</div>
                        <div class="step-label">Wydanie</div>
                    </div>
                    <div class="step" id="step3">
                        <div class="step-number">3</div>
                        <div class="step-label">Zwrot</div>
                    </div>
                    <div class="step" id="step4">
                        <div class="step-number">4</div>
                        <div class="step-label">Podsumowanie</div>
                    </div>
                </div>

                <!-- Step 1: Client Selection -->
                <div id="screen1">
                    <div class="form-group">
                        <label for="clientSelect">Wybierz klienta</label>
                        <select id="clientSelect">
                            <option value="">-- Wybierz klienta --</option>
                        </select>
                    </div>
                    <button onclick="goToStep2()">Dalej</button>
                </div>

                <!-- Step 2: Issued Items -->
                <div id="screen2" class="hidden">
                    <h3 style="margin-bottom: 20px; color: #333;">Wydanie pojemnik贸w</h3>
                    <div class="form-group">
                        <label for="issuedContainers">Pojemniki wydane</label>
                        <input type="number" id="issuedContainers" min="0" value="0">
                    </div>
                    <div class="form-group">
                        <label for="issuedExtensions">Nadstawki wydane</label>
                        <input type="number" id="issuedExtensions" min="0" value="0">
                    </div>
                    <button onclick="goToStep3()">Dalej</button>
                    <button class="btn-secondary" onclick="goToStep1()">Wstecz</button>
                </div>

                <!-- Step 3: Returned Items -->
                <div id="screen3" class="hidden">
                    <h3 style="margin-bottom: 20px; color: #333;">Zwrot pojemnik贸w</h3>
                    <div class="form-group">
                        <label for="returnedContainers">Pojemniki zwr贸cone</label>
                        <input type="number" id="returnedContainers" min="0" value="0">
                    </div>
                    <div class="form-group">
                        <label for="returnedExtensions">Nadstawki zwr贸cone</label>
                        <input type="number" id="returnedExtensions" min="0" value="0">
                    </div>
                    <button onclick="goToStep4()">Dalej</button>
                    <button class="btn-secondary" onclick="goToStep2()">Wstecz</button>
                </div>

                <!-- Step 4: Summary -->
                <div id="screen4" class="hidden">
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
                            <span class="summary-label">Pojemniki zwr贸cone:</span>
                            <span class="summary-value" id="summaryReturnedContainers"></span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Nadstawki zwr贸cone:</span>
                            <span class="summary-value" id="summaryReturnedExtensions"></span>
                        </div>
                    </div>
                    <div id="submitMessage" class="hidden"></div>
                    <button onclick="submitData()" id="submitBtn">Zapisz do arkusza</button>
                    <button class="btn-secondary" onclick="goToStep3()">Wstecz</button>
                    <button class="btn-secondary" onclick="startOver()">Nowy wpis</button>
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
    </div>

    <script>
        // Configuration - WYPE艁NIJ TE DANE
        const CONFIG = {
            SHEET_URL: 'https://script.google.com/macros/s/AKfycbwahxH85QiIfjXPTcKw7BVtK2CnaMYrrmNHz9zWsfArlfb9WMbVfhA9RQsr3R2d_WSk/exec', // URL z Google Apps Script
            USERS: {
                'admin': 'haslo123',
                'jan': 'jan123',
                'anna': 'anna123'
                // Dodaj wi臋cej u偶ytkownik贸w w formacie 'login': 'haslo'
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

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            populateClientSelect();
            checkLogin();
        });

        function checkLogin() {
            const savedUser = localStorage.getItem('loggedUser');
            if (savedUser) {
                currentUser = savedUser;
                showMainApp();
            }
        }

        function login() {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('loginError');

            if (!username || !password) {
                errorDiv.textContent = 'Wype艂nij wszystkie pola';
                errorDiv.classList.remove('hidden');
                return;
            }

            if (CONFIG.USERS[username] && CONFIG.USERS[username] === password) {
                currentUser = username;
                localStorage.setItem('loggedUser', username);
                errorDiv.classList.add('hidden');
                showMainApp();
            } else {
                errorDiv.textContent = 'Nieprawid艂owa nazwa u偶ytkownika lub has艂o';
                errorDiv.classList.remove('hidden');
            }
        }

        function logout() {
            localStorage.removeItem('loggedUser');
            currentUser = null;
            document.getElementById('mainApp').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }

        function showMainApp() {
            document.getElementById('loginScreen').classList.add('hidden');
            document.getElementById('mainApp').classList.remove('hidden');
            document.getElementById('loggedUser').textContent = currentUser;
        }

        function populateClientSelect() {
            const select = document.getElementById('clientSelect');
            for (const [code, name] of Object.entries(CLIENTS)) {
                const option = document.createElement('option');
                option.value = `${code} - ${name}`;
                option.textContent = `${code} - ${name}`;
                select.appendChild(option);
            }
        }

        function goToStep1() {
            updateSteps(1);
            showScreen('screen1');
        }

        function goToStep2() {
            const client = document.getElementById('clientSelect').value;
            if (!client) {
                alert('Wybierz klienta');
                return;
            }
            updateSteps(2);
            showScreen('screen2');
        }

        function goToStep3() {
            updateSteps(3);
            showScreen('screen3');
        }

        function goToStep4() {
            updateSteps(4);
            updateSummary();
            showScreen('screen4');
        }

        function updateSteps(currentStep) {
            for (let i = 1; i <= 4; i++) {
                const step = document.getElementById(`step${i}`);
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

        function showScreen(screenId) {
            ['screen1', 'screen2', 'screen3', 'screen4', 'loadingScreen'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            document.getElementById(screenId).classList.remove('hidden');
        }

        function updateSummary() {
            document.getElementById('summaryClient').textContent = document.getElementById('clientSelect').value;
            document.getElementById('summaryIssuedContainers').textContent = document.getElementById('issuedContainers').value;
            document.getElementById('summaryIssuedExtensions').textContent = document.getElementById('issuedExtensions').value;
            document.getElementById('summaryReturnedContainers').textContent = document.getElementById('returnedContainers').value;
            document.getElementById('summaryReturnedExtensions').textContent = document.getElementById('returnedExtensions').value;
        }

        async function submitData() {
            if (!CONFIG.SHEET_URL || CONFIG.SHEET_URL === 'TUTAJ_WKLEJ_URL_WEB_APP') {
                alert('Skonfiguruj URL arkusza w pliku index.html (zmienna CONFIG.SHEET_URL)');
                return;
            }

            const submitBtn = document.getElementById('submitBtn');
            const messageDiv = document.getElementById('submitMessage');
            
            submitBtn.disabled = true;
            showScreen('loadingScreen');

            const data = {
                timestamp: new Date().toLocaleString('pl-PL'),
                user: currentUser,
                client: document.getElementById('clientSelect').value,
                issuedContainers: parseInt(document.getElementById('issuedContainers').value),
                issuedExtensions: parseInt(document.getElementById('issuedExtensions').value),
                returnedContainers: parseInt(document.getElementById('returnedContainers').value),
                returnedExtensions: parseInt(document.getElementById('returnedExtensions').value)
            };

            try {
                const response = await fetch(CONFIG.SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // no-cors mode doesn't give us response status, so we assume success
                messageDiv.className = 'alert alert-success';
                messageDiv.textContent = '鉁?Dane zapisane pomy艣lnie!';
                messageDiv.classList.remove('hidden');
                
                setTimeout(() => {
                    startOver();
                }, 2000);

            } catch (error) {
                console.error('Error:', error);
                messageDiv.className = 'alert alert-error';
                messageDiv.textContent = '鉁?B艂膮d podczas zapisywania. Spr贸buj ponownie.';
                messageDiv.classList.remove('hidden');
                showScreen('screen4');
            } finally {
                submitBtn.disabled = false;
            }
        }

        function startOver() {
            document.getElementById('clientSelect').value = '';
            document.getElementById('issuedContainers').value = '0';
            document.getElementById('issuedExtensions').value = '0';
            document.getElementById('returnedContainers').value = '0';
            document.getElementById('returnedExtensions').value = '0';
            document.getElementById('submitMessage').classList.add('hidden');
            goToStep1();
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
