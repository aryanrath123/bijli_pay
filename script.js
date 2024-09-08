document.addEventListener('DOMContentLoaded', function() {
    function openPaymentPage() {
        var options = {
            key: "rzp_test_EwlhHS5sAjsq9S", // Replace with your Razorpay API key
            amount: 5000 * 100, // Amount in paise
            currency: "INR",
            name: "BiJli Bachao",
            description: "Test Transaction",
            image: "istockphoto-1300637525-612x612.jpg", // Replace with your logo URL
            handler: function (response) {
                alert('Payment Successful: ' + response.razorpay_payment_id);
                sessionStorage.setItem('paymentCompleted', 'true'); // Mark payment as completed

                // Redirect to the Streamlit app with payment ID
                window.location.href = "http://localhost:8501/?payment_id=" + response.razorpay_payment_id;
            },
            prefill: {
                name: "Aryan Rath",
                email: "aryan.rath@example.com",
                contact: "8926374441",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#A020F0",
            },
        };

        var paymentObject = new Razorpay(options);
        paymentObject.open();
    }

    openPaymentPage(); // Automatically open payment page when script loads
});
