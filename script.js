function updateAndCelebrate() {
    const name = document.getElementById('userName').value;
    const amount = document.getElementById('userAmount').value;

    if (!name || !amount) {
        alert("আরে! নাম আর টাকার পরিমাণ না লিখলে সওয়াব পাবেন কীভাবে? 😊");
        return;
    }

    // কার্ডের টেক্সট আপডেট
    document.getElementById('res-name').innerText = name;
    document.getElementById('res-amount').innerText = "৳ " + amount;

    // ডাউনলোড বাটন দেখানো
    document.getElementById('downloadBtn').style.display = "block";

    // কনফেটি (টাকার বৃষ্টি)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#f59e0b', '#ffffff']
    });
}

function downloadCard() {
    const card = document.getElementById('capture-card');
    
    html2canvas(card, {
        backgroundColor: "#1e293b", // ডার্ক থিম কালার
        scale: 2 
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'HasPakhi-Eid-Salami.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
        
        setTimeout(() => {
            alert("ঈদ মোবারক! কার্ডটি ডাউনলোড হয়েছে। এবার বড়দের পাঠিয়ে দিন! 😂");
        }, 500);
    });
}
