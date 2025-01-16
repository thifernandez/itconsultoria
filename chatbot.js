async function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    document.getElementById("chat-history").innerHTML += `<p><strong>Você:</strong> ${userMessage}</p>`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer async function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    document.getElementById("chat-history").innerHTML += `<p><strong>Você:</strong> ${userMessage}</p>`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer async function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    document.getElementById("chat-history").innerHTML += `<p><strong>Você:</strong> ${userMessage}</p>`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer async function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    document.getElementById("chat-history").innerHTML += `<p><strong>Você:</strong> ${userMessage}</p>`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;
    document.getElementById("chat-history").innerHTML += `<p><strong>Bot:</strong> ${botMessage}</p>`;
}
"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;
    document.getElementById("chat-history").innerHTML += `<p><strong>Bot:</strong> ${botMessage}</p>`;
}
"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;
    document.getElementById("chat-history").innerHTML += `<p><strong>Bot:</strong> ${botMessage}</p>`;
}
"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;
    document.getElementById("chat-history").innerHTML += `<p><strong>Bot:</strong> ${botMessage}</p>`;
}
