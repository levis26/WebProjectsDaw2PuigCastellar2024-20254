const emailRegex = /\b\w+[\w.-]*@\w+\.com\b/g;

function findEmails() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const output = document.getElementById('output') as HTMLElement;

    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            const content = reader.result as string;
            const emails = content.match(emailRegex);

            if (emails) {
                output.textContent = `Correos encontrados:\n${emails.join('\n')}`;
            } else {
                output.textContent = "No se encontraron correos electrónicos que terminen en .com";
            }
        };

        reader.readAsText(file);
    } else {
        output.textContent = "Por favor, selecciona un archivo de texto.";
    }
}

(window as any).findEmails = findEmails;
