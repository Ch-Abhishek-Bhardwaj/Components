
    function showStep(stepId) {
      document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
      });
      document.getElementById(stepId).classList.add('active');
    }

    function goToStep2() {
      const email = document.getElementById('email').value;
      if (email.trim() === '') {
        alert('Please enter your email.');
        return;
      }
      // Simulate sending OTP
      alert('OTP sent to ' + email);
      showStep('step2');
    }

    function goToStep3() {
      const otp = document.getElementById('otp').value;
      if (otp === '123456') { // Mock OTP
        showStep('step3');
      } else {
        alert('Invalid OTP. Hint: try 123456');
      }
    }

    function resetPassword() {
      const pass = document.getElementById('newPassword').value;
      const confirmPass = document.getElementById('confirmPassword').value;

      if (pass.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
      }

      if (pass !== confirmPass) {
        alert('Passwords do not match.');
        return;
      }

      document.getElementById('message').textContent = 'Password reset successfully!';
      showStep('step1'); // Optionally redirect to login
    }