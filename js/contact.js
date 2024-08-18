document.addEventListener("DOMContentLoaded", function () {
	emailjs.init("Y5Nd_3lMtdCRknsf1");

	document.querySelector(".submit-btn").addEventListener("click", function () {
		const name = document.getElementById("yournameInput").value;
		const company = document.getElementById("yourcompanyInput").value;
		const email = document.getElementById("Email").value;
		const budget = document.getElementById("estimateBudget").value;
		const message = document.getElementById("message").value;

		if (!name || !email || !message) {
			alert("Please fill in all required fields.");
			return;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			alert("Please enter a valid email address.");
			return;
		}

		emailjs
			.send("service_euskq55", "template_0bg0r9g", {
				from_name: name,
				from_company: company,
				from_email: email,
				budget_estimate: budget,
				message: message,
			})
			.then(function (response) {
				alert("Message sent successfully!");
				// 清空表单字段（可选）
				document.getElementById("yournameInput").value = "";
				document.getElementById("yourcompanyInput").value = "";
				document.getElementById("Email").value = "";
				document.getElementById("estimateBudget").value = "";
				document.getElementById("message").value = "";
			})
			.catch(function (error) {
				alert("Failed to send message.");
				console.error("EmailJS Error:", error);
			});
	});
});
