/* =========================================================
   効果測定アプリ - ハッピードライビングスクール
   ---------------------------------------------------------
   ■ 成績のGoogleスプレッドシート送信を使う場合：
     下の GAS_ENDPOINT にGoogle Apps ScriptのWebアプリURLを設定
     （設定手順は同梱の「Googleシート連携手順.md」参照）
     空文字("")のままなら端末内保存のみで動作します。
   ========================================================= */
const GAS_ENDPOINT = "";

const PASS_RATE = 90; // 合格ライン(%)
const STORE_KEY = "hds_results_v1";

/* ---------- 多言語UI文言 ---------- */
const I18N = {
  ja: {
    title: "学科 効果測定",
    enterId: "受講者IDを入力してください",
    idPlaceholder: "例：H1234",
    furigana: "ふりがな",
    chooseSet: "テストを選んでください",
    allQuestions: `全問チャレンジ（${QUESTIONS.length}問）`,
    reviewMode: "復習モード（間違えた問題）",
    records: "成績一覧を見る",
    recordsTitle: "成績一覧",
    quit: "中断",
    correctOpt: "正しい",
    wrongOpt: "誤り",
    explanation: "解説",
    next: "次へ",
    resultTitle: "結果",
    wrongTitle: "間違えた問題",
    retryWrong: "間違えた問題だけ解き直す",
    retryAll: "もう一度挑戦する",
    backHome: "ホームに戻る",
    thDate: "日時", thSet: "テスト", thScore: "得点", thRate: "正解率",
    noRecords: "記録がありません",
    exportCsv: "CSVをダウンロード（教務用）",
    filterPlaceholder: "受講者IDで絞り込み",
    needId: "受講者IDを入力してください",
    noWrong: "復習する問題はありません。まずテストを受けてください。",
    correct: "正解！",
    incorrect: "不正解",
    theAnswer: "正解",
    currentRate: "ここまでの正解率",
    pass: "合格ライン到達！",
    fail: "もう少し！合格ラインは" + PASS_RATE + "%です",
    reviewLabel: "復習",
    allLabel: "全問",
    confirmQuit: "テストを中断しますか？（記録は保存されません）",
    draftNote: ""
  },
  vi: {
    title: "Kiểm tra hiệu quả (Lý thuyết)",
    enterId: "Nhập mã học viên",
    idPlaceholder: "Ví dụ: H1234",
    furigana: "Furigana",
    chooseSet: "Chọn bài kiểm tra",
    allQuestions: `Thử thách ${QUESTIONS.length} câu`,
    reviewMode: "Chế độ ôn tập (câu đã sai)",
    records: "Xem bảng điểm",
    recordsTitle: "Bảng điểm",
    quit: "Dừng",
    correctOpt: "Đúng",
    wrongOpt: "Sai",
    explanation: "Giải thích",
    next: "Tiếp theo",
    resultTitle: "Kết quả",
    wrongTitle: "Các câu trả lời sai",
    retryWrong: "Làm lại các câu đã sai",
    retryAll: "Thử lại lần nữa",
    backHome: "Về trang chủ",
    thDate: "Ngày giờ", thSet: "Bài", thScore: "Điểm", thRate: "Tỷ lệ đúng",
    noRecords: "Chưa có dữ liệu",
    exportCsv: "Tải CSV (dành cho giáo vụ)",
    filterPlaceholder: "Lọc theo mã học viên",
    needId: "Vui lòng nhập mã học viên",
    noWrong: "Không có câu nào cần ôn tập. Hãy làm bài kiểm tra trước.",
    correct: "Chính xác!",
    incorrect: "Sai rồi",
    theAnswer: "Đáp án",
    currentRate: "Tỷ lệ đúng hiện tại",
    pass: "Đạt mức đỗ!",
    fail: "Cố lên! Mức đỗ là " + PASS_RATE + "%",
    reviewLabel: "Ôn tập",
    allLabel: "Tất cả",
    confirmQuit: "Dừng bài kiểm tra? (Kết quả sẽ không được lưu)",
    draftNote: "※ Bản dịch tiếng Việt là bản nháp, đang chờ người bản ngữ kiểm tra."
  },
  ne: {
    title: "प्रभावकारिता परीक्षण (सिद्धान्त)",
    enterId: "विद्यार्थी ID लेख्नुहोस्",
    idPlaceholder: "उदाहरण: H1234",
    furigana: "फुरिगाना",
    chooseSet: "परीक्षा छान्नुहोस्",
    allQuestions: `सबै ${QUESTIONS.length} प्रश्न`,
    reviewMode: "पुनरावलोकन मोड (गल्ती भएका प्रश्न)",
    records: "नतिजा सूची हेर्ने",
    recordsTitle: "नतिजा सूची",
    quit: "रोक्ने",
    correctOpt: "सही",
    wrongOpt: "गलत",
    explanation: "व्याख्या",
    next: "अर्को",
    resultTitle: "नतिजा",
    wrongTitle: "गल्ती भएका प्रश्नहरू",
    retryWrong: "गल्ती भएका प्रश्न मात्र फेरि गर्ने",
    retryAll: "फेरि प्रयास गर्ने",
    backHome: "गृहपृष्ठमा फर्कने",
    thDate: "मिति", thSet: "परीक्षा", thScore: "अंक", thRate: "सही दर",
    noRecords: "कुनै रेकर्ड छैन",
    exportCsv: "CSV डाउनलोड (शिक्षकका लागि)",
    filterPlaceholder: "विद्यार्थी ID ले खोज्ने",
    needId: "कृपया विद्यार्थी ID लेख्नुहोस्",
    noWrong: "पुनरावलोकन गर्ने प्रश्न छैन। पहिले परीक्षा दिनुहोस्।",
    correct: "सही!",
    incorrect: "गलत",
    theAnswer: "उत्तर",
    currentRate: "हालसम्मको सही दर",
    pass: "उत्तीर्ण स्तर पुग्यो!",
    fail: "अझै प्रयास! उत्तीर्ण स्तर " + PASS_RATE + "% हो",
    reviewLabel: "पुनरावलोकन",
    allLabel: "सबै",
    confirmQuit: "परीक्षा रोक्ने हो? (नतिजा बचत हुँदैन)",
    draftNote: "※ नेपाली अनुवाद मस्यौदा हो, मातृभाषी वक्ताबाट जाँच हुन बाँकी छ।"
  },
  en: {
    title: "Written Test Practice",
    enterId: "Enter your student ID",
    idPlaceholder: "e.g. H1234",
    furigana: "Furigana",
    chooseSet: "Choose a test",
    allQuestions: `All Questions (${QUESTIONS.length})`,
    reviewMode: "Review Mode (missed questions)",
    records: "View score records",
    recordsTitle: "Score Records",
    quit: "Quit",
    correctOpt: "True",
    wrongOpt: "False",
    explanation: "Explanation",
    next: "Next",
    resultTitle: "Results",
    wrongTitle: "Missed Questions",
    retryWrong: "Retry missed questions only",
    retryAll: "Try again",
    backHome: "Back to Home",
    thDate: "Date", thSet: "Test", thScore: "Score", thRate: "Accuracy",
    noRecords: "No records yet",
    exportCsv: "Download CSV (for instructors)",
    filterPlaceholder: "Filter by student ID",
    needId: "Please enter your student ID",
    noWrong: "No questions to review. Take a test first.",
    correct: "Correct!",
    incorrect: "Incorrect",
    theAnswer: "Answer",
    currentRate: "Accuracy so far",
    pass: "Passing level reached!",
    fail: "Almost there! The passing level is " + PASS_RATE + "%",
    reviewLabel: "Review",
    allLabel: "All",
    confirmQuit: "Quit this test? (Results will not be saved)",
    draftNote: "* The English translation is a draft awaiting native-speaker review."
  },
  idn: {
    title: "Latihan Ujian Teori",
    enterId: "Masukkan ID siswa",
    idPlaceholder: "cth. H1234",
    furigana: "Furigana",
    chooseSet: "Pilih tes",
    allQuestions: `Semua Soal (${QUESTIONS.length})`,
    reviewMode: "Mode Ulasan (soal yang salah)",
    records: "Lihat daftar nilai",
    recordsTitle: "Daftar Nilai",
    quit: "Berhenti",
    correctOpt: "Benar",
    wrongOpt: "Salah",
    explanation: "Penjelasan",
    next: "Lanjut",
    resultTitle: "Hasil",
    wrongTitle: "Soal yang Salah",
    retryWrong: "Ulangi hanya soal yang salah",
    retryAll: "Coba lagi",
    backHome: "Kembali ke Beranda",
    thDate: "Tanggal", thSet: "Tes", thScore: "Nilai", thRate: "Akurasi",
    noRecords: "Belum ada data",
    exportCsv: "Unduh CSV (untuk pengajar)",
    filterPlaceholder: "Saring dengan ID siswa",
    needId: "Silakan masukkan ID siswa",
    noWrong: "Tidak ada soal untuk diulas. Kerjakan tes dulu.",
    correct: "Benar!",
    incorrect: "Salah",
    theAnswer: "Jawaban",
    currentRate: "Akurasi sejauh ini",
    pass: "Mencapai batas lulus!",
    fail: "Sedikit lagi! Batas lulus adalah " + PASS_RATE + "%",
    reviewLabel: "Ulasan",
    allLabel: "Semua",
    confirmQuit: "Berhenti dari tes? (Hasil tidak akan disimpan)",
    draftNote: "* Terjemahan bahasa Indonesia ini masih draf, menunggu pemeriksaan penutur asli."
  }
};

