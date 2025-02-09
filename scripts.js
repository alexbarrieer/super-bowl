document.addEventListener('DOMContentLoaded', function() {
    // Wallet Connection
    const connectWalletBtn = document.querySelector('.connect-wallet');
    const buyButton = document.querySelector('.buy-button');

    connectWalletBtn.addEventListener('click', async function() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                connectWalletBtn.textContent = `Connected: ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
                connectWalletBtn.classList.add('connected');
                buyButton.disabled = false;
            } catch (error) {
                console.error('User denied account access');
            }
        } else {
            alert('Please install MetaMask or another Web3 wallet!');
        }
    });

    // Buy Token Functionality
    buyButton.addEventListener('click', async function() {
        if (typeof window.ethereum !== 'undefined') {
            if (!window.ethereum.selectedAddress) {
                alert('Please connect your wallet first!');
                return;
            }
            try {
                // Here you would implement the actual token purchase logic
                alert('Processing purchase... (Implementation pending)');
            } catch (error) {
                console.error('Transaction failed:', error);
            }
        } else {
            alert('Please install MetaMask or another Web3 wallet!');
        }
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 