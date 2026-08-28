/**
 * ĐÀ LẠT TRIP 2026 — 2-VIEW INTERACTIVE ENGINE
 * Features:
 * 1. Primary 2-View Segmented Switcher (Itinerary & Visuals vs Handbook & Tools)
 * 2. Visual Photo Story & Interactive Schedule Renderer
 * 3. ICS Calendar Export (.ics generator)
 * 4. Weather Scenario Toggle (Sunny vs Rainy)
 * 5. Interactive Budget Calculator
 * 6. Smart Checklist with localStorage & Category Filters
 * 7. Atmosphere Mood Theme Switcher (Mist / Pine / Night)
 * 8. Ambient Soundscape Synthesizer (Web Audio API)
 * 9. Real-time Clock, Scroll Progress & Toast System
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. PRIMARY 2-VIEW SEGMENTED CONTROLLER
     ========================================================================== */
  const segButtons = document.querySelectorAll(".main-segmented-nav .seg-btn");
  const viewItinerary = document.getElementById("view-itinerary");
  const viewHandbook = document.getElementById("view-handbook");
  const btnSwitchToHandbook = document.getElementById("btn-switch-to-handbook");
  const btnCalloutHandbook = document.getElementById("btn-callout-handbook");
  const footerViewLinks = document.querySelectorAll(".footer-view-link");

  function switchMainView(viewName, scrollTarget = null) {
    if (viewName === "handbook") {
      viewItinerary?.classList.remove("active");
      viewHandbook?.classList.add("active");
      segButtons.forEach(btn => {
        const isActive = btn.dataset.view === "handbook";
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      window.location.hash = "so-tay";
    } else {
      viewHandbook?.classList.remove("active");
      viewItinerary?.classList.add("active");
      segButtons.forEach(btn => {
        const isActive = btn.dataset.view === "itinerary";
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      window.location.hash = "lich-trinh";
    }

    if (scrollTarget) {
      setTimeout(() => {
        const targetEl = document.querySelector(scrollTarget);
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  segButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchMainView(btn.dataset.view);
    });
  });

  if (btnSwitchToHandbook) {
    btnSwitchToHandbook.addEventListener("click", () => switchMainView("handbook"));
  }

  if (btnCalloutHandbook) {
    btnCalloutHandbook.addEventListener("click", () => switchMainView("handbook"));
  }

  footerViewLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchMainView(link.dataset.view);
    });
  });

  // Handle URL hash on initial load
  if (window.location.hash === "#so-tay" || window.location.hash.startsWith("#handbook")) {
    switchMainView("handbook");
  }

  /* ==========================================================================
     2. VISUAL ITINERARY & PHOTO STORY DATA
     ========================================================================== */
  const scheduleData = [
    {
      meta: "THỨ NĂM · 17.09.2026",
      title: "Lên Đà Lạt & Khởi động nhẹ nhàng",
      tone: "mist",
      tip: "💡 Ngày đầu di chuyển không nên tự ép làm việc quá nặng. Giữ đầu óc thoải mái để nhận phòng và xe.",
      items: [
        { time: "Sáng", title: "Di chuyển lên Đà Lạt", desc: "Tới trung tâm trước giờ trưa, gửi hành lý hoặc check-in nhận phòng sớm. Không xếp lịch xa." },
        { time: "11:30–13:30", title: "Ăn trưa & Nghỉ ngơi", desc: "Ăn trưa nhẹ gần khách sạn, tắm nước ấm và nghỉ ngơi một chút sau chuyến đi." },
        { time: "14:00–17:30", title: "💼 WFH Block 1: Nhận việc & Approval", desc: "Xử lý tin nhắn, email, phê duyệt đầu việc. Tránh ôm deep work quá sức." },
        { time: "17:45–18:30", title: "⚡ Nhận xe VinFast VF 3", desc: "Kiểm tra mức pin (>80%), cáp sạc 220V, chụp 4 góc xe và lưu số hotline cứu hộ." },
        { time: "19:00–21:30", title: "Dạo Hồ Xuân Hương & Ăn tối", desc: "Chạy xe vòng quanh hồ, ngắm Quảng trường Lâm Viên, ăn tối món ngon và về nghỉ sớm." }
      ],
      gallery: {
        badge: "HỒ XUÂN HƯƠNG · 18:30",
        title: "Hoàng hôn buông trên mặt hồ phẳng lặng",
        desc: "Nhận chiếc VF 3 nhỏ gọn, chạy một vòng đón gió lạnh 17°C quanh hồ Xuân Hương và tận hưởng nhịp sống chậm rãi đặc trưng của Đà Lạt.",
        images: [
          { url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80", label: "Hoàng hôn hồ" },
          { url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80", label: "Phố chiều sương" },
          { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80", label: "Rừng thông" }
        ]
      }
    },
    {
      meta: "THỨ SÁU · 18.09.2026",
      title: "Sáng sớm Cầu Đất & Deep Work buổi chiều",
      tone: "pine",
      tip: "🌿 Điểm nhấn của chặng tự túc: Đón bình minh đồi chè không đông đúc và làm việc tập trung cao độ buổi chiều.",
      items: [
        { time: "05:30", title: "Xuất phát cung Trại Mát – Cầu Đất", desc: "Mặc ấm nhiều lớp, kiểm tra pin xe, mang theo bình giữ nhiệt nước ấm." },
        { time: "06:20–07:15", title: "Đồi chè Cầu Đất lúc vừa hửng sáng", desc: "Không khí 14°C, vắng người, sương mỏng bay trên luống chè. Dạo bước thong thả." },
        { time: "07:30–09:00", title: "☕ Cà phê ven hồ nước & Ăn sáng", desc: "Ngồi quán ven hồ tĩnh lặng, mở playlist acoustic nhẹ nhàng, trò chuyện thong thả." },
        { time: "09:30–10:30", title: "Về khách sạn tắm nước nóng", desc: "Quay về trung tâm, chuẩn bị bàn làm việc cho block tập trung chính." },
        { time: "10:45–16:30", title: "💼 WFH Block 2: Deep Work & Họp", desc: "Block làm việc quan trọng nhất chuyến đi. Ưu tiên các cuộc họp quan trọng sau 11:00." },
        { time: "17:00–21:30", title: "Phố chiều & Bữa tối ấm cúng", desc: "Ghé Dinh III hoặc Nhà thờ Con Gà ngắm hoàng hôn, ăn lẩu gà lá é hoặc nướng ngói." }
      ],
      gallery: {
        badge: "ĐỒI CHÈ CẦU ĐẤT · 06:20",
        title: "Tia nắng sớm rọi qua biển đồi chè",
        desc: "Không khí 14°C trong vắt. Những tia nắng đầu ngày xiên qua rặng thông và đồi chè xanh mướt trước khi cả nhóm ngồi bên nhau thưởng thức tách cà phê nóng ven hồ.",
        images: [
          { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80", label: "Đồi chè sớm" },
          { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80", label: "Cà phê ấm" },
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", label: "Hồ nước sáng" }
        ]
      }
    },
    {
      meta: "THỨ BẢY · 19.09.2026",
      title: "Checkout, trả VF 3 & Nhập đoàn Company Trip",
      tone: "clay",
      tip: "🤝 Chủ động liên hệ đầu mối công ty từ sáng để nắm chính xác giờ và khách sạn đón đoàn.",
      items: [
        { time: "07:30–08:30", title: "Ăn sáng & Cà phê sáng", desc: "Thưởng thức ly cà phê cuối chặng tự túc, kiểm tra tin nhắn hẹn từ đoàn." },
        { time: "08:30–10:00", title: "💼 WFH Block 3: Buffer phát sinh", desc: "Xử lý nốt việc gấp, bàn giao công việc cuối tuần và dọn dẹp hành lý gọn gàng." },
        { time: "10:30–11:30", title: "Trả phòng & Trả xe VF 3", desc: "Kiểm tra kỹ đồ đạc trong phòng và trong cốp xe, bàn giao xe cho bên dịch vụ." },
        { time: "Trưa / Chiều", title: "🏢 Gặp đoàn công ty tại điểm hẹn", desc: "Hội ngộ đồng nghiệp, nhận phòng khách sạn đoàn và bắt đầu lịch trình Company Trip!" }
      ],
      gallery: {
        badge: "CAO NGUYÊN · 10:30",
        title: "Bàn giao xe, thảnh thơi gặp đồng nghiệp",
        desc: "Hoàn tất trọn vẹn 2 ngày tự túc với đầu óc thư thái, công việc đã xử lý gọn gàng, sẵn sàng đón nguồn năng lượng vui vẻ từ đại gia đình công ty.",
        images: [
          { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80", label: "Gặp đoàn" },
          { url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80", label: "Cà phê sáng" },
          { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80", label: "Đồi thông ngút ngàn" }
        ]
      }
    },
    {
      meta: "20–21.09.2026",
      title: "Company Trip & Bay về chuyến 07:20 Thứ Hai",
      tone: "blue",
      tip: "✈️ Sân bay Liên Khương cách trung tâm 30km đèo. Tuyệt đối không rời khách sạn sau 05:15 sáng 21/09.",
      items: [
        { time: "Chủ Nhật 20.09", title: "Hoạt động Company Trip", desc: "Tham gia trọn vẹn lịch trình của công ty. Chuẩn bị sẵn hành lý trước khi đi ăn tối." },
        { time: "04:45 (T2 21.09)", title: "⏰ Báo thức & Soát đồ bay", desc: "Kiểm tra CCCD/Hộ chiếu, laptop, sạc pin và trả phòng khách sạn đoàn." },
        { time: "05:10", title: "Lên xe ra sân bay Liên Khương (DLI)", desc: "Di chuyển 45 phút qua cung đèo Prenn sáng sớm." },
        { time: "06:00", title: "Có mặt tại sân bay Liên Khương", desc: "Làm thủ tục ký gửi hành lý và vào khu vực kiểm tra an ninh." },
        { time: "07:20", title: "✈️ Cất cánh về TP.HCM (SGN)", desc: "Hạ cánh Tân Sơn Nhất lúc 08:15, kết thúc chuyến đi trọn vẹn và thư thái." }
      ],
      gallery: {
        badge: "SÂN BAY LIÊN KHƯƠNG · 06:00",
        title: "Bình minh trên đường đèo & Chuyến bay về",
        desc: "Rời phố núi khi sương mù còn giăng kín rặng thông đèo Prenn. 07:20 bay về lại TP.HCM với tinh thần tràn đầy cảm hứng cho tuần mới.",
        images: [
          { url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80", label: "Chuyến bay" },
          { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80", label: "Đèo sương mù" },
          { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80", label: "Bình minh đỉnh núi" }
        ]
      }
    }
  ];

  let currentDayIndex = 0;
  const dayCard = document.getElementById("day-card");
  const photoStoryCard = document.getElementById("photo-story-card");
  const tabButtonsH = document.querySelectorAll(".day-tabs-horizontal .tab-item-h");
  const btnCopyDay = document.getElementById("btn-copy-current-day");

  function renderDay(index) {
    currentDayIndex = index;
    const data = scheduleData[index];
    if (!data || !dayCard || !photoStoryCard) return;

    // Render Timeline on Left
    dayCard.dataset.tone = data.tone;
    dayCard.innerHTML = `
      <div>
        <div class="card-top-meta">
          <span>LỊCH TRÌNH CHI TIẾT</span>
          <span>${data.meta}</span>
        </div>
        <h3 class="day-card-title">${data.title}</h3>
        <ol class="timeline-list">
          ${data.items.map(item => `
            <li class="timeline-item">
              <time class="timeline-time">${item.time}</time>
              <div class="timeline-text">
                <strong>${item.title}</strong>
                <p>${item.desc}</p>
              </div>
            </li>
          `).join("")}
        </ol>
      </div>
      <div class="card-footer-tip">${data.tip}</div>
    `;

    // Render Photo Story on Right
    const gall = data.gallery;
    const mainImg = gall.images[0].url;

    photoStoryCard.innerHTML = `
      <div>
        <div class="photo-frame-wrapper">
          <img id="main-photo-frame" class="photo-frame-img" src="${mainImg}" alt="${gall.title}" loading="lazy">
          <span class="photo-stamp-badge">${gall.badge}</span>
        </div>

        <div class="photo-caption-block">
          <h4 class="photo-caption-title">${gall.title}</h4>
          <p class="photo-caption-desc">${gall.desc}</p>
        </div>
      </div>

      <div class="photo-thumbs-strip">
        ${gall.images.map((img, i) => `
          <div class="thumb-item ${i === 0 ? 'active' : ''}" data-img="${img.url}" title="${img.label}">
            <img src="${img.url}" alt="${img.label}" loading="lazy">
          </div>
        `).join("")}
      </div>
    `;

    // Bind thumbnail click
    photoStoryCard.querySelectorAll(".thumb-item").forEach(thumb => {
      thumb.addEventListener("click", () => {
        photoStoryCard.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        const mainImgEl = document.getElementById("main-photo-frame");
        if (mainImgEl) {
          mainImgEl.src = thumb.dataset.img;
        }
      });
    });

    // Update active horizontal tab
    tabButtonsH.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
      btn.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  tabButtonsH.forEach((btn, idx) => {
    btn.addEventListener("click", () => renderDay(idx));
  });

  renderDay(0);

  // Copy current day schedule
  if (btnCopyDay) {
    btnCopyDay.addEventListener("click", () => {
      const data = scheduleData[currentDayIndex];
      let text = `📅 ${data.meta} — ${data.title}\n\n`;
      data.items.forEach(it => {
        text += `• ${it.time}: ${it.title} - ${it.desc}\n`;
      });
      text += `\n${data.tip}`;
      navigator.clipboard.writeText(text).then(() => {
        showToast("Đã sao chép lịch trình ngày " + data.meta + " vào Clipboard!");
      });
    });
  }

  /* ==========================================================================
     3. EXPORT TO CALENDAR (.ICS FILE)
     ========================================================================== */
  const btnExportIcs = document.getElementById("btn-export-ics");
  if (btnExportIcs) {
    btnExportIcs.addEventListener("click", () => {
      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Da Lat Trip 2026//Pre-Trip Guide//VI
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Đà Lạt Trip 2026
BEGIN:VEVENT
UID:dalat-wfh-1-20260917
DTSTAMP:20260917T070000Z
DTSTART:20260917T070000Z
DTEND:20260917T103000Z
SUMMARY:💼 WFH Block 1 - Đà Lạt
DESCRIPTION:Xử lý tin nhắn, approval, email sau khi nhận phòng.
LOCATION:Khách sạn Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-vf3-pickup-20260917
DTSTAMP:20260917T104500Z
DTSTART:20260917T104500Z
DTEND:20260917T113000Z
SUMMARY:⚡ Nhận xe VinFast VF 3
DESCRIPTION:Kiểm tra pin >80%, cáp sạc 220V, quay video 4 góc xe.
LOCATION:Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-caudat-20260918
DTSTAMP:20260918T223000Z
DTSTART:20260918T223000Z
DTEND:20260919T020000Z
SUMMARY:🌄 Cầu Đất & Cà phê bên hồ
DESCRIPTION:Rời trung tâm 05:30 -> Đồi chè 06:20 -> Cafe hồ ăn sáng 07:30.
LOCATION:Đồi chè Cầu Đất, Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-wfh-2-20260918
DTSTAMP:20260918T034500Z
DTSTART:20260918T034500Z
DTEND:20260918T093000Z
SUMMARY:💼 WFH Block 2 (Deep Work)
DESCRIPTION:Tập trung làm việc và họp sau buổi sáng Cầu Đất.
LOCATION:Khách sạn / Daily Log Coffee
END:VEVENT
BEGIN:VEVENT
UID:dalat-flight-return-20260921
DTSTAMP:20260921T002000Z
DTSTART:20260921T002000Z
DTEND:20260921T011500Z
SUMMARY:✈️ Bay về TP.HCM (DLI -> SGN)
DESCRIPTION:Chuyến bay 07:20 Liên Khương. Cần rời KS lúc 05:10!
LOCATION:Sân bay Liên Khương (DLI)
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "Da-Lat-Trip-2026.ics");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Đã tải tệp Da-Lat-Trip-2026.ics! Mở tệp để đồng bộ vào Calendar.");
    });
  }

  /* ==========================================================================
     4. CẦU ĐẤT WEATHER SCENARIO TOGGLE
     ========================================================================== */
  const planDisplay = document.getElementById("plan-display");
  const planButtons = document.querySelectorAll(".plan-btn");

  const plans = {
    sunny: `
      <div class="plan-alert good">
        <strong>☀️ Kịch bản trời đẹp:</strong> Chạy thẳng Đồi chè Cầu Đất lúc 06:20. Đi bộ hít thở không khí trong lành 45 phút, chụp ảnh nắng xiên qua đồi chè, sau đó sang quán cà phê giữa hồ ngắm mặt nước phản chiếu nắng sớm.
      </div>
    `,
    rainy: `
      <div class="plan-alert bad">
        <strong>🌧️ Kịch bản sương mù dày hoặc mưa nhẹ:</strong> Bỏ qua phần đồi chè ngoài trời để tránh trơn ướt. Chạy thẳng tới quán cà phê hồ nước (có mái che ấm cúng), gọi một bình trà gừng nóng hoặc cà phê sữa, mở nhạc và ngắm sương mù phủ mặt hồ. Cầu Đất mùa mưa vẫn có vẻ đẹp rất riêng!
      </div>
    `
  };

  planButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      planButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const planType = btn.dataset.plan;
      if (planDisplay && plans[planType]) {
        planDisplay.innerHTML = plans[planType];
      }
    });
  });

  /* ==========================================================================
     5. INTERACTIVE BUDGET CALCULATOR (IN HANDBOOK VIEW)
     ========================================================================== */
  const hotelRadios = document.querySelectorAll('input[name="hotel-tier"]');
  const vf3Radios = document.querySelectorAll('input[name="vf3-opt"]');
  const peopleCountSelect = document.getElementById("people-count");
  const foodBudgetSelect = document.getElementById("food-budget");

  const sumHotelEl = document.getElementById("sum-hotel");
  const sumVf3El = document.getElementById("sum-vf3");
  const sumFoodEl = document.getElementById("sum-food");
  const sumTotalEl = document.getElementById("sum-total");
  const sumPerPersonEl = document.getElementById("sum-per-person");

  function formatVND(amount) {
    return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
  }

  function calculateBudget() {
    let hotelCost = 1800000;
    hotelRadios.forEach(r => { if (r.checked) hotelCost = parseInt(r.value, 10); });

    let vf3Cost = 1100000;
    vf3Radios.forEach(r => { if (r.checked) vf3Cost = parseInt(r.value, 10); });

    const people = peopleCountSelect ? parseInt(peopleCountSelect.value, 10) : 2;
    const foodPerDayPerPerson = foodBudgetSelect ? parseInt(foodBudgetSelect.value, 10) : 500000;
    const foodCost = foodPerDayPerPerson * 2 * people;
    const bufferCost = 500000;

    const total = hotelCost + vf3Cost + foodCost + bufferCost;
    const perPerson = Math.round(total / people);

    if (sumHotelEl) sumHotelEl.textContent = formatVND(hotelCost);
    if (sumVf3El) sumVf3El.textContent = formatVND(vf3Cost);
    if (sumFoodEl) sumFoodEl.textContent = formatVND(foodCost);
    if (sumTotalEl) sumTotalEl.textContent = formatVND(total);
    if (sumPerPersonEl) sumPerPersonEl.textContent = formatVND(perPerson) + " / người";
  }

  hotelRadios.forEach(r => r.addEventListener("change", calculateBudget));
  vf3Radios.forEach(r => r.addEventListener("change", calculateBudget));
  if (peopleCountSelect) peopleCountSelect.addEventListener("change", calculateBudget);
  if (foodBudgetSelect) foodBudgetSelect.addEventListener("change", calculateBudget);
  calculateBudget();

  /* ==========================================================================
     6. SMART CHECKLIST WITH LOCALSTORAGE (IN HANDBOOK VIEW)
     ========================================================================== */
  const defaultChecklist = [
    { id: 1, text: "Đặt khách sạn 2 đêm 17–18/09 (ưu tiên có bàn làm việc và chỗ đỗ xe VF 3)", category: "vf3", done: false },
    { id: 2, text: "Liên hệ bên thuê chốt xe VinFast VF 3 (chiều 17 đến trưa 19/09, hỏi pin & cáp sạc)", category: "vf3", done: false },
    { id: 3, text: "Chọn trước quán cà phê ven hồ ở Cầu Đất, kiểm tra giờ mở cửa sáng sớm", category: "trip", done: false },
    { id: 4, text: "Đóng gói thiết bị WFH: Laptop, củ sạc nhanh, chuột, tai nghe họp cách âm", category: "wfh", done: false },
    { id: 5, text: "Chuẩn bị cục phát Wi-Fi 4G/5G dự phòng và ổ cắm chia điện", category: "wfh", done: false },
    { id: 6, text: "Áo khoác gió nhiều lớp, khăn mỏng, ô gấp gọn và thuốc cảm/dạ dày", category: "trip", done: false },
    { id: 7, text: "Nhắn tin đầu mối đoàn: xác nhận giờ và địa điểm nhập đoàn trưa 19/09", category: "trip", done: false },
    { id: 8, text: "Kiểm tra giấy tờ tùy thân (CCCD / Bằng lái xe ô tô B2 để lái VF 3)", category: "vf3", done: false },
    { id: 9, text: "Đặt báo thức 04:45 sáng Thứ Hai 21/09 để ra sân bay Liên Khương chuyến 07:20", category: "trip", done: false }
  ];

  let checklist = [];
  try {
    const saved = localStorage.getItem("dalat_trip_checklist_2026");
    checklist = saved ? JSON.parse(saved) : defaultChecklist;
  } catch (e) {
    checklist = defaultChecklist;
  }

  const checklistContainer = document.getElementById("checklist-container");
  const filterButtons = document.querySelectorAll(".checklist-filters .filter-btn");
  const checklistPercentage = document.getElementById("checklist-percentage");
  const checklistBar = document.getElementById("checklist-bar");
  const checklistCount = document.getElementById("checklist-count");
  const addItemForm = document.getElementById("add-item-form");
  const newItemInput = document.getElementById("new-item-input");

  let currentFilter = "all";

  function saveChecklist() {
    try {
      localStorage.setItem("dalat_trip_checklist_2026", JSON.stringify(checklist));
    } catch (e) {}
    updateProgress();
  }

  function updateProgress() {
    const total = checklist.length;
    const completed = checklist.filter(it => it.done).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    if (checklistPercentage) checklistPercentage.textContent = percent + "%";
    if (checklistBar) checklistBar.style.width = percent + "%";
    if (checklistCount) checklistCount.textContent = `${completed}/${total} mục hoàn thành`;
  }

  function renderChecklist() {
    if (!checklistContainer) return;
    const filtered = checklist.filter(item => {
      if (currentFilter === "all") return true;
      return item.category === currentFilter;
    });

    checklistContainer.innerHTML = filtered.map(item => `
      <div class="check-item-row ${item.done ? 'done' : ''}" data-id="${item.id}">
        <div class="check-left">
          <div class="custom-checkbox">
            ${item.done ? '✓' : ''}
          </div>
          <span class="check-text">${item.text}</span>
        </div>
        <button class="btn-delete-item" title="Xóa mục này" aria-label="Xóa">✕</button>
      </div>
    `).join("");

    checklistContainer.querySelectorAll(".check-left").forEach(el => {
      el.addEventListener("click", () => {
        const row = el.closest(".check-item-row");
        const id = parseInt(row.dataset.id, 10);
        const target = checklist.find(i => i.id === id);
        if (target) {
          target.done = !target.done;
          saveChecklist();
          renderChecklist();
        }
      });
    });

    checklistContainer.querySelectorAll(".btn-delete-item").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const row = btn.closest(".check-item-row");
        const id = parseInt(row.dataset.id, 10);
        checklist = checklist.filter(i => i.id !== id);
        saveChecklist();
        renderChecklist();
      });
    });

    updateProgress();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderChecklist();
    });
  });

  if (addItemForm && newItemInput) {
    addItemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = newItemInput.value.trim();
      if (!val) return;
      checklist.push({
        id: Date.now(),
        text: val,
        category: currentFilter === "all" ? "trip" : currentFilter,
        done: false
      });
      newItemInput.value = "";
      saveChecklist();
      renderChecklist();
      showToast("Đã thêm việc mới vào checklist!");
    });
  }

  renderChecklist();

  /* ==========================================================================
     7. ATMOSPHERE THEME SWITCHER
     ========================================================================== */
  const moodButtons = document.querySelectorAll(".mood-btn");
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem("dalat_mood_theme") || "mist";
  applyTheme(savedTheme);

  function applyTheme(theme) {
    htmlRoot.setAttribute("data-theme", theme);
    moodButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
    localStorage.setItem("dalat_mood_theme", theme);
  }

  moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(btn.dataset.theme);
      const label = btn.querySelector(".mood-text")?.textContent || "";
      showToast(`Đã chuyển bầu không khí: ${label}`);
    });
  });

  /* ==========================================================================
     8. AMBIENT SOUNDSCAPE (WEB AUDIO SYNTHESIZER)
     ========================================================================== */
  const soundToggleBtn = document.getElementById("sound-toggle");
  let audioCtx = null;
  let isPlayingSound = false;
  let windGain = null;
  let noiseNode = null;

  function initSoundscape() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    const bandpass = audioCtx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(320, audioCtx.currentTime);
    bandpass.Q.setValueAtTime(1.5, audioCtx.currentTime);

    const lfo = audioCtx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime);
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(120, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(bandpass.frequency);

    windGain = audioCtx.createGain();
    windGain.gain.setValueAtTime(0.001, audioCtx.currentTime);

    noiseNode.connect(bandpass);
    bandpass.connect(windGain);
    windGain.connect(audioCtx.destination);

    noiseNode.start();
    lfo.start();
  }

  function toggleAmbientSound() {
    if (!audioCtx) initSoundscape();

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (!isPlayingSound) {
      windGain.gain.cancelScheduledValues(audioCtx.currentTime);
      windGain.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 1.5);
      isPlayingSound = true;
      soundToggleBtn.classList.add("playing");
      showToast("🌲 Đang phát tiếng gió rừng thông Đà Lạt...");
    } else {
      windGain.gain.cancelScheduledValues(audioCtx.currentTime);
      windGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
      isPlayingSound = false;
      soundToggleBtn.classList.remove("playing");
      showToast("Đã tắt âm thanh thiên nhiên.");
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", toggleAmbientSound);
  }

  /* ==========================================================================
     9. 1-CLICK COPY ACTIONS (HOTLINES & ADDRESSES)
     ========================================================================== */
  document.querySelectorAll(".btn-copy-action").forEach(btn => {
    btn.addEventListener("click", () => {
      const copyVal = btn.dataset.copy;
      if (copyVal) {
        navigator.clipboard.writeText(copyVal).then(() => {
          showToast(`Đã sao chép: ${copyVal}`);
        });
      }
    });
  });

  /* ==========================================================================
     10. SCROLL PROGRESS & REALTIME CLOCK
     ========================================================================== */
  const scrollProgress = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = scrolled + "%";
    }
  }, { passive: true });

  const dalatClock = document.getElementById("dalat-clock");
  function updateClock() {
    if (!dalatClock) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    dalatClock.textContent = `ĐÀ LẠT · ${hours}:${mins} · 16°C`;
  }
  updateClock();
  setInterval(updateClock, 30000);

  /* ==========================================================================
     11. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.innerHTML = `<span>🌿</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("out");
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }
});