/* ---------- 状態 ---------- */
let lang = "ja";
let furigana = true;
let quiz = { list: [], idx: 0, correct: 0, wrongIds: [], setName: "", isReview: false };

/* ---------- ふりがな処理 ---------- */
// 「漢字（ひらがな）」「変わった（かわった）」→ ルビ表示に変換
// 送り仮名付き（例：変わった）は読みの末尾と照合して漢字部分だけにルビを振る
const RUBY_RE = /([一-龯々〆ヵヶァ-ヺー]+)([ぁ-ゖ]*)（([ぁ-ゖーA-Za-zＡ-Ｚａ-ｚ]+)）/g;
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jaHtml(text) {
  const e = esc(text);
  return e.replace(RUBY_RE, (m, base, okuri, yomi) => {
    if (okuri) {
      if (yomi.endsWith(okuri) && yomi.length > okuri.length) {
        const core = yomi.slice(0, yomi.length - okuri.length);
        return furigana ? `<ruby>${base}<rt>${core}</rt></ruby>${okuri}` : base + okuri;
      }
      return furigana ? m : base + okuri; // 照合できない場合は表示時のみ括弧を残す
    }
    return furigana ? `<ruby>${base}<rt>${yomi}</rt></ruby>` : base;
  });
}

/* ---------- ユーティリティ ---------- */
const $ = (id) => document.getElementById(id);
function t(key) { return I18N[lang][key] ?? I18N.ja[key] ?? key; }
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(screenId).classList.add("active");
  window.scrollTo(0, 0);
}
function loadResults() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}
function saveResults(arr) { localStorage.setItem(STORE_KEY, JSON.stringify(arr)); }
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- 言語適用 ---------- */
function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  const note = $("draftNote");
  if (t("draftNote")) { note.textContent = t("draftNote"); note.hidden = false; }
  else note.hidden = true;
  if ($("screen-quiz").classList.contains("active")) renderQuestion(false);
}

