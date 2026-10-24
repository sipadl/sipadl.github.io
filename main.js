// Simple interactive utility functions for recruiter convenience

document.addEventListener('DOMContentLoaded', () => {
    // Print functionality
    const printBtn = document.getElementById('btnPrint');
    if (printBtn) {
        printBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.print();
        });
    }

    // Copy email helper
    const copyEmailBtn = document.getElementById('btnCopyEmail');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = 'fadel.mm01@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
                const originalText = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg> Copied!
                `;
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalText;
                }, 2000);
            } catch (err) {
                window.location.href = `mailto:${email}`;
            }
        });
    }
});
