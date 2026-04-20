const translations = {
    en: {
        badge: "Any Version Compatible",
        subtitle: "Fast, reliable and automatic license generator.",
        usernameLabel: "Username",
        usernamePlaceholder: "e.g. My Company Inc",
        editionLabel: "License Type",
        editionPlaceholder: "e.g. Unlimited Company License",
        generateBtn: "Generate License",
        successMsg: "rarreg.key downloaded securely!"
    },
    es: {
        badge: "Compatible con cualquier versión",
        subtitle: "Generador de licencias rápido, confiable y automático.",
        usernameLabel: "Nombre de usuario",
        usernamePlaceholder: "ej. My Company Inc",
        editionLabel: "Tipo de licencia",
        editionPlaceholder: "ej. Unlimited Company License",
        generateBtn: "Generar Licencia",
        successMsg: "¡rarreg.key descargado con éxito!"
    }
};

document.addEventListener('alpine:init', () => {
    Alpine.data('keygenApp', () => ({
        lang: 'en',
        t: translations['en'],
        userName: 'My Company Inc',
        licenseType: 'Unlimited Company License',
        toast: { show: false, message: '' },

        init() {
            // Load preferred language from localStorage
            const savedLang = localStorage.getItem('winrarKeygenLang');
            if (savedLang && translations[savedLang]) {
                this.lang = savedLang;
                this.t = translations[savedLang];
            }
        },

        updateLanguage() {
            this.t = translations[this.lang];
            localStorage.setItem('winrarKeygenLang', this.lang);
        },

        isDark() {
            return document.documentElement.classList.contains('dark');
        },

        toggleTheme() {
            if (this.isDark()) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        },

        showToast(msg) {
            this.toast.message = msg;
            this.toast.show = true;
            setTimeout(() => {
                this.toast.show = false;
            }, 3000);
        },

        generate() {
            if (!this.userName || !this.licenseType) return;

            try {
                // Generate the raw license string
                const keyData = generateWinRARLicense(this.userName, this.licenseType);

                // Use Uint8Array and Blob to prevent double-encoding of UTF-8 characters by the browser
                const bytes = new Uint8Array(keyData.length);
                for (let i = 0; i < keyData.length; i++) {
                    bytes[i] = keyData.charCodeAt(i);
                }
                const blob = new Blob([bytes], { type: "application/octet-stream" });
                
                const link = document.createElement("a");
                link.setAttribute("href", URL.createObjectURL(blob));
                link.setAttribute("download", "rarreg.key");

                // Programmatically trigger download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Keep memory clean
                setTimeout(() => URL.revokeObjectURL(link.href), 100);

                this.showToast(this.t.successMsg);
            } catch (err) {
                console.error("Error generating key:", err);
                alert("Error: " + err.message);
            }
        }
    }));
});
