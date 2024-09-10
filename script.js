document.addEventListener('DOMContentLoaded', function() {
    // Function to trigger the payment page
    function openPaymentPage() {
        var options = {
            key: "rzp_test_EwlhHS5sAjsq9S", // Replace with your Razorpay API key
            amount: 1999 * 100, // Amount in paise
            currency: "INR",
            name: "BiJli Bachao",
            description: "Test Transaction",
            image: "istockphoto-1300637525-612x612.jpg", // Replace with your logo URL
            handler: function (response) {
                alert('Payment Successful: ' + response.razorpay_payment_id);
                sessionStorage.setItem('paymentCompleted', 'true'); // Mark payment as completed
            
                // Redirect to the specific Streamlit page with payment ID
                window.location.href = "http://localhost:8501/Smart_Meter_Access?payment_id=" + response.razorpay_payment_id;
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

    // Check if payment was completed
    if (sessionStorage.getItem('paymentCompleted') === 'true') {
        sessionStorage.removeItem('paymentCompleted'); // Clear status
        console.log('Payment was completed.');
        // Add additional handling here if needed
    } else {
        document.getElementById('message').classList.remove('hidden');
        console.log('Payment page is being opened.');
        openPaymentPage();
    }
});