/* ---------- スタート画面 ---------- */
function buildSetButtons() {
  const cats = [...new Set(QUESTIONS.map(q => q.cat))];
  const wrap = $("setButtons");
  wrap.innerHTML = "";
  cats.forEach(cat => {
    const b = document.createElement("button");
    b.className = "set-btn";
    b.textContent = cat;
    b.onclick = () => startQuiz(QUESTIONS.filter(q => q.cat === cat), cat, false);
    wrap.appendChild(b);
  });
}
function getStudentId() {
  const id = $("studentId").value.trim();
  if (!id) { alert(t("needId")); $("studentId").focus(); return null; }
  return id;
}
function wrongPoolFor(id) {
  const results = loadResults().filter(r => r.sid === id);
  // 時系列で処理：間違えたら追加、後で正解したら除外
  const pool = new Set();
  results.forEach(r => {
    r.qids.forEach(qid => {
      if (r.wrong.includes(qid)) pool.add(qid);
      else pool.delete(qid);
    });
  });
  return QUESTIONS.filter(q => pool.has(q.id));
}

/* ---------- 出題 ---------- */
function startQuiz(list, setName, isReview) {
  if (!getStudentId()) return;
  quiz = {
    list: shuffle([...list]), idx: 0, correct: 0, wrongIds: [],
    setName, isReview
  };
  show("screen-quiz");
  renderQuestion(true);
}
function currentQ() { return quiz.list[quiz.idx]; }

