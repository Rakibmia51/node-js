<h1 align="left"> Cross-Origin Resource Sharing (CORS). <h1>

###

<h2>🔹 CORS কী?</h2>
<p>👉 CORS হলো একটি HTTP security mechanism, যেটা browser-কে বলে দেয় কোন origin (domain, port, বা protocol) থেকে request করা যাবে।</p>

Same-origin request: ✅ allowed by default

Cross-origin request: ❌ by default blocked (security কারণে)

Example:

আপনার frontend চলছে → http://localhost:3000

backend চলছে → http://localhost:5000

👉 একে বলে cross-origin request।

https://profile-readme-generator.com/


🔹 কেন দরকার?

যখন frontend (React/Angular/Vue ইত্যাদি) এবং backend (Express API) আলাদা সার্ভারে থাকে, তখন ব্রাউজার by default CORS block করে।
তখন backend server-এ CORS enable করতে হয়।

🔹 Summary

CORS হলো browser security feature।

আলাদা frontend & backend হলে CORS দরকার হয়।

Express এ cors middleware ব্যবহার করে সহজেই সেটআপ করা যায়।