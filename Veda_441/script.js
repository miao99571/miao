// 第1部分：展示个人故事（含验证）
function showStory() {
    const name = document.getElementById("name").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();
    const food = document.getElementById("food").value.trim();
    const job = document.getElementById("job").value.trim();
    const resultEl = document.getElementById("storyResult");

    // 表单验证（第4部分）
    if (!name || !hobbies || !food || !job) {
        resultEl.innerHTML = "<span class='error'>Please complete all fields before submitting.</span>";
        return;
    }

    // 显示个性化消息
    resultEl.textContent = `Hello! My name is ${name}. I enjoy ${hobbies}, and my favorite food is ${food}. In the future, I hope to become a ${job}.`;
}

// 第2部分：计算预算余额（含验证）
function calculateBalance() {
    const income = parseFloat(document.getElementById("income").value) || 0;
    const foodCost = parseFloat(document.getElementById("foodCost").value) || 0;
    const transportCost = parseFloat(document.getElementById("transportCost").value) || 0;
    const entCost = parseFloat(document.getElementById("entCost").value) || 0;
    const resultEl = document.getElementById("balanceResult");

    // 表单验证（第4部分）
    if (income === 0 || isNaN(income)) {
        resultEl.innerHTML = "<span class='error'>Please complete all fields before submitting.</span>";
        return;
    }

    // 计算余额
    const totalExpense = foodCost + transportCost + entCost;
    const balance = income - totalExpense;
    resultEl.textContent = `Your remaining balance is: $${balance.toFixed(2)}`;
}

// 第3部分：生成喜好资料（含验证）
function generateProfile() {
    const movie = document.getElementById("movie").value.trim();
    const music = document.getElementById("music").value.trim();
    const place = document.getElementById("place").value.trim();
    const resultEl = document.getElementById("prefResult");

    // 表单验证（第4部分）
    if (!movie || !music || !place) {
        resultEl.innerHTML = "<span class='error'>Please complete all fields before submitting.</span>";
        return;
    }

    // 显示整合句子
    resultEl.textContent = `I love watching ${movie}, listening to ${music} music, and my favourite place to visit is ${place}.`;
}