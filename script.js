/**
 * ĐÀ LẠT TRIP 2026 — 2-VIEW INTERACTIVE ENGINE
 * Compact, high-readability, location-first itinerary & verified Da Lat imagery.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. PRIMARY 2-VIEW SEGMENTED CONTROLLER
     ========================================================================== */
  const segButtons = document.querySelectorAll(".main-segmented-nav .seg-btn");
  const viewItinerary = document.getElementById("view-itinerary");
  const viewHandbook = document.getElementById("view-handbook");
  const btnSwitchToHandbook = document.getElementById("btn-switch-to-handbook");
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

  footerViewLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchMainView(link.dataset.view);
    });
  });

  if (window.location.hash === "#so-tay" || window.location.hash.startsWith("#handbook")) {
    switchMainView("handbook");
  }

  /* ==========================================================================
     2. STREAMLINED TIMELINE & LOCATION DATA
     ========================================================================== */
  const scheduleData = [
    {
      meta: "THỨ NĂM · 17.09.2026",
      title: "Lên Đà Lạt, WFH & Lẩu Cá Tầm",
      tone: "mist",
      tip: "💡 Nhận xe VF 3 kiểm tra pin >80% & đặt bàn trước Lẩu cá tầm Ngư Sơn.",
      items: [
        {
          time: "09:30 – 11:30",
          title: "Đến nơi & Gửi hành lý",
          location: "Free Style Hotel (57 Hoàng Diệu) hoặc BIDV Central (11 Bis Lê Hồng Phong)",
          note: "Gửi đồ tại lễ tân, rửa mặt nghỉ ngơi nhẹ.",
          tag: "Check-in"
        },
        {
          time: "11:30 – 13:00",
          title: "Ăn trưa Bánh ướt lòng gà / Bánh căn",
          location: "Bánh ướt lòng gà Long (Hẻm 202 Phan Đình Phùng) hoặc Bánh căn Lệ (27/44 Yersin)",
          note: "Gà ta xé giòn, nước mắm ấm chua ngọt, trà atiso nóng.",
          tag: "Ăn trưa"
        },
        {
          time: "13:00 – 14:00",
          title: "Nhận phòng & Setup WFH",
          location: "Khách sạn tự túc đã chọn",
          note: "Tắm nước nóng, test Wi-Fi bàn làm việc.",
          tag: "Nghỉ ngơi"
        },
        {
          time: "14:00 – 17:30",
          title: "WFH Block 1: Xử lý việc nhẹ",
          location: "Khách sạn (hoặc Daily Log Coffee - 15 Thông Thiên Học)",
          note: "Duyệt approval, check Slack, email tồn đọng.",
          tag: "WFH"
        },
        {
          time: "17:45 – 18:30",
          title: "Nhận xe VinFast VF 3",
          location: "Amazing Xanh (14 Đống Đa, P.3 - 📞 1900 8649) / giao sảnh KS",
          note: "Kiểm tra pin >80%, cáp sạc 220V, chụp ảnh 4 góc xe.",
          tag: "Xe VF 3"
        },
        {
          time: "18:45 – 20:30",
          title: "Ăn tối Lẩu cá tầm Ngư Sơn",
          location: "34 Trần Nhật Duật, P. Cam Ly",
          note: "Cá tầm tươi giòn sần sật, lẩu măng chua cay ấm bụng.",
          tag: "Ăn tối"
        },
        {
          time: "20:45 – 22:15",
          title: "Bánh tráng nướng & Sữa đậu nành",
          location: "Cô Hoa (56 Thông Thiên Học) & Hoa Sữa (64 Tăng Bạt Hổ)",
          note: "Bánh tráng nướng phô mai giòn rụm, sữa đậu nành bò nóng ngắm hồ.",
          tag: "Ăn vặt"
        }
      ],
      gallery: {
        badge: "HỒ XUÂN HƯƠNG · ĐÀ LẠT",
        title: "Hoàng hôn Hồ Xuân Hương & Đêm Phố Núi",
        desc: "Mặt nước Hồ Xuân Hương trong sương chiều và ánh đèn lung linh quanh trung tâm Đà Lạt.",
        images: [
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/H%E1%BB%93_Xu%C3%A2n_H%C6%B0%C6%A1ng,_%C4%90%C3%A0_L%E1%BA%A1t_(2).JPG",
            label: "Hồ Xuân Hương",
            credit: "Ảnh thực tế: Hồ Xuân Hương, Đà Lạt (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Da_Lat_night.jpg",
            label: "Đà Lạt về đêm",
            credit: "Ảnh thực tế: Toàn cảnh Đà Lạt về đêm (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dalat_market,_Vietnam.jpg",
            label: "Chợ Đà Lạt",
            credit: "Ảnh thực tế: Chợ Đà Lạt trung tâm (Nguồn: Wikimedia Commons, CC BY-SA 2.0)"
          }
        ]
      }
    },
    {
      meta: "THỨ SÁU · 18.09.2026",
      title: "Cầu Đất Sớm, Deep Work & Lẩu Bò",
      tone: "pine",
      tip: "🌿 05:30 xuất phát đi Cầu Đất đường vắng, chiều xong việc ăn Lẩu bò Ba Toa & Kem bơ Nari.",
      items: [
        {
          time: "05:30 – 06:15",
          title: "Lái VF 3 đi Cầu Đất",
          location: "Trục Hùng Vương ➔ Trại Mát ➔ QL20 Cầu Đất (~24km)",
          note: "Mặc ấm nhiều lớp, pin xe >60%, ngắm thung lũng đèn sương sớm.",
          tag: "Di chuyển"
        },
        {
          time: "06:20 – 07:20",
          title: "Dạo Đồi chè Cầu Đất",
          location: "Đồi Chè Cầu Đất Farm (Xuân Trường, Đà Lạt)",
          note: "14°C trong lành, vắng người, dạo đồi chè đón nắng sớm.",
          tag: "Cầu Đất"
        },
        {
          time: "07:30 – 09:00",
          title: "Ăn sáng & Cà phê bên hồ",
          location: "Haiyih Coffee Cầu Đất (view hồ vô cực) / Gió Cầu Đất",
          note: "Cà phê nóng, ăn sáng nhẹ, nghe nhạc thư giãn tới 09:00.",
          tag: "Cafe sáng"
        },
        {
          time: "09:15 – 10:15",
          title: "Về lại Trung tâm",
          location: "QL20 ➔ Trại Mát ➔ Trung tâm TP",
          note: "Chạy xe thong thả qua các rặng thông mát mẻ.",
          tag: "Về phố"
        },
        {
          time: "10:45 – 13:00",
          title: "WFH Block 2 (Phần 1): Deep Work",
          location: "Phòng khách sạn / Daily Log Coffee (15 Thông Thiên Học - Wi-Fi 5GHz)",
          note: "Phiên làm việc chính: họp trọng tâm, code, chốt tài liệu.",
          tag: "Deep Work"
        },
        {
          time: "13:00 – 14:00",
          title: "Ăn trưa Bánh mì xíu mại Ri 79",
          location: "01 Thông Thiên Học (hoặc Phở Thưng - 02 Nguyễn Văn Cừ)",
          note: "Bánh mì xíu mại nóng giòn cay béo, nghỉ trưa 20 phút.",
          tag: "Ăn trưa"
        },
        {
          time: "14:00 – 16:30",
          title: "WFH Block 2 (Phần 2): Chốt Backlog",
          location: "Daily Log Coffee / Khách sạn",
          note: "Dọn dẹp ticket tồn đọng, bàn giao công việc tuần.",
          tag: "Dọn việc"
        },
        {
          time: "17:00 – 18:30",
          title: "Ngắm hoàng hôn đồi thông",
          location: "In The Forest (Khe Sanh) / Cheo Veooo (116 Hùng Vương) / Dinh III",
          note: "Trà ấm, ngắm mặt trời lặn sau rặng thông yên tĩnh.",
          tag: "Chill chiều"
        },
        {
          time: "19:00 – 21:00",
          title: "Ăn tối Lẩu bò Ba Toa Quán Gỗ",
          location: "Hẻm 1/29 Hoàng Diệu, P.5",
          note: "Nồi lẩu bò nạm gân đuôi bò thơm ngậy ăn kèm mì trứng, rau xanh.",
          tag: "Ăn tối"
        },
        {
          time: "21:15 – 22:30",
          title: "Kem bơ Nari & Chè Hé nóng",
          location: "Kem bơ Nari (74C Nguyễn Văn Trỗi) & Chè Hé (11A Ba Tháng Hai)",
          note: "Kem bơ sáp béo ngậy sầu riêng, chén chè trôi nước gừng ấm nóng.",
          tag: "Ăn vặt"
        }
      ],
      gallery: {
        badge: "ĐỒI CHÈ CẦU ĐẤT · XUÂN TRƯỜNG",
        title: "Đồi chè Cầu Đất trong sương mai & Rừng thông",
        desc: "Những luống chè xanh mướt trải dài tại Nông trường Cầu Đất (Xuân Trường, Đà Lạt).",
        images: [
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%90%E1%BB%93i_ch%C3%A8_C%E1%BA%A7u_%C4%90%E1%BA%A5t,_th%C3%A1ng_11_n%C4%83m_2011_-_1.jpg",
            label: "Đồi chè Cầu Đất 1",
            credit: "Ảnh thực tế: Đồi chè Cầu Đất, Xuân Trường, Đà Lạt (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%90%E1%BB%93i_ch%C3%A8_C%E1%BA%A7u_%C4%90%E1%BA%A5t,_th%C3%A1ng_11_n%C4%83m_2011_-_2.jpg",
            label: "Đồi chè Cầu Đất 2",
            credit: "Ảnh thực tế: Toàn cảnh đồi chè Cầu Đất (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Th%C3%A1c_Prenn,_062015.jpg",
            label: "Rừng thông Đà Lạt",
            credit: "Ảnh thực tế: Cảnh sắc thiên nhiên đồi thông Lâm Đồng (Nguồn: Wikimedia Commons, CC BY-SA 4.0)"
          }
        ]
      }
    },
    {
      meta: "THỨ BẢY · 19.09.2026",
      title: "Trả Xe VF 3 & Nhập Đoàn Company Trip",
      tone: "clay",
      tip: "🤝 Trả xe VF 3 trước 11:30 để kịp ăn trưa và check-in cùng đoàn công ty.",
      items: [
        {
          time: "07:30 – 08:30",
          title: "Ăn sáng Bánh căn / Bánh mì xíu mại",
          location: "Bánh căn Nhà Chung (01 Nhà Chung) / Hoàng Diệu (26 Hoàng Diệu)",
          note: "Bánh căn trứng giòn nóng, sữa đậu nành.",
          tag: "Ăn sáng"
        },
        {
          time: "08:30 – 10:00",
          title: "WFH Block 3: Chốt việc & Đóng vali",
          location: "Khách sạn tự túc (hoặc Là Việt Coffee - 200 Nguyễn Công Trứ)",
          note: "Xử lý việc khẩn cấp, đóng gói hành lý.",
          tag: "Dọn đồ"
        },
        {
          time: "10:30 – 11:30",
          title: "Checkout KS & Trả xe VF 3",
          location: "Sảnh khách sạn tự túc",
          note: "Kiểm tra đồ đạc, bàn giao xe cho bên dịch vụ.",
          tag: "Trả xe"
        },
        {
          time: "11:45 – 13:30",
          title: "Hội ngộ đoàn Công ty & Ăn trưa",
          location: "Khách sạn chính của đoàn công ty (trung tâm TP)",
          note: "Gặp gỡ đồng nghiệp, ăn trưa chào mừng và nhận phòng đoàn.",
          tag: "Nhập đoàn"
        },
        {
          time: "14:00 – 17:30",
          title: "Hoạt động Teambuilding đoàn",
          location: "Theo lịch trình của BTC Company Trip",
          note: "Tham gia các trò chơi gắn kết tập thể.",
          tag: "Team Trip"
        },
        {
          time: "18:30 – 21:30",
          title: "Gala Dinner & Tiệc BBQ",
          location: "Nhà hàng / Hội trường tiệc của Công ty",
          note: "Tiệc tối liên hoan, giao lưu âm nhạc và minigame.",
          tag: "Gala Dinner"
        }
      ],
      gallery: {
        badge: "GA ĐÀ LẠT · DI TÍCH LỊCH SỬ",
        title: "Ga Đà Lạt cổ kính & Kiến trúc Cao nguyên",
        desc: "Nhà ga xe lửa Đà Lạt xây dựng từ thời Pháp với kiến trúc 3 chóp mái mô phỏng núi Langbiang.",
        images: [
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nh%C3%A0_ga_%C4%90%C3%A0_L%E1%BA%A1t.jpg",
            label: "Nhà ga Đà Lạt",
            credit: "Ảnh thực tế: Nhà ga xe lửa Đà Lạt (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dalat_Bf_1.jpg",
            label: "Đầu tàu hơi nước Ga ĐL",
            credit: "Ảnh thực tế: Đường sắt & đầu tàu cổ tại Ga Đà Lạt (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/M%E1%BB%99t_g%C3%B3c_%C4%90%C3%A0_L%E1%BA%A1t,_Vi%E1%BB%87t_Nam.jpg",
            label: "Góc phố Đà Lạt",
            credit: "Ảnh thực tế: Khu phố đồi dốc Đà Lạt (Nguồn: Wikimedia Commons, CC BY-SA 4.0)"
          }
        ]
      }
    },
    {
      meta: "20–21.09.2026",
      title: "Lịch Đoàn & Bay Về 07:20 Thứ Hai",
      tone: "blue",
      tip: "✈️ Sân bay Liên Khương cách 30km đèo. Cần dậy 04:45 và rời khách sạn trước 05:15.",
      items: [
        {
          time: "Chủ Nhật 20.09",
          title: "Tham gia trọn vẹn tour Công ty",
          location: "Theo chương trình đoàn (Ga ĐL, Vườn hoa, Workshop)",
          note: "Trọn vẹn hoạt động tập thể cùng công ty.",
          tag: "Company Trip"
        },
        {
          time: "21:00 (Tối CN)",
          title: "Soát đồ bay & Đặt 2 báo thức",
          location: "Phòng khách sạn đoàn",
          note: "Đóng vali, để sẵn CCCD/laptop. Đặt báo thức 04:30 & 04:45.",
          tag: "Chuẩn bị bay"
        },
        {
          time: "04:45 (T2 21.09)",
          title: "Dậy & Checkout khách sạn",
          location: "Khách sạn đoàn",
          note: "Kiểm tra tư trang, checkout tại quầy lễ tân.",
          tag: "Dậy sớm"
        },
        {
          time: "05:10 – 05:55",
          title: "Xe ra Sân bay Liên Khương (DLI)",
          location: "Tuyến Trung tâm TP ➔ Đèo Prenn ➔ Sân bay (~30km)",
          note: "Di chuyển 45 phút qua đèo Prenn sáng sớm.",
          tag: "Ra sân bay"
        },
        {
          time: "06:00 – 06:45",
          title: "Check-in vé & Qua an ninh",
          location: "Ga Quốc nội — Sân bay Liên Khương (DLI)",
          note: "Gửi hành lý ký gửi, in thẻ lên tàu bay.",
          tag: "Check-in"
        },
        {
          time: "07:20",
          title: "Cất cánh về TP.HCM (DLI ➔ SGN)",
          location: "Chuyến bay DLI ➔ SGN",
          note: "Hạ cánh Tân Sơn Nhất 08:15. Bắt đầu tuần làm việc mới!",
          tag: "Hạ cánh SGN"
        }
      ],
      gallery: {
        badge: "SÂN BAY LIÊN KHƯƠNG & ĐÈO PRENN",
        title: "Cung đường Đèo Prenn & Sân bay Liên Khương",
        desc: "Tuyến cao tốc đèo Prenn nối trung tâm Đà Lạt với Sân bay Liên Khương (DLI).",
        images: [
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lien_Khuong_-_Da_Lat_highway_01.jpg",
            label: "Cao tốc Liên Khương",
            credit: "Ảnh thực tế: Đường cao tốc Liên Khương - Đà Lạt qua đèo Prenn (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dalat_airport.JPG",
            label: "Sân bay Liên Khương",
            credit: "Ảnh thực tế: Nhà ga Sân bay Liên Khương - DLI (Nguồn: Wikimedia Commons, Public Domain)"
          },
          {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/C%C3%A1p_treo_%C4%90%C3%A0_L%E1%BA%A1t_(11).JPG",
            label: "Rừng thông đồi núi",
            credit: "Ảnh thực tế: Toàn cảnh rừng thông cao nguyên Lâm Viên (Nguồn: Wikimedia Commons, CC BY-SA 3.0)"
          }
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

    // Render Compact Timeline on Left
    dayCard.dataset.tone = data.tone;
    dayCard.innerHTML = `
      <div>
        <div class="card-top-meta">
          <span>LỊCH TRÌNH THEO GIỜ</span>
          <span>${data.meta}</span>
        </div>
        <h3 class="day-card-title">${data.title}</h3>
        <ol class="timeline-list">
          ${data.items.map(item => `
            <li class="timeline-item">
              <div class="timeline-time-badge">${item.time}</div>
              <div class="timeline-text">
                <div class="timeline-item-header">
                  <strong class="item-activity-name">${item.title}</strong>
                  ${item.tag ? `<span class="timeline-pill-tag">${item.tag}</span>` : ''}
                </div>
                <div class="timeline-location-row">
                  <span class="pin-icon">📍</span>
                  <span class="loc-text">${item.location}</span>
                </div>
                <div class="timeline-short-note">${item.note}</div>
              </div>
            </li>
          `).join("")}
        </ol>
      </div>
      <div class="card-footer-tip">${data.tip}</div>
    `;

    // Render Photo Story on Right
    const gall = data.gallery;
    const initialImg = gall.images[0];

    photoStoryCard.innerHTML = `
      <div>
        <div class="photo-frame-wrapper">
          <img id="main-photo-frame" class="photo-frame-img" src="${initialImg.url}" alt="${gall.title}" loading="lazy">
          <span class="photo-stamp-badge">${gall.badge}</span>
        </div>

        <div class="photo-caption-block">
          <h4 class="photo-caption-title">${gall.title}</h4>
          <p class="photo-caption-desc">${gall.desc}</p>
          <div class="photo-credit-tag" id="main-photo-credit">📷 ${initialImg.credit}</div>
        </div>
      </div>

      <div class="photo-thumbs-strip">
        ${gall.images.map((img, i) => `
          <div class="thumb-item ${i === 0 ? 'active' : ''}" data-img="${img.url}" data-credit="${img.credit}" title="${img.label}">
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
        const creditEl = document.getElementById("main-photo-credit");
        if (mainImgEl) mainImgEl.src = thumb.dataset.img;
        if (creditEl) creditEl.textContent = `📷 ${thumb.dataset.credit}`;
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
        text += `⏰ ${it.time}: ${it.title}\n`;
        text += `   📍 ${it.location}\n`;
        text += `   👉 ${it.note}\n\n`;
      });
      text += `${data.tip}`;
      navigator.clipboard.writeText(text).then(() => {
        showToast("Đã sao chép lịch trình & địa điểm ngày " + data.meta + "!");
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
DESCRIPTION:Xử lý tin nhắn, approval sau khi nhận phòng.
LOCATION:57 Hoàng Diệu, P.5, Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-dinner-sturgeon-20260917
DTSTAMP:20260917T114500Z
DTSTART:20260917T114500Z
DTEND:20260917T133000Z
SUMMARY:🍲 Ăn tối Lẩu Cá Tầm Ngư Sơn
DESCRIPTION:Cá tầm tươi giòn sần sật nhúng lẩu măng chua cay.
LOCATION:34 Trần Nhật Duật, P. Cam Ly, Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-caudat-20260918
DTSTAMP:20260918T223000Z
DTSTART:20260918T223000Z
DTEND:20260919T020000Z
SUMMARY:🌄 Đồi Chè Cầu Đất & Cafe bên hồ
DESCRIPTION:Rời trung tâm 05:30 -> Đồi chè 06:20 -> Cafe hồ 07:30.
LOCATION:Đồi chè Cầu Đất Farm, Xuân Trường, Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-wfh-2-20260918
DTSTAMP:20260918T034500Z
DTSTART:20260918T034500Z
DTEND:20260918T093000Z
SUMMARY:💼 WFH Block 2 (Deep Work)
DESCRIPTION:Tập trung làm việc và họp sau buổi sáng Cầu Đất.
LOCATION:Daily Log Coffee (15 Thông Thiên Học, Đà Lạt)
END:VEVENT
BEGIN:VEVENT
UID:dalat-dinner-batoa-20260918
DTSTAMP:20260918T120000Z
DTSTART:20260918T120000Z
DTEND:20260918T140000Z
SUMMARY:🐂 Lẩu Bò Quán Gỗ Ba Toa & Kem bơ Nari
DESCRIPTION:Thưởng thức lẩu bò nạm gân đuôi bò và kem bơ sáp.
LOCATION:Hẻm 1/29 Hoàng Diệu, P.5, Đà Lạt
END:VEVENT
BEGIN:VEVENT
UID:dalat-flight-return-20260921
DTSTAMP:20260921T002000Z
DTSTART:20260921T002000Z
DTEND:20260921T011500Z
SUMMARY:✈️ Bay về TP.HCM (DLI -> SGN)
DESCRIPTION:Chuyến bay 07:20 Liên Khương. Cần rời khách sạn lúc 05:10!
LOCATION:Sân bay Liên Khương (DLI), Lâm Đồng
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
        <strong>☀️ Trời nắng ráo:</strong> Chạy thẳng Đồi chè Cầu Đất Farm lúc 06:20 đón nắng sớm 45 phút, sau đó sang Haiyih Coffee ngắm hồ vô cực.
      </div>
    `,
    rainy: `
      <div class="plan-alert bad">
        <strong>🌧️ Sương mù dày / mưa nhẹ:</strong> Bỏ qua phần đồi chè ngoài trời. Vào thẳng quán sảnh kính (Haiyih Coffee / Gió Cầu Đất) gọi trà gừng nóng ngắm sương mù.
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
    const foodPerDayPerPerson = foodBudgetSelect ? parseInt(foodBudgetSelect.value, 10) : 600000;
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
    { id: 1, text: "Đặt bàn trước tại Lẩu cá tầm Ngư Sơn (34 Trần Nhật Duật) cho tối 17/09", category: "trip", done: false },
    { id: 2, text: "Đặt khách sạn 2 đêm 17–18/09 (Free Style Hotel 57 Hoàng Diệu hoặc BIDV Central)", category: "vf3", done: false },
    { id: 3, text: "Liên hệ Amazing Xanh / Thuê VF3 Đà Lạt chốt xe điện từ chiều 17 đến trưa 19/09", category: "vf3", done: false },
    { id: 4, text: "Đóng gói thiết bị WFH: Laptop, củ sạc nhanh 65W/100W, chuột, tai nghe họp chống ồn", category: "wfh", done: false },
    { id: 5, text: "Chuẩn bị cục phát Wi-Fi 4G/5G dự phòng và ổ cắm chia đa năng", category: "wfh", done: false },
    { id: 6, text: "Áo khoác ấm, khăn mỏng, ô gấp và thuốc cảm/dạ dày/dầu gió", category: "trip", done: false },
    { id: 7, text: "Nhắn tin đầu mối đoàn: xác nhận giờ và địa điểm đón đoàn trưa Thứ Bảy 19/09", category: "trip", done: false },
    { id: 8, text: "Kiểm tra giấy tờ tùy thân (CCCD / Bằng lái xe ô tô B2 để nhận lái VF 3)", category: "vf3", done: false },
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