function qDisplayText(q) {
  if (lang === "ja") return { main: jaHtml(q.q), sub: null };
  const tr = q[lang];
  return { main: esc(tr.q), sub: jaHtml(q.q) };
}
function expDisplayText(q) {
  if (lang === "ja") return { main: jaHtml(q.exp), sub: null };
  const tr = q[lang];
  return { main: esc(tr.e), sub: jaHtml(q.exp) };
}

function renderQuestion(resetFeedback) {
  const q = currentQ();
  $("qNum").textContent = `${quiz.idx + 1} / ${quiz.list.length}`;
  $("catLabel").textContent = q.cat + (quiz.isReview ? `（${t("reviewLabel")}）` : "");
  $("progressFill").style.width = `${(quiz.idx / quiz.list.length) * 100}%`;

  if (q.img) { $("qImage").src = "images/" + q.img; $("qImageWrap").hidden = false; }
  else $("qImageWrap").hidden = true;

  const d = qDisplayText(q);
  $("qText").innerHTML = d.main;
  if (d.sub) { $("qTextJa").innerHTML = d.sub; $("qTextJa").hidden = false; }
  else $("qTextJa").hidden = true;

  if (resetFeedback) {
    $("feedback").hidden = true;
    $("btnMaru").disabled = false;
    $("btnBatsu").disabled = false;
  } else if (!$("feedback").hidden) {
    // 言語切替時にフィードバックも更新
    showFeedback(window.__lastAnswerOk);
  }
}

function answer(isMaru) {
  const q = currentQ();
  const ok = (isMaru === q.a);
  if (ok) quiz.correct++;
  else quiz.wrongIds.push(q.id);
  $("btnMaru").disabled = true;
  $("btnBatsu").disabled = true;
  window.__lastAnswerOk = ok;
  showFeedback(ok);
}

function showFeedback(ok) {
  const q = currentQ();
  const fb = $("feedback");
  const head = $("fbHead");
  head.textContent = ok ? "〇 " + t("correct") : "✖ " + t("incorrect") + `（${t("theAnswer")}：${q.a ? "〇" : "✖"}）`;
  head.className = "fb-head " + (ok ? "ok" : "ng");
  const answered = quiz.idx + 1;
  const rate = Math.round((quiz.correct / answered) * 100);
  $("fbRate").textContent = `${t("currentRate")}: ${rate}%（${quiz.correct}/${answered}）`;

  if (!ok) {
    const e = expDisplayText(q);
    $("fbExpText").innerHTML = e.main;
    if (e.sub) { $("fbExpJa").innerHTML = e.sub; $("fbExpJa").hidden = false; }
    else $("fbExpJa").hidden = true;
    $("fbExp").hidden = false;
  } else {
    $("fbExp").hidden = true;
  }
  fb.hidden = false;
  fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function next() {
  quiz.idx++;
  if (quiz.idx >= quiz.list.length) finish();
  else renderQuestion(true);
}

/* ---------- 結果 ---------- */
function finish() {
  const total = quiz.list.length;
  const rate = Math.round((quiz.correct / total) * 100);
  $("finalRate").textContent = rate + "%";
  $("finalScore").textContent = `${quiz.correct} / ${total}`;
  const pl = $("passLabel");
  pl.textContent = rate >= PASS_RATE ? t("pass") : t("fail");
  pl.className = "pass-label " + (rate >= PASS_RATE ? "ok" : "ng");

  // 間違えた問題一覧
  const wrongQs = quiz.list.filter(q => quiz.wrongIds.includes(q.id));
  if (wrongQs.length) {
    const wrap = $("wrongItems");
    wrap.innerHTML = "";
    wrongQs.forEach(q => {
      const div = document.createElement("div");
      div.className = "wrong-item";
      const d = qDisplayText(q), e = expDisplayText(q);
      div.innerHTML =
        `<div class="wq">${d.main}</div>` +
        `<div class="wa">${t("theAnswer")}: ${q.a ? "〇" : "✖"}</div>` +
        `<div class="we">${e.main}</div>`;
      wrap.appendChild(div);
    });
    $("wrongList").hidden = false;
    $("btnRetryWrong").disabled = false;
  } else {
    $("wrongList").hidden = true;
    $("btnRetryWrong").disabled = true;
  }

  saveRecord(rate, total);
  show("screen-result");
}

function saveRecord(rate, total) {
  const rec = {
    sid: $("studentId").value.trim(),
    date: new Date().toISOString(),
    set: (quiz.isReview ? t("reviewLabel") + ":" : "") + quiz.setName,
    score: quiz.correct, total, rate,
    wrong: quiz.wrongIds,
    qids: quiz.list.map(q => q.id)
  };
  const arr = loadResults();
  arr.push(rec);
  saveResults(arr);

  if (GAS_ENDPOINT) {
    const params = new URLSearchParams({
      sid: rec.sid, date: rec.date, set: rec.set,
      score: rec.score, total: rec.total, rate: rec.rate,
      wrong: rec.wrong.join(" ")
    });
    fetch(GAS_ENDPOINT, { method: "POST", mode: "no-cors", body: params }).catch(() => {});
  }
}

/* ---------- 成績一覧 ---------- */
function renderRecords() {
  const filter = $("recordFilter").value.trim().toLowerCase();
  const arr = loadResults().filter(r => !filter || r.sid.toLowerCase().includes(filter));
  const body = $("recordsBody");
  body.innerHTML = "";
  $("noRecords").hidden = arr.length > 0;
  arr.slice().reverse().forEach(r => {
    const tr = document.createElement("tr");
    const dt = new Date(r.date);
    const ds = `${dt.getMonth() + 1}/${dt.getDate()} ${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}`;
    tr.innerHTML = `<td>${ds}</td><td>${esc(r.sid)}</td><td>${esc(r.set)}</td>` +
      `<td>${r.score}/${r.total}</td>` +
      `<td class="${r.rate >= PASS_RATE ? "rate-good" : "rate-bad"}">${r.rate}%</td>`;
    body.appendChild(tr);
  });
}
function exportCsv() {
  const arr = loadResults();
  let csv = "﻿受講者ID,日時,テスト,得点,問題数,正解率(%),間違えた問題\n";
  arr.forEach(r => {
    csv += `${r.sid},${r.date},${r.set},${r.score},${r.total},${r.rate},"${r.wrong.join(" ")}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "効果測定成績.csv";
  a.click();
}

/* ---------- イベント ---------- */
document.querySelectorAll(".lang-btn").forEach(b => {
  b.onclick = () => { lang = b.dataset.lang; applyLang(); };
});
$("furiganaToggle").onclick = () => {
  furigana = !furigana;
  $("furiganaToggle").classList.toggle("on", furigana);
  $("furiganaToggle").setAttribute("aria-pressed", furigana);
  if ($("screen-quiz").classList.contains("active")) renderQuestion(false);
};
$("btnAll").onclick = () => startQuiz(QUESTIONS, t("allLabel"), false);
$("btnReview").onclick = () => {
  const id = getStudentId();
  if (!id) return;
  const pool = wrongPoolFor(id);
  if (!pool.length) { alert(t("noWrong")); return; }
  startQuiz(pool, t("reviewLabel"), true);
};
$("btnMaru").onclick = () => answer(true);
$("btnBatsu").onclick = () => answer(false);
$("btnNext").onclick = next;
$("btnQuit").onclick = () => { if (confirm(t("confirmQuit"))) show("screen-start"); };
$("btnRetryWrong").onclick = () => {
  const wrongQs = QUESTIONS.filter(q => quiz.wrongIds.includes(q.id));
  startQuiz(wrongQs, t("reviewLabel"), true);
};
$("btnRetryAll").onclick = () => {
  const ids = quiz.list.map(q => q.id);
  startQuiz(QUESTIONS.filter(q => ids.includes(q.id)), quiz.setName, quiz.isReview);
};
$("btnHome").onclick = () => show("screen-start");
$("btnRecords").onclick = () => { renderRecords(); show("screen-records"); };
$("btnRecordsHome").onclick = () => show("screen-start");
$("recordFilter").oninput = renderRecords;
$("btnExportCsv").onclick = exportCsv;

/* ---------- 初期化 ---------- */
buildSetButtons();
applyLang();
