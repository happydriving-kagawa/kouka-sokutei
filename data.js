// 効果測定 問題データ（学科1〜10・100問）
// 新しい問題を追加する場合は、この配列に同じ形式で追記してください。
// id:"学科番号-問題番号", cat:"学科N", q:問題文(日本語・ふりがな括弧書き), a:true=〇/false=✖,
// exp:解説, img:画像ファイル名(なければnull), vi:{q,e}ベトナム語, ne:{q,e}ネパール語, en:{q,e}英語, idn:{q,e}インドネシア語
const QUESTIONS = [
 {
  "id": "1-1",
  "cat": "学科1",
  "q": "妊娠中（にんしんちゅう）にシートベルトをするときは、腹部（ふくぶ）をベルトがよこぎらないようにする。",
  "a": true,
  "exp": "妊娠中（にんしんちゅう）にシートベルトをするときは、腹部（ふくぶ）をベルトがよこぎらないようにします。腰（こし）ベルトのみの着用（ちゃくよう）も避（さ）けます。（20P）",
  "img": null,
  "vi": {
   "q": "Khi mang thai, lúc thắt dây an toàn phải chú ý không để dây vắt ngang qua bụng.",
   "e": "Khi mang thai, thắt dây an toàn sao cho dây không vắt ngang qua bụng. Cũng nên tránh chỉ thắt dây phần hông. (Trang 20)"
  },
  "ne": {
   "q": "गर्भवती अवस्थामा सिटबेल्ट लगाउँदा बेल्ट पेटमाथिबाट नजाने गरी लगाउनुपर्छ।",
   "e": "गर्भवती अवस्थामा सिटबेल्ट पेटमाथि नपर्ने गरी लगाउनुहोस्। कम्मरको बेल्ट मात्र लगाउनु पनि हुँदैन। (पृष्ठ 20)"
  },
  "en": {
   "q": "When wearing a seatbelt while pregnant, make sure the belt does not cross over your abdomen.",
   "e": "When pregnant, wear the seatbelt so it does not cross the abdomen. Also avoid wearing only the lap belt. (P.20)"
  },
  "idn": {
   "q": "Saat hamil, kenakan sabuk pengaman dengan memastikan sabuk tidak melintang di atas perut.",
   "e": "Saat hamil, kenakan sabuk agar tidak melintang di perut. Hindari juga memakai sabuk pinggang saja. (Hal.20)"
  }
 },
 {
  "id": "1-2",
  "cat": "学科1",
  "q": "過労（かろう）のときでも、自信（じしん）があれば、自動車（じどうしゃ）を運転（うんてん）してもよい。",
  "a": false,
  "exp": "過労（かろう）のときや、麻薬（まやく）などの影響（えいきょう）を受（う）けているときは、車（くるま）を運転（うんてん）してはいけません。（17P）",
  "img": null,
  "vi": {
   "q": "Ngay cả khi quá mệt mỏi, nếu tự tin thì vẫn được phép lái xe ô tô.",
   "e": "Khi quá mệt mỏi hoặc chịu ảnh hưởng của ma túy v.v., không được lái xe. (Trang 17)"
  },
  "ne": {
   "q": "धेरै थकित भए पनि आत्मविश्वास छ भने गाडी चलाउन हुन्छ।",
   "e": "धेरै थकित हुँदा वा लागूऔषध आदिको प्रभावमा हुँदा गाडी चलाउनु हुँदैन। (पृष्ठ 17)"
  },
  "en": {
   "q": "Even when overtired, you may drive a car if you are confident.",
   "e": "You must not drive when overtired or under the influence of drugs, etc. (P.17)"
  },
  "idn": {
   "q": "Meskipun sangat lelah, boleh mengemudi jika merasa percaya diri.",
   "e": "Tidak boleh mengemudi saat sangat lelah atau di bawah pengaruh narkoba, dll. (Hal.17)"
  }
 },
 {
  "id": "1-3",
  "cat": "学科1",
  "q": "運転姿勢（うんてんしせい）は、安全運転（あんぜんうんてん）に関係（かんけい）ない。",
  "a": false,
  "exp": "正（ただ）しい運転姿勢（うんてんしせい）は、安全運転（あんぜんうんてん）に重要（じゅうよう）です。（19P）",
  "img": null,
  "vi": {
   "q": "Tư thế lái xe không liên quan đến việc lái xe an toàn.",
   "e": "Tư thế lái xe đúng rất quan trọng đối với việc lái xe an toàn. (Trang 19)"
  },
  "ne": {
   "q": "गाडी चलाउने बसाइ (आसन) को सुरक्षित ड्राइभिङसँग कुनै सम्बन्ध छैन।",
   "e": "सही ड्राइभिङ आसन सुरक्षित ड्राइभिङका लागि महत्त्वपूर्ण छ। (पृष्ठ 19)"
  },
  "en": {
   "q": "Driving posture has nothing to do with safe driving.",
   "e": "Correct driving posture is important for safe driving. (P.19)"
  },
  "idn": {
   "q": "Postur mengemudi tidak ada hubungannya dengan keselamatan berkendara.",
   "e": "Postur mengemudi yang benar penting untuk keselamatan berkendara. (Hal.19)"
  }
 },
 {
  "id": "1-4",
  "cat": "学科1",
  "q": "睡眠作用（すいみんさよう）のある風邪薬（かぜぐすり）や頭痛薬（ずつうやく）などを服用（ふくよう）したときは、運転（うんてん）をしないようにする。",
  "a": true,
  "exp": "睡眠作用（すいみんさよう）のある風邪薬（かぜぐすり）や頭痛薬（ずつうやく）などを服用（ふくよう）したときは、運転（うんてん）をしないようにします。（17P）",
  "img": null,
  "vi": {
   "q": "Khi đã uống thuốc cảm, thuốc đau đầu v.v. có tác dụng gây buồn ngủ thì không nên lái xe.",
   "e": "Khi đã uống thuốc cảm, thuốc đau đầu v.v. có tác dụng gây buồn ngủ, không được lái xe. (Trang 17)"
  },
  "ne": {
   "q": "निद्रा लगाउने रुघाको औषधि वा टाउको दुखाइको औषधि खाएको बेला गाडी चलाउनु हुँदैन।",
   "e": "निद्रा लगाउने रुघा वा टाउको दुखाइको औषधि खाएको बेला गाडी नचलाउनुहोस्। (पृष्ठ 17)"
  },
  "en": {
   "q": "If you have taken cold medicine or headache medicine that causes drowsiness, you should not drive.",
   "e": "Do not drive after taking cold or headache medicine that causes drowsiness. (P.17)"
  },
  "idn": {
   "q": "Jika sudah minum obat flu atau obat sakit kepala yang menyebabkan kantuk, sebaiknya tidak mengemudi.",
   "e": "Jangan mengemudi setelah minum obat flu atau sakit kepala yang menyebabkan kantuk. (Hal.17)"
  }
 },
 {
  "id": "1-5",
  "cat": "学科1",
  "q": "走行中（そうこうちゅう）【自動運転（じどううんてん）において自動運行装置（じどううんこうそうち）を使用（しよう）している場合（ばあい）を除（のぞ）く。】に、カーナビゲーション装置（そうち）の画像（がぞう）を注視（ちゅうし）すると、危険（きけん）である。",
  "a": true,
  "exp": "走行中（そうこうちゅう）に画像（がぞう）を注視（ちゅうし）すると危険（きけん）です。（22P）",
  "img": null,
  "vi": {
   "q": "Trong khi xe đang chạy (trừ trường hợp đang dùng thiết bị vận hành tự động khi lái tự động), việc nhìn chăm chú vào màn hình thiết bị dẫn đường (car navigation) là nguy hiểm.",
   "e": "Nhìn chăm chú vào màn hình trong khi xe đang chạy là rất nguy hiểm. (Trang 22)"
  },
  "ne": {
   "q": "गाडी चलिरहेको बेला (स्वचालित ड्राइभिङ उपकरण प्रयोग गरिरहेको अवस्था बाहेक) कार नेभिगेसनको स्क्रिनमा एकोहोरो हेर्नु खतरनाक हुन्छ।",
   "e": "गाडी चलाउँदा स्क्रिनमा एकोहोरो हेर्नु खतरनाक छ। (पृष्ठ 22)"
  },
  "en": {
   "q": "While driving (except when using an automated driving system), staring at a car navigation screen is dangerous.",
   "e": "Staring at a screen while driving is dangerous. (P.22)"
  },
  "idn": {
   "q": "Saat kendaraan berjalan (kecuali saat menggunakan perangkat mengemudi otomatis), menatap layar navigasi mobil itu berbahaya.",
   "e": "Menatap layar saat berkendara itu berbahaya. (Hal.22)"
  }
 },
 {
  "id": "1-6",
  "cat": "学科1",
  "q": "同乗者（どうじょうしゃ）がドアを開（あ）けるときも、後方（こうほう）の安全（あんぜん）を確（たし）かめる必要（ひつよう）がある。",
  "a": true,
  "exp": "同乗者（どうじょうしゃ）の安全（あんぜん）に対（たい）する責任（せきにん）も義務付（ぎむづ）けられています。（13P）",
  "img": null,
  "vi": {
   "q": "Khi người ngồi cùng xe mở cửa, cũng cần phải xác nhận an toàn phía sau.",
   "e": "Người lái cũng có trách nhiệm bắt buộc đối với sự an toàn của người ngồi cùng xe. (Trang 13)"
  },
  "ne": {
   "q": "सँगै चढेको यात्रुले ढोका खोल्दा पनि पछाडिको सुरक्षा जाँच गर्नु आवश्यक छ।",
   "e": "यात्रुहरूको सुरक्षाप्रतिको जिम्मेवारी पनि चालकको कर्तव्य हो। (पृष्ठ 13)"
  },
  "en": {
   "q": "When a passenger opens the door, safety behind the vehicle must also be checked.",
   "e": "Drivers are also legally responsible for the safety of their passengers. (P.13)"
  },
  "idn": {
   "q": "Saat penumpang membuka pintu, keselamatan di belakang kendaraan juga perlu dipastikan.",
   "e": "Pengemudi juga bertanggung jawab atas keselamatan penumpang. (Hal.13)"
  }
 },
 {
  "id": "1-7",
  "cat": "学科1",
  "q": "幼児（ようじ）を乗（の）せて自動車（じどうしゃ）を運転（うんてん）する場合（ばあい）、近（ちか）くならチャイルドシートを取（と）り付（つ）けなくてもよい。",
  "a": false,
  "exp": "幼児（ようじ）を乗（の）せて自動車（じどうしゃ）を運転（うんてん）する場合（ばあい）、近（ちか）くでもチャイルドシートを取（と）り付（つ）けます。（14P）",
  "img": null,
  "vi": {
   "q": "Khi chở trẻ nhỏ trên ô tô, nếu chỉ đi gần thì không cần lắp ghế trẻ em (child seat) cũng được.",
   "e": "Khi chở trẻ nhỏ trên ô tô, dù đi gần cũng phải lắp ghế trẻ em. (Trang 14)"
  },
  "ne": {
   "q": "सानो बच्चा राखेर गाडी चलाउँदा नजिकै जाने हो भने चाइल्ड सिट नराखे पनि हुन्छ।",
   "e": "सानो बच्चा राखेर गाडी चलाउँदा नजिक जाँदा पनि चाइल्ड सिट अनिवार्य राख्नुपर्छ। (पृष्ठ 14)"
  },
  "en": {
   "q": "When driving with an infant, a child seat is not necessary for short trips.",
   "e": "When driving with an infant, a child seat must be installed even for short trips. (P.14)"
  },
  "idn": {
   "q": "Saat membawa anak kecil dengan mobil, kursi anak (child seat) tidak perlu dipasang jika jaraknya dekat.",
   "e": "Saat membawa anak kecil, kursi anak wajib dipasang meskipun jaraknya dekat. (Hal.14)"
  }
 },
 {
  "id": "1-8",
  "cat": "学科1",
  "q": "シートベルトは、後部座席（こうぶざせき）の同乗者（どうじょうしゃ）は着用（ちゃくよう）しなくてもよい。",
  "a": false,
  "exp": "後部座席（こうぶざせき）の同乗者（どうじょうしゃ）も着用（ちゃくよう）させなければなりません。（20P）",
  "img": null,
  "vi": {
   "q": "Về dây an toàn, người ngồi ở ghế sau không cần thắt cũng được.",
   "e": "Phải cho cả người ngồi ghế sau thắt dây an toàn. (Trang 20)"
  },
  "ne": {
   "q": "पछाडिको सिटमा बस्ने यात्रुले सिटबेल्ट नलगाए पनि हुन्छ।",
   "e": "पछाडिको सिटका यात्रुलाई पनि सिटबेल्ट लगाउन लगाउनुपर्छ। (पृष्ठ 20)"
  },
  "en": {
   "q": "Passengers in the rear seats do not need to wear seatbelts.",
   "e": "Rear-seat passengers must also wear seatbelts. (P.20)"
  },
  "idn": {
   "q": "Penumpang di kursi belakang tidak perlu memakai sabuk pengaman.",
   "e": "Penumpang kursi belakang juga wajib memakai sabuk pengaman. (Hal.20)"
  }
 },
 {
  "id": "1-9",
  "cat": "学科1",
  "q": "サンダルやハイヒールをはいて運転（うんてん）してはいけない。",
  "a": true,
  "exp": "サンダルやハイヒールをはいて運転（うんてん）してはいけません。（18P）",
  "img": null,
  "vi": {
   "q": "Không được mang dép xăng-đan hay giày cao gót khi lái xe.",
   "e": "Không được lái xe khi mang dép xăng-đan hay giày cao gót. (Trang 18)"
  },
  "ne": {
   "q": "चप्पल वा हाई हिल लगाएर गाडी चलाउनु हुँदैन।",
   "e": "चप्पल वा हाई हिल लगाएर गाडी चलाउनु हुँदैन। (पृष्ठ 18)"
  },
  "en": {
   "q": "You must not drive while wearing sandals or high heels.",
   "e": "Do not drive wearing sandals or high heels. (P.18)"
  },
  "idn": {
   "q": "Tidak boleh mengemudi sambil memakai sandal atau sepatu hak tinggi.",
   "e": "Jangan mengemudi dengan sandal atau sepatu hak tinggi. (Hal.18)"
  }
 },
 {
  "id": "1-10",
  "cat": "学科1",
  "q": "長時間（ちょうじかん）にわたって運転（うんてん）するときは、3時間（じかん）に1回（かい）は休憩（きゅうけい）をとるようにすることが大切（たいせつ）である。",
  "a": false,
  "exp": "2時間（じかん）に1回（かい）は休憩（きゅうけい）をとるようにします。（17P）",
  "img": null,
  "vi": {
   "q": "Khi lái xe trong thời gian dài, điều quan trọng là cứ 3 tiếng nghỉ giải lao 1 lần.",
   "e": "Cứ 2 tiếng nghỉ giải lao 1 lần. (Trang 17)"
  },
  "ne": {
   "q": "लामो समयसम्म गाडी चलाउँदा ३ घण्टामा १ पटक आराम गर्नु महत्त्वपूर्ण छ।",
   "e": "२ घण्टामा १ पटक आराम गर्नुपर्छ। (पृष्ठ 17)"
  },
  "en": {
   "q": "When driving for long hours, it is important to take a break once every 3 hours.",
   "e": "Take a break once every 2 hours. (P.17)"
  },
  "idn": {
   "q": "Saat mengemudi jarak jauh, penting untuk beristirahat sekali setiap 3 jam.",
   "e": "Beristirahatlah sekali setiap 2 jam. (Hal.17)"
  }
 },
 {
  "id": "2-1",
  "cat": "学科2",
  "q": "前方（ぜんぽう）の信号（しんごう）が黄色（きいろ）に変わった（かわった）とき、安全（あんぜん）に停止（ていし）できない場合（ばあい）は、そのまま進む（すすむ）ことができる。",
  "a": true,
  "exp": "安全（あんぜん）に停止（ていし）できない場合（ばあい）は、そのまま進む（すすむ）ことができます。（25P）",
  "img": null,
  "vi": {
   "q": "Khi đèn tín hiệu phía trước chuyển sang màu vàng, nếu không thể dừng lại an toàn thì có thể đi tiếp.",
   "e": "Nếu không thể dừng lại an toàn thì có thể đi tiếp. (Trang 25)"
  },
  "ne": {
   "q": "अगाडिको सिग्नल पहेँलो भएको बेला सुरक्षित रूपमा रोक्न नसकिने अवस्थामा त्यत्तिकै अगाडि बढ्न सकिन्छ।",
   "e": "सुरक्षित रूपमा रोक्न नसकिने अवस्थामा अगाडि बढ्न सकिन्छ। (पृष्ठ 25)"
  },
  "en": {
   "q": "When the signal ahead turns yellow, you may proceed if you cannot stop safely.",
   "e": "If you cannot stop safely, you may proceed. (P.25)"
  },
  "idn": {
   "q": "Saat lampu lalu lintas di depan berubah kuning, boleh terus melaju jika tidak bisa berhenti dengan aman.",
   "e": "Jika tidak bisa berhenti dengan aman, boleh terus melaju. (Hal.25)"
  }
 },
 {
  "id": "2-2",
  "cat": "学科2",
  "q": "前方（ぜんぽう）の信号（しんごう）が青色（あおいろ）のとき、自動車（じどうしゃ）は、直進（ちょくしん）し、左折（させつ）し、右折（うせつ）することができる。",
  "a": true,
  "exp": "前方（ぜんぽう）の信号（しんごう）が青色（あおいろ）のとき、自動車（じどうしゃ）は、直進（ちょくしん）し、左折（させつ）し、右折（うせつ）することができます。（24P）",
  "img": null,
  "vi": {
   "q": "Khi đèn tín hiệu phía trước màu xanh, ô tô có thể đi thẳng, rẽ trái và rẽ phải.",
   "e": "Khi đèn tín hiệu phía trước màu xanh, ô tô có thể đi thẳng, rẽ trái và rẽ phải. (Trang 24)"
  },
  "ne": {
   "q": "अगाडिको सिग्नल हरियो हुँदा गाडी सीधा जान, बायाँ मोडिन र दायाँ मोडिन सक्छ।",
   "e": "अगाडिको सिग्नल हरियो हुँदा गाडी सीधा, बायाँ र दायाँ जान सक्छ। (पृष्ठ 24)"
  },
  "en": {
   "q": "When the signal ahead is green, vehicles may go straight, turn left, and turn right.",
   "e": "When the signal is green, vehicles may go straight, turn left, and turn right. (P.24)"
  },
  "idn": {
   "q": "Saat lampu di depan hijau, mobil boleh lurus, belok kiri, dan belok kanan.",
   "e": "Saat lampu hijau, mobil boleh lurus, belok kiri, dan belok kanan. (Hal.24)"
  }
 },
 {
  "id": "2-3",
  "cat": "学科2",
  "q": "この黄色（きいろ）の灯火（とうか）の矢印信号（やじるししんごう）は、路面電車（ろめんでんしゃ）に対する（たいする）信号（しんごう）である。",
  "a": true,
  "exp": "この信号（しんごう）は、路面電車（ろめんでんしゃ）に対する（たいする）信号（しんごう）です。（26P）",
  "img": "g2_q3.png",
  "vi": {
   "q": "Đèn tín hiệu mũi tên màu vàng này là tín hiệu dành cho tàu điện chạy trên mặt đường.",
   "e": "Tín hiệu này dành cho tàu điện chạy trên mặt đường. (Trang 26)"
  },
  "ne": {
   "q": "यो पहेँलो बत्तीको एरो (तीर) सिग्नल सडकमा चल्ने ट्रामका लागि हो।",
   "e": "यो सिग्नल सडकमा चल्ने ट्राम (रोड ट्रेन) का लागि हो। (पृष्ठ 26)"
  },
  "en": {
   "q": "This yellow arrow signal is a signal for streetcars (trams).",
   "e": "This signal is for streetcars. (P.26)"
  },
  "idn": {
   "q": "Lampu panah kuning ini adalah sinyal untuk trem (kereta jalan).",
   "e": "Sinyal ini untuk trem. (Hal.26)"
  }
 },
 {
  "id": "2-4",
  "cat": "学科2",
  "q": "この図（ず）の警察官（けいさつかん）の手信号（てしんごう）は、矢印（やじるし）の方向（ほうこう）の交通（こうつう）に対して、赤信号（あかしんごう）と同じ（おなじ）意味（いみ）である。",
  "a": false,
  "exp": "この図（ず）の警察官（けいさつかん）の手信号（てしんごう）は、矢印（やじるし）の方向（ほうこう）の交通（こうつう）に対して、黄信号（きしんごう）と同じ（おなじ）意味（いみ）です。（28P）",
  "img": "g2_q4.png",
  "vi": {
   "q": "Tín hiệu bằng tay của cảnh sát trong hình này, đối với hướng giao thông theo mũi tên, có cùng ý nghĩa với đèn đỏ.",
   "e": "Tín hiệu bằng tay của cảnh sát trong hình này, đối với hướng giao thông theo mũi tên, có cùng ý nghĩa với đèn vàng. (Trang 28)"
  },
  "ne": {
   "q": "चित्रमा देखाइएको प्रहरीको हातको सङ्केत, तीरको दिशाको यातायातका लागि रातो बत्ती सरह हो।",
   "e": "चित्रको प्रहरीको हातको सङ्केत, तीरको दिशाको यातायातका लागि पहेँलो बत्ती सरह हो। (पृष्ठ 28)"
  },
  "en": {
   "q": "The police officer's hand signal in this figure has the same meaning as a red light for traffic in the direction of the arrow.",
   "e": "This hand signal has the same meaning as a YELLOW light for traffic in the direction of the arrow. (P.28)"
  },
  "idn": {
   "q": "Isyarat tangan polisi pada gambar ini berarti sama dengan lampu merah bagi lalu lintas dari arah panah.",
   "e": "Isyarat tangan ini berarti sama dengan lampu KUNING bagi lalu lintas dari arah panah. (Hal.28)"
  }
 },
 {
  "id": "2-5",
  "cat": "学科2",
  "q": "図（ず）のような信号（しんごう）に対面（たいめん）する自動車（じどうしゃ）は、矢印（やじるし）の方向（ほうこう）に進む（すすむ）ことができる。",
  "a": true,
  "exp": "青色（あおいろ）の灯火（とうか）の矢印（やじるし）に対面（たいめん）する自動車（じどうしゃ）は、矢印（やじるし）の方向（ほうこう）に進む（すすむ）ことができます。（26P）",
  "img": "g2_q5.jpg",
  "vi": {
   "q": "Ô tô đối diện với đèn tín hiệu như trong hình có thể đi theo hướng mũi tên.",
   "e": "Ô tô đối diện với mũi tên đèn màu xanh có thể đi theo hướng mũi tên. (Trang 26)"
  },
  "ne": {
   "q": "चित्रमा जस्तो सिग्नलको सामुन्ने रहेको गाडी तीरको दिशामा जान सक्छ।",
   "e": "हरियो तीरको सामुन्ने रहेको गाडी तीरको दिशामा जान सक्छ। (पृष्ठ 26)"
  },
  "en": {
   "q": "A vehicle facing a signal like the one in the figure may proceed in the direction of the arrow.",
   "e": "A vehicle facing a green arrow may proceed in the direction of the arrow. (P.26)"
  },
  "idn": {
   "q": "Mobil yang menghadap sinyal seperti pada gambar boleh melaju ke arah panah.",
   "e": "Mobil yang menghadap panah hijau boleh melaju ke arah panah. (Hal.26)"
  }
 },
 {
  "id": "2-6",
  "cat": "学科2",
  "q": "警察官（けいさつかん）は、危険防止（きけんぼうし）などのため、必要（ひつよう）があれば、信号機（しんごうき）の信号（しんごう）や標識（ひょうしき）などと異なる（ことなる）指示（しじ）をすることがある。",
  "a": true,
  "exp": "警察官（けいさつかん）などは、必要（ひつよう）があれば、信号機（しんごうき）の信号（しんごう）などと異なる（ことなる）指示（しじ）をすることがあります。（30P）",
  "img": null,
  "vi": {
   "q": "Cảnh sát, khi cần thiết để phòng ngừa nguy hiểm v.v., có thể đưa ra chỉ dẫn khác với đèn tín hiệu hay biển báo.",
   "e": "Cảnh sát v.v., khi cần thiết, có thể đưa ra chỉ dẫn khác với đèn tín hiệu v.v. (Trang 30)"
  },
  "ne": {
   "q": "प्रहरीले खतरा रोकथाम आदिका लागि आवश्यक परे सिग्नल वा चिन्हभन्दा फरक निर्देशन दिन सक्छ।",
   "e": "प्रहरी आदिले आवश्यक परे सिग्नलभन्दा फरक निर्देशन दिन सक्छन्। (पृष्ठ 30)"
  },
  "en": {
   "q": "Police officers may, when necessary to prevent danger, give instructions that differ from traffic signals or signs.",
   "e": "Police officers may give instructions different from signals when necessary. (P.30)"
  },
  "idn": {
   "q": "Polisi, bila perlu untuk mencegah bahaya, dapat memberi petunjuk yang berbeda dari lampu lalu lintas atau rambu.",
   "e": "Polisi dapat memberi petunjuk yang berbeda dari sinyal bila diperlukan. (Hal.30)"
  }
 },
 {
  "id": "2-7",
  "cat": "学科2",
  "q": "この信号（しんごう）に対面（たいめん）する車（くるま）や路面電車（ろめんでんしゃ）は、停止位置（ていしいち）で一時停止（いちじていし）しなければならない。",
  "a": true,
  "exp": "この信号（しんごう）（赤色（あかいろ）の灯火（とうか）の点滅（てんめつ））に対面（たいめん）する車（くるま）や路面電車（ろめんでんしゃ）は、停止位置（ていしいち）で一時停止（いちじていし）しなければなりません。（26P）",
  "img": "g2_q7.jpg",
  "vi": {
   "q": "Xe và tàu điện mặt đường đối diện với đèn tín hiệu này phải dừng lại tạm thời tại vị trí dừng.",
   "e": "Xe và tàu điện mặt đường đối diện với đèn tín hiệu này (đèn đỏ nhấp nháy) phải dừng lại tạm thời tại vị trí dừng. (Trang 26)"
  },
  "ne": {
   "q": "यो सिग्नलको सामुन्ने रहेका गाडी र ट्रामले रोकिने स्थानमा अस्थायी रूपमा रोकिनुपर्छ।",
   "e": "यो सिग्नल (रातो बत्ती झिमझिम) को सामुन्नेका गाडी र ट्रामले रोकिने स्थानमा एकपटक रोकिनुपर्छ। (पृष्ठ 26)"
  },
  "en": {
   "q": "Vehicles and streetcars facing this signal must stop momentarily at the stop position.",
   "e": "Facing this signal (flashing red), vehicles and streetcars must stop momentarily at the stop position. (P.26)"
  },
  "idn": {
   "q": "Kendaraan dan trem yang menghadap sinyal ini harus berhenti sejenak di posisi berhenti.",
   "e": "Menghadap sinyal ini (merah berkedip), kendaraan dan trem harus berhenti sejenak di posisi berhenti. (Hal.26)"
  }
 },
 {
  "id": "2-8",
  "cat": "学科2",
  "q": "停止線（ていしせん）は、少し（すこし）なら越えて（こえて）停止（ていし）してもよい。",
  "a": false,
  "exp": "停止線（ていしせん）があるところでは停止線（ていしせん）の直前（ちょくぜん）で停止（ていし）します。（29P）",
  "img": null,
  "vi": {
   "q": "Vạch dừng, nếu chỉ vượt qua một chút thì dừng đè lên cũng được.",
   "e": "Nơi có vạch dừng thì phải dừng ngay trước vạch dừng. (Trang 29)"
  },
  "ne": {
   "q": "स्टप लाइन (रोकिने रेखा) अलिकति नाघेर रोकिए पनि हुन्छ।",
   "e": "स्टप लाइन भएको ठाउँमा रेखाको ठिक अगाडि रोकिनुपर्छ। (पृष्ठ 29)"
  },
  "en": {
   "q": "It is acceptable to stop slightly past the stop line.",
   "e": "Where there is a stop line, stop just before it. (P.29)"
  },
  "idn": {
   "q": "Boleh berhenti sedikit melewati garis berhenti.",
   "e": "Di tempat bergaris berhenti, berhentilah tepat sebelum garis. (Hal.29)"
  }
 },
 {
  "id": "2-9",
  "cat": "学科2",
  "q": "この標示板（ひょうじばん）があるときは、赤信号（あかしんごう）でも周り（まわり）の交通（こうつう）に注意（ちゅうい）して、左折（させつ）することができる。",
  "a": true,
  "exp": "「左折（させつ）可（か）」の標示板（ひょうじばん）があるときは、赤信号（あかしんごう）でも周り（まわり）の交通（こうつう）に注意（ちゅうい）して、左折（させつ）することができます。（30P）",
  "img": "g2_q9.jpg",
  "vi": {
   "q": "Khi có biển chỉ dẫn này, dù đèn đỏ vẫn có thể rẽ trái nếu chú ý đến giao thông xung quanh.",
   "e": "Khi có biển \"Được phép rẽ trái\", dù đèn đỏ vẫn có thể rẽ trái nếu chú ý đến giao thông xung quanh. (Trang 30)"
  },
  "ne": {
   "q": "यो बोर्ड भएको ठाउँमा रातो बत्तीमा पनि वरपरको यातायातमा ध्यान दिँदै बायाँ मोडिन सकिन्छ।",
   "e": "「बायाँ मोड्न मिल्ने」 बोर्ड भएको ठाउँमा रातो बत्तीमा पनि ध्यान दिँदै बायाँ मोडिन सकिन्छ। (पृष्ठ 30)"
  },
  "en": {
   "q": "When this sign board is present, you may turn left even on a red light while paying attention to surrounding traffic.",
   "e": "With a \"Left turn permitted\" board, you may turn left on red while watching surrounding traffic. (P.30)"
  },
  "idn": {
   "q": "Jika ada papan tanda ini, boleh belok kiri meski lampu merah sambil memperhatikan lalu lintas sekitar.",
   "e": "Dengan papan \"boleh belok kiri\", boleh belok kiri saat lampu merah sambil memperhatikan sekitar. (Hal.30)"
  }
 },
 {
  "id": "2-10",
  "cat": "学科2",
  "q": "警察官（けいさつかん）が手信号（てしんごう）を行って（おこなって）いる場合（ばあい）は、従う（したがう）必要（ひつよう）があるが、交通巡視員（こうつうじゅんしいん）の手信号（てしんごう）には従わ（したがわ）なくてもよい。",
  "a": false,
  "exp": "警察官（けいさつかん）や交通巡視員（こうつうじゅんしいん）の手信号（てしんごう）には従わ（したがわ）なければなりません。（30P）",
  "img": null,
  "vi": {
   "q": "Khi cảnh sát ra hiệu bằng tay thì phải tuân theo, nhưng tín hiệu bằng tay của nhân viên tuần tra giao thông thì không cần tuân theo cũng được.",
   "e": "Phải tuân theo tín hiệu bằng tay của cả cảnh sát lẫn nhân viên tuần tra giao thông. (Trang 30)"
  },
  "ne": {
   "q": "प्रहरीको हातको सङ्केत मान्नुपर्छ तर ट्राफिक निरीक्षकको हातको सङ्केत नमाने पनि हुन्छ।",
   "e": "प्रहरी र ट्राफिक निरीक्षक दुवैको हातको सङ्केत मान्नुपर्छ। (पृष्ठ 30)"
  },
  "en": {
   "q": "You must obey a police officer's hand signals, but you do not need to obey a traffic patrol officer's hand signals.",
   "e": "You must obey hand signals of both police officers and traffic patrol officers. (P.30)"
  },
  "idn": {
   "q": "Isyarat tangan polisi wajib dipatuhi, tetapi isyarat tangan petugas patroli lalu lintas tidak perlu dipatuhi.",
   "e": "Isyarat tangan polisi maupun petugas patroli lalu lintas wajib dipatuhi. (Hal.30)"
  }
 },
 {
  "id": "3-1",
  "cat": "学科3",
  "q": "２１時（じ）に、この標識（ひょうしき）のある道路（どうろ）を右折（うせつ）することはできる。",
  "a": true,
  "exp": "指定方向外進行禁止（していほうこうがいしんこうきんし）（35P）「14」補助標識（ほじょひょうしき）（43P）「2」",
  "img": "g3_q1.jpg",
  "vi": {
   "q": "Lúc 21 giờ, có thể rẽ phải trên đường có biển báo này.",
   "e": "Biển \"Cấm đi theo hướng ngoài hướng chỉ định\" (Trang 35, số 14) kèm biển phụ (Trang 43, số 2)."
  },
  "ne": {
   "q": "राति ९ बजे (२१ बजे) यो चिन्ह भएको सडकमा दायाँ मोडिन सकिन्छ।",
   "e": "「तोकिएको दिशा बाहेक जान निषेध」 चिन्ह (पृष्ठ 35, नं. 14) र सहायक चिन्ह (पृष्ठ 43, नं. 2)।"
  },
  "en": {
   "q": "At 21:00 (9 p.m.), you can turn right on a road with this sign.",
   "e": "\"No entry except in designated directions\" sign (P.35, No.14) with supplementary sign (P.43, No.2)."
  },
  "idn": {
   "q": "Pada pukul 21:00, boleh belok kanan di jalan yang ada rambu ini.",
   "e": "Rambu \"dilarang melaju selain arah yang ditentukan\" (Hal.35 No.14) dengan rambu tambahan (Hal.43 No.2)."
  }
 },
 {
  "id": "3-2",
  "cat": "学科3",
  "q": "この標識（ひょうしき）のあるところでは車（くるま）（自動車（じどうしゃ）・一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）・軽車両（けいしゃりょう））は通行（つうこう）できない。",
  "a": true,
  "exp": "車両通行止め（しゃりょうつうこうどめ）（35P）「2」",
  "img": "g3_q2.png",
  "vi": {
   "q": "Nơi có biển báo này, xe (ô tô, xe gắn máy thông thường, xe thô sơ) không được đi qua.",
   "e": "Biển \"Cấm xe cộ lưu thông\". (Trang 35, số 2)"
  },
  "ne": {
   "q": "यो चिन्ह भएको ठाउँमा गाडी (मोटरगाडी, सामान्य मोपेड, हलुका सवारी) चल्न पाउँदैन।",
   "e": "「सवारी निषेध」 चिन्ह। (पृष्ठ 35, नं. 2)"
  },
  "en": {
   "q": "Where this sign is posted, vehicles (motor vehicles, standard mopeds, and light vehicles) cannot pass.",
   "e": "\"Closed to vehicles\" sign. (P.35, No.2)"
  },
  "idn": {
   "q": "Di tempat yang ada rambu ini, kendaraan (mobil, moped standar, kendaraan ringan) tidak boleh lewat.",
   "e": "Rambu \"tertutup untuk kendaraan\". (Hal.35 No.2)"
  }
 },
 {
  "id": "3-3",
  "cat": "学科3",
  "q": "この標識（ひょうしき）のあるところでは停車（ていしゃ）はできる。",
  "a": true,
  "exp": "駐車禁止（ちゅうしゃきんし）（36P）「20」",
  "img": "g3_q3.png",
  "vi": {
   "q": "Nơi có biển báo này thì có thể dừng xe (teisha).",
   "e": "Biển \"Cấm đỗ xe\" — cấm đỗ nhưng được dừng. (Trang 36, số 20)"
  },
  "ne": {
   "q": "यो चिन्ह भएको ठाउँमा छोटो समय रोक्न (停車) सकिन्छ।",
   "e": "「पार्किङ निषेध」 चिन्ह — पार्किङ निषेध तर छोटो रोकाइ मिल्छ। (पृष्ठ 36, नं. 20)"
  },
  "en": {
   "q": "Where this sign is posted, stopping (teisha) is allowed.",
   "e": "\"No parking\" sign — parking is prohibited but stopping is allowed. (P.36, No.20)"
  },
  "idn": {
   "q": "Di tempat yang ada rambu ini, berhenti sebentar (teisha) diperbolehkan.",
   "e": "Rambu \"dilarang parkir\" — parkir dilarang tetapi berhenti sebentar boleh. (Hal.36 No.20)"
  }
 },
 {
  "id": "3-4",
  "cat": "学科3",
  "q": "この標識（ひょうしき）は道（みち）の幅（はば）が２．２ｍになっていることを意味（いみ）している。",
  "a": false,
  "exp": "最大幅（さいだいはば）（36P）「26」",
  "img": "g3_q4.png",
  "vi": {
   "q": "Biển báo này có nghĩa là chiều rộng của đường là 2,2m.",
   "e": "Đây là biển \"Chiều rộng tối đa\" (của xe). (Trang 36, số 26)"
  },
  "ne": {
   "q": "यो चिन्हले सडकको चौडाइ २.२ मिटर छ भन्ने जनाउँछ।",
   "e": "यो 「अधिकतम चौडाइ」 (गाडीको) चिन्ह हो। (पृष्ठ 36, नं. 26)"
  },
  "en": {
   "q": "This sign means the road width is 2.2 meters.",
   "e": "This is the \"Maximum width\" (of vehicle) sign. (P.36, No.26)"
  },
  "idn": {
   "q": "Rambu ini berarti lebar jalan adalah 2,2 meter.",
   "e": "Ini rambu \"lebar maksimum\" (kendaraan). (Hal.36 No.26)"
  }
 },
 {
  "id": "3-5",
  "cat": "学科3",
  "q": "この標識（ひょうしき）のある道路（どうろ）で一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）は右折（うせつ）するとき、あらかじめ道路（どうろ）の中央（ちゅうおう）（一方通行（いっぽうつうこう）は右端（みぎはし））に寄って（よって）右折（うせつ）しなければならない。",
  "a": true,
  "exp": "一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）の右折（うせつ）方法（ほうほう）（小回（こまわ）り）（38P）「48」",
  "img": "g3_q5.png",
  "vi": {
   "q": "Trên đường có biển báo này, xe gắn máy thông thường khi rẽ phải phải đi sát về giữa đường (đường một chiều thì sát mép phải) trước rồi mới rẽ phải.",
   "e": "Cách rẽ phải của xe gắn máy thông thường (rẽ nhỏ). (Trang 38, số 48)"
  },
  "ne": {
   "q": "यो चिन्ह भएको सडकमा सामान्य मोपेडले दायाँ मोडिँदा पहिले नै सडकको बीच (एकतर्फी बाटोमा दायाँ किनारा) तिर लागेर मोडिनुपर्छ।",
   "e": "सामान्य मोपेडको दायाँ मोड्ने तरिका (सानो घुम्ति)। (पृष्ठ 38, नं. 48)"
  },
  "en": {
   "q": "On a road with this sign, a standard moped turning right must first move toward the center of the road (or the right edge on a one-way street) before turning.",
   "e": "Right-turn method for standard mopeds (small turn). (P.38, No.48)"
  },
  "idn": {
   "q": "Di jalan dengan rambu ini, moped standar yang akan belok kanan harus terlebih dahulu mendekat ke tengah jalan (di jalan satu arah, ke tepi kanan) sebelum belok.",
   "e": "Cara belok kanan moped standar (belokan kecil). (Hal.38 No.48)"
  }
 },
 {
  "id": "3-6",
  "cat": "学科3",
  "q": "この標識（ひょうしき）はこの先（さき）、横断歩道（おうだんほどう）があることを示して（しめして）いる。",
  "a": false,
  "exp": "学校（がっこう）・幼稚園（ようちえん）・保育所（ほいくしょ）などがあることを示して（しめして）います。（40P）「12」",
  "img": "g3_q6.png",
  "vi": {
   "q": "Biển báo này cho biết phía trước có vạch sang đường cho người đi bộ.",
   "e": "Biển này cho biết có trường học, mẫu giáo, nhà trẻ v.v. (Trang 40, số 12)"
  },
  "ne": {
   "q": "यो चिन्हले अगाडि पैदल यात्री क्रसिङ छ भन्ने देखाउँछ।",
   "e": "यसले विद्यालय, किन्डरगार्टेन, नर्सरी आदि छ भन्ने देखाउँछ। (पृष्ठ 40, नं. 12)"
  },
  "en": {
   "q": "This sign indicates there is a pedestrian crossing ahead.",
   "e": "It indicates a school, kindergarten, or nursery ahead. (P.40, No.12)"
  },
  "idn": {
   "q": "Rambu ini menunjukkan ada penyeberangan pejalan kaki di depan.",
   "e": "Rambu ini menunjukkan ada sekolah, TK, atau penitipan anak. (Hal.40 No.12)"
  }
 },
 {
  "id": "3-7",
  "cat": "学科3",
  "q": "この規制標示（きせいひょうじ）のある場所（ばしょ）で進路（しんろ）を変更（へんこう）することができるか、できないかを示した（しめした）ものだが、図（ず）のとおりである。",
  "a": true,
  "exp": "（規制標示（きせいひょうじ））進路変更禁止（しんろへんこうきんし）（45P）「1」",
  "img": "g3_q7.png",
  "vi": {
   "q": "Vạch kẻ quy chế này cho biết nơi được và không được thay đổi làn đường; ý nghĩa đúng như trong hình.",
   "e": "(Vạch quy chế) \"Cấm thay đổi làn đường\". (Trang 45, số 1)"
  },
  "ne": {
   "q": "यो नियमन चिन्ह (सडक रेखा) ले लेन परिवर्तन गर्न मिल्ने/नमिल्ने देखाउँछ; चित्रमा देखाइए अनुसार सही हो।",
   "e": "(नियमन रेखा) 「लेन परिवर्तन निषेध」। (पृष्ठ 45, नं. 1)"
  },
  "en": {
   "q": "This regulatory marking shows where lane changes are and are not allowed; the meaning is as shown in the figure.",
   "e": "(Regulatory marking) \"No lane changing\". (P.45, No.1)"
  },
  "idn": {
   "q": "Marka pengatur ini menunjukkan tempat yang boleh dan tidak boleh pindah jalur; artinya seperti pada gambar.",
   "e": "(Marka pengatur) \"dilarang pindah jalur\". (Hal.45 No.1)"
  }
 },
 {
  "id": "3-8",
  "cat": "学科3",
  "q": "この黄色（きいろ）の標示（ひょうじ）のある部分（ぶぶん）を通過（つうか）してもよい。",
  "a": false,
  "exp": "安全地帯（あんぜんちたい）（50P）「10」　（59P）安全地帯（あんぜんちたい）は車（くるま）の通行（つうこう）が禁止（きんし）されており、入って（はいって）はいけません。",
  "img": "g3_q8.png",
  "vi": {
   "q": "Có thể đi qua phần có vạch kẻ màu vàng này.",
   "e": "Đây là \"Khu vực an toàn\" — cấm xe đi vào, không được vào. (Trang 50 số 10, Trang 59)"
  },
  "ne": {
   "q": "यो पहेँलो चिन्ह (रेखा) भएको भागबाट गुज्रन सकिन्छ।",
   "e": "यो 「सुरक्षा क्षेत्र」 हो — गाडी प्रवेश निषेध छ, भित्र पस्नु हुँदैन। (पृष्ठ 50 नं. 10, पृष्ठ 59)"
  },
  "en": {
   "q": "You may pass through the section with this yellow marking.",
   "e": "This is a \"Safety zone\" — vehicles are prohibited from entering. (P.50 No.10, P.59)"
  },
  "idn": {
   "q": "Boleh melewati bagian yang bermarka kuning ini.",
   "e": "Ini \"zona aman\" — kendaraan dilarang masuk. (Hal.50 No.10, Hal.59)"
  }
 },
 {
  "id": "3-9",
  "cat": "学科3",
  "q": "この先（さき）急な（きゅうな）下り坂（くだりざか）があることを示して（しめして）いる。",
  "a": true,
  "exp": "下り急こう配（くだりきゅうこうばい）あり（40P）「22」",
  "img": "g3_q9.jpg",
  "vi": {
   "q": "Biển này cho biết phía trước có dốc xuống gấp.",
   "e": "Biển \"Có dốc xuống gấp\". (Trang 40, số 22)"
  },
  "ne": {
   "q": "यसले अगाडि ठाडो ओरालो छ भन्ने देखाउँछ।",
   "e": "「ठाडो ओरालो」 चिन्ह। (पृष्ठ 40, नं. 22)"
  },
  "en": {
   "q": "This sign indicates a steep downhill ahead.",
   "e": "\"Steep descent ahead\" sign. (P.40, No.22)"
  },
  "idn": {
   "q": "Rambu ini menunjukkan ada turunan curam di depan.",
   "e": "Rambu \"turunan curam\". (Hal.40 No.22)"
  }
 },
 {
  "id": "3-10",
  "cat": "学科3",
  "q": "この標示（ひょうじ）のあるところでは、この部分（ぶぶん）を通過（つうか）することはできない。",
  "a": false,
  "exp": "停止禁止部分（ていしきんしぶぶん）（46P）「8」車（くるま）は前方（ぜんぽう）の状況（じょうきょう）によってこの標示（ひょうじ）の中（なか）で停止（ていし）するおそれがあるときは、この中（なか）に入って（はいって）はいけません。",
  "img": "g3_q10.png",
  "vi": {
   "q": "Nơi có vạch kẻ này, không thể đi qua phần này.",
   "e": "\"Phần cấm dừng lại\" — nếu có khả năng phải dừng bên trong vạch này do tình trạng phía trước thì không được đi vào, nhưng đi qua thì được. (Trang 46, số 8)"
  },
  "ne": {
   "q": "यो रेखा-चिन्ह भएको ठाउँमा यो भागबाट गुज्रनै मिल्दैन।",
   "e": "「रोकिन निषेध क्षेत्र」 — अगाडिको अवस्थाले यो चिन्हभित्र रोकिनुपर्ने सम्भावना भए भित्र पस्नु हुँदैन, तर गुज्रन मिल्छ। (पृष्ठ 46, नं. 8)"
  },
  "en": {
   "q": "Where this marking is present, you cannot pass through this section at all.",
   "e": "\"No stopping zone\" — do not enter if you might have to stop inside due to traffic ahead, but passing through is allowed. (P.46, No.8)"
  },
  "idn": {
   "q": "Di tempat bermarka ini, sama sekali tidak boleh melewati bagian ini.",
   "e": "\"Zona dilarang berhenti\" — jangan masuk jika mungkin berhenti di dalamnya karena kondisi di depan, tetapi boleh melintas. (Hal.46 No.8)"
  }
 },
 {
  "id": "4-1",
  "cat": "学科4",
  "q": "自動車（じどうしゃ）は、歩道（ほどう）や路側帯（ろそくたい）のない道路（どうろ）において、路肩（ろかた）の部分（ぶぶん）にはみ出して通行（つうこう）してはならない。※二輪（にりん）のものを除く（のぞく）。",
  "a": true,
  "exp": "歩道（ほどう）や路側帯（ろそくたい）のない道路（どうろ）において、路肩（ろかた）の部分（ぶぶん）にはみ出して通行（つうこう）してはなりません。（60P）",
  "img": null,
  "vi": {
   "q": "Trên đường không có vỉa hè hay dải lề đường, ô tô không được lấn ra phần lề đường (rokata) để chạy. ※Trừ xe hai bánh.",
   "e": "Trên đường không có vỉa hè hay dải lề đường, không được lấn ra phần lề đường để chạy. (Trang 60)"
  },
  "ne": {
   "q": "फुटपाथ वा सडक-किनारा पट्टी नभएको सडकमा गाडीले सडकको काँध (किनारा भाग) मिचेर चल्नु हुँदैन। ※दुईपाङ्ग्रे बाहेक।",
   "e": "फुटपाथ वा किनारा पट्टी नभएको सडकमा काँध भाग मिचेर चल्नु हुँदैन। (पृष्ठ 60)"
  },
  "en": {
   "q": "On roads without sidewalks or roadside strips, motor vehicles must not run over the road shoulder. *Except two-wheeled vehicles.",
   "e": "On roads without sidewalks or roadside strips, do not run over the shoulder. (P.60)"
  },
  "idn": {
   "q": "Di jalan tanpa trotoar atau lajur tepi, mobil tidak boleh melaju melewati bahu jalan. *Kecuali kendaraan roda dua.",
   "e": "Di jalan tanpa trotoar atau lajur tepi, jangan melaju di bahu jalan. (Hal.60)"
  }
 },
 {
  "id": "4-2",
  "cat": "学科4",
  "q": "道路（どうろ）に面した（めんした）場所（ばしょ）に出入り（でいり）するために歩道（ほどう）や路側帯（ろそくたい）を横切る（よこぎる）場合（ばあい）、歩行者（ほこうしゃ）がいないときは、その直前（ちょくぜん）で一時停止（いちじていし）せず徐行（じょこう）して通過（つうか）できる。",
  "a": false,
  "exp": "歩行者（ほこうしゃ）がいないときでも、その直前（ちょくぜん）で一時停止（いちじていし）しなければなりません。（60P）",
  "img": null,
  "vi": {
   "q": "Khi cắt ngang vỉa hè hay dải lề đường để ra vào nơi tiếp giáp với đường, nếu không có người đi bộ thì có thể không dừng lại mà chỉ đi chậm qua.",
   "e": "Dù không có người đi bộ, vẫn phải dừng lại ngay trước đó. (Trang 60)"
  },
  "ne": {
   "q": "सडकसँग जोडिएको ठाउँमा आउजाउ गर्न फुटपाथ वा किनारा पट्टी काट्दा, पैदल यात्री छैन भने नरोकिई ढिलो गतिमा मात्र गुज्रन मिल्छ।",
   "e": "पैदल यात्री नभए पनि ठिक अगाडि एकपटक रोकिनुपर्छ। (पृष्ठ 60)"
  },
  "en": {
   "q": "When crossing a sidewalk or roadside strip to enter or exit a roadside property, if there are no pedestrians you may pass slowly without stopping.",
   "e": "Even with no pedestrians, you must stop momentarily just before crossing. (P.60)"
  },
  "idn": {
   "q": "Saat melintasi trotoar atau lajur tepi untuk keluar-masuk tempat di pinggir jalan, jika tidak ada pejalan kaki boleh lewat pelan tanpa berhenti.",
   "e": "Meski tanpa pejalan kaki, wajib berhenti sejenak tepat sebelum melintas. (Hal.60)"
  }
 },
 {
  "id": "4-3",
  "cat": "学科4",
  "q": "車（くるま）は、同一（どういつ）の方向（ほうこう）に二つ以上（ふたついじょう）の車両通行帯（しゃりょうつうこうたい）がある道路（どうろ）では、標識（ひょうしき）や標示（ひょうじ）で通行区分（つうこうくぶん）が示されて（しめされて）いても、遅い（おそい）速度（そくど）で通行（つうこう）する場合（ばあい）は、最も（もっとも）左側（ひだりがわ）の車両通行帯（しゃりょうつうこうたい）を通行（つうこう）しなければならない。",
  "a": false,
  "exp": "車（くるま）は標識（ひょうしき）や標示（ひょうじ）で通行区分（つうこうくぶん）が示されて（しめされて）いるときは、それに従わ（したがわ）なければなりません。（58P）",
  "img": null,
  "vi": {
   "q": "Trên đường có từ hai làn xe trở lên cùng chiều, dù biển báo hay vạch kẻ có chỉ định phân làn, nếu chạy chậm thì vẫn phải đi làn ngoài cùng bên trái.",
   "e": "Khi biển báo hay vạch kẻ chỉ định phân làn thì phải tuân theo chỉ định đó. (Trang 58)"
  },
  "ne": {
   "q": "एउटै दिशामा दुई वा बढी लेन भएको सडकमा, चिन्ह वा रेखाले लेन तोकेको भए पनि ढिलो गतिमा चल्दा सबैभन्दा बायाँ लेनमै चल्नुपर्छ।",
   "e": "चिन्ह वा रेखाले लेन तोकिएको बेला त्यसैलाई पालना गर्नुपर्छ। (पृष्ठ 58)"
  },
  "en": {
   "q": "On a road with two or more lanes in the same direction, even if signs or markings designate lane use, slow vehicles must use the leftmost lane.",
   "e": "When lane use is designated by signs or markings, you must follow the designation. (P.58)"
  },
  "idn": {
   "q": "Di jalan dengan dua jalur atau lebih searah, meski rambu atau marka menentukan penggunaan jalur, kendaraan lambat harus tetap memakai jalur paling kiri.",
   "e": "Jika penggunaan jalur ditentukan rambu/marka, harus mengikuti ketentuan itu. (Hal.58)"
  }
 },
 {
  "id": "4-4",
  "cat": "学科4",
  "q": "車両通行帯（しゃりょうつうこうたい）のある道路（どうろ）では、空いて（あいて）いる車両通行帯（しゃりょうつうこうたい）に移り（うつり）ながら通行（つうこう）するとよい。",
  "a": false,
  "exp": "車両通行帯（しゃりょうつうこうたい）をみだりに変えて（かえて）通行（つうこう）してはいけません。（58P）",
  "img": null,
  "vi": {
   "q": "Trên đường có nhiều làn xe, nên vừa chạy vừa chuyển sang làn đang trống.",
   "e": "Không được tùy tiện thay đổi làn xe khi chạy. (Trang 58)"
  },
  "ne": {
   "q": "धेरै लेन भएको सडकमा खाली लेनमा सर्दै चल्नु राम्रो हो।",
   "e": "बिना कारण लेन फेर्दै चल्नु हुँदैन। (पृष्ठ 58)"
  },
  "en": {
   "q": "On a road with multiple lanes, it is good to keep moving into whichever lane is open.",
   "e": "Do not change lanes without good reason. (P.58)"
  },
  "idn": {
   "q": "Di jalan berjalur banyak, sebaiknya berpindah-pindah ke jalur yang kosong.",
   "e": "Jangan berpindah jalur sembarangan. (Hal.58)"
  }
 },
 {
  "id": "4-5",
  "cat": "学科4",
  "q": "この標示（ひょうじ）は、立入り禁止部分（たちいりきんしぶぶん）を示して（しめして）おり、標示（ひょうじ）部分（ぶぶん）に入って（はいって）はならない。",
  "a": true,
  "exp": "この標示（ひょうじ）は、立入り禁止部分（たちいりきんしぶぶん）を示して（しめして）おり、標示（ひょうじ）部分（ぶぶん）に入って（はいって）はいけません。（59P）",
  "img": "g4_q5.jpg",
  "vi": {
   "q": "Vạch kẻ này thể hiện \"phần cấm đi vào\"; không được đi vào phần có vạch.",
   "e": "Vạch này là \"phần cấm đi vào\", không được đi vào phần có vạch. (Trang 59)"
  },
  "ne": {
   "q": "यो रेखा-चिन्हले 「प्रवेश निषेध क्षेत्र」 जनाउँछ; चिन्ह भएको भागभित्र पस्नु हुँदैन।",
   "e": "यो 「प्रवेश निषेध क्षेत्र」 हो, भित्र पस्नु हुँदैन। (पृष्ठ 59)"
  },
  "en": {
   "q": "This marking indicates a no-entry zone; vehicles must not enter the marked area.",
   "e": "This marking is a no-entry zone; do not enter the marked area. (P.59)"
  },
  "idn": {
   "q": "Marka ini menunjukkan zona larangan masuk; kendaraan tidak boleh masuk ke bagian bermarka.",
   "e": "Marka ini zona larangan masuk; jangan masuk ke bagian bermarka. (Hal.59)"
  }
 },
 {
  "id": "4-6",
  "cat": "学科4",
  "q": "この標示（ひょうじ）は、路側帯（ろそくたい）を示した（しめした）ものだが、路側帯（ろそくたい）は歩行者（ほこうしゃ）しか通行（つうこう）できない。",
  "a": false,
  "exp": "路側帯（ろそくたい）は歩行者（ほこうしゃ）、特例特定小型原動機付自転車（とくれいとくていこがたげんどうきつきじてんしゃ）、軽車両（けいしゃりょう）が通行（つうこう）できます。（55P）",
  "img": "g4_q6.png",
  "vi": {
   "q": "Vạch kẻ này thể hiện dải lề đường, nhưng dải lề đường chỉ có người đi bộ mới được đi.",
   "e": "Dải lề đường dành cho người đi bộ, xe đạp điện loại nhỏ đặc lệ và xe thô sơ. (Trang 55)"
  },
  "ne": {
   "q": "यो रेखाले सडक-किनारा पट्टी जनाउँछ, तर त्यहाँ पैदल यात्री मात्र हिँड्न पाउँछन्।",
   "e": "किनारा पट्टीमा पैदल यात्री, विशेष साना मोपेड र हलुका सवारी चल्न पाउँछन्। (पृष्ठ 55)"
  },
  "en": {
   "q": "This marking indicates a roadside strip, and only pedestrians may use it.",
   "e": "Roadside strips may be used by pedestrians, special-exception small motorized bicycles, and light vehicles. (P.55)"
  },
  "idn": {
   "q": "Marka ini menunjukkan lajur tepi jalan, dan hanya pejalan kaki yang boleh memakainya.",
   "e": "Lajur tepi boleh dipakai pejalan kaki, sepeda motor kecil khusus, dan kendaraan ringan. (Hal.55)"
  }
 },
 {
  "id": "4-7",
  "cat": "学科4",
  "q": "この標示（ひょうじ）は、歩行者用路側帯（ほこうしゃようろそくたい）を示した（しめした）ものだが、歩行者用路側帯（ほこうしゃようろそくたい）は歩行者（ほこうしゃ）、自転車（じてんしゃ）が通行（つうこう）できる。",
  "a": false,
  "exp": "歩行者用路側帯（ほこうしゃようろそくたい）は歩行者（ほこうしゃ）のみ通行（つうこう）できます。（55P）",
  "img": "g4_q7.png",
  "vi": {
   "q": "Vạch kẻ này thể hiện dải lề đường dành cho người đi bộ; người đi bộ và xe đạp có thể đi.",
   "e": "Dải lề đường dành cho người đi bộ thì chỉ người đi bộ mới được đi. (Trang 55)"
  },
  "ne": {
   "q": "यो रेखाले पैदल यात्रीका लागि किनारा पट्टी जनाउँछ; त्यहाँ पैदल यात्री र साइकल चल्न पाउँछन्।",
   "e": "पैदल यात्री किनारा पट्टीमा पैदल यात्री मात्र हिँड्न पाउँछन्। (पृष्ठ 55)"
  },
  "en": {
   "q": "This marking indicates a pedestrian roadside strip, which may be used by pedestrians and bicycles.",
   "e": "Pedestrian roadside strips may be used by pedestrians only. (P.55)"
  },
  "idn": {
   "q": "Marka ini menunjukkan lajur tepi khusus pejalan kaki, yang boleh dipakai pejalan kaki dan sepeda.",
   "e": "Lajur tepi khusus pejalan kaki hanya boleh dipakai pejalan kaki. (Hal.55)"
  }
 },
 {
  "id": "4-8",
  "cat": "学科4",
  "q": "車（くるま）は道路工事（どうろこうじ）などのため、左側（ひだりがわ）部分（ぶぶん）だけでは通行（つうこう）するのに十分（じゅうぶん）な幅（はば）がないときは道路（どうろ）の中央（ちゅうおう）部分（ぶぶん）から右（みぎ）の部分（ぶぶん）にはみ出して通行（つうこう）することができる。",
  "a": true,
  "exp": "追加知識（ついかちしき）・その場合（ばあい）でも一方通行（いっぽうつうこう）の道路（どうろ）を通行（つうこう）する場合（ばあい）のほかは、はみ出（だ）しかたができるだけ少（すく）なくなるようにしなければなりません。（56P）",
  "img": null,
  "vi": {
   "q": "Khi do công trình đường bộ v.v. mà phần bên trái không đủ rộng để đi, xe có thể lấn sang phần bên phải từ giữa đường để đi.",
   "e": "Kiến thức thêm: cả trong trường hợp đó, trừ khi đi trên đường một chiều, phải cố gắng lấn sang ít nhất có thể. (Trang 56)"
  },
  "ne": {
   "q": "सडक निर्माण आदिका कारण बायाँ भागमा चल्न पर्याप्त चौडाइ नभए गाडीले सडकको बीचबाट दायाँ भागमा मिचेर चल्न सक्छ।",
   "e": "थप ज्ञान: त्यस्तो अवस्थामा पनि एकतर्फी बाटो बाहेक, सकेसम्म थोरै मात्र मिच्ने गरी चल्नुपर्छ। (पृष्ठ 56)"
  },
  "en": {
   "q": "When road construction or the like leaves insufficient width on the left side, vehicles may cross the center and use the right side of the road.",
   "e": "Additional note: even then, except on one-way roads, keep the protrusion to the right as small as possible. (P.56)"
  },
  "idn": {
   "q": "Jika karena pekerjaan jalan dsb. lebar sisi kiri tidak cukup, kendaraan boleh melewati bagian kanan dari tengah jalan.",
   "e": "Catatan: bahkan saat itu, kecuali di jalan satu arah, usahakan keluar jalur sesedikit mungkin. (Hal.56)"
  }
 },
 {
  "id": "4-9",
  "cat": "学科4",
  "q": "車（くるま）は軌道敷内（きどうしきない）をいつでも通行（つうこう）することができる。",
  "a": false,
  "exp": "車（くるま）は例外（れいがい）を除（のぞ）き、軌道敷内（きどうしきない）を通行（つうこう）してはいけません。（61P）",
  "img": null,
  "vi": {
   "q": "Xe có thể đi vào phần đường ray tàu điện (kidoshiki-nai) bất cứ lúc nào.",
   "e": "Trừ trường hợp ngoại lệ, xe không được đi vào phần đường ray. (Trang 61)"
  },
  "ne": {
   "q": "गाडी जहिले पनि ट्राम लिकको क्षेत्रभित्र चल्न सक्छ।",
   "e": "अपवाद बाहेक गाडी ट्राम लिक क्षेत्रभित्र चल्नु हुँदैन। (पृष्ठ 61)"
  },
  "en": {
   "q": "Vehicles may drive on streetcar tracks at any time.",
   "e": "Except in special cases, vehicles must not drive on streetcar tracks. (P.61)"
  },
  "idn": {
   "q": "Kendaraan boleh melaju di area rel trem kapan saja.",
   "e": "Kecuali pengecualian, kendaraan tidak boleh melaju di area rel trem. (Hal.61)"
  }
 },
 {
  "id": "4-10",
  "cat": "学科4",
  "q": "二輪車（にりんしゃ）を押して（おして）歩く（あるく）ときは歩行者（ほこうしゃ）として扱われる（あつかわれる）ので、エンジンがかかっているものや側車付（そくしゃつき）のものでも、歩道（ほどう）を通行（つうこう）できる。",
  "a": false,
  "exp": "エンジンがかかっているものや側車付（そくしゃつき）のものは、歩行者（ほこうしゃ）として扱（あつか）われません。（54P）",
  "img": null,
  "vi": {
   "q": "Khi dắt xe hai bánh đi bộ thì được coi là người đi bộ, nên dù xe đang nổ máy hay có thùng bên (side car) vẫn có thể đi trên vỉa hè.",
   "e": "Xe đang nổ máy hoặc có thùng bên thì không được coi là người đi bộ. (Trang 54)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रे गाडी डोहोर्‍याएर हिँड्दा पैदल यात्री मानिने भएकाले इन्जिन चालु भएको वा साइडकार भएको गाडी पनि फुटपाथमा लैजान मिल्छ।",
   "e": "इन्जिन चालु भएको वा साइडकार भएको गाडी पैदल यात्री मानिँदैन। (पृष्ठ 54)"
  },
  "en": {
   "q": "A person pushing a two-wheeled vehicle is treated as a pedestrian, so even one with the engine running or with a sidecar may use the sidewalk.",
   "e": "Vehicles with the engine running or with a sidecar are not treated as pedestrians. (P.54)"
  },
  "idn": {
   "q": "Orang yang mendorong kendaraan roda dua dianggap pejalan kaki, jadi meski mesinnya hidup atau bersespan tetap boleh lewat trotoar.",
   "e": "Kendaraan bermesin hidup atau bersespan tidak dianggap pejalan kaki. (Hal.54)"
  }
 },
 {
  "id": "5-1",
  "cat": "学科5",
  "q": "自動車（じどうしゃ）は、この標識（ひょうしき）のある道路（どうろ）では、時速（じそく）50キロメートルを超える（こえる）速度（そくど）で走行（そうこう）してはいけない。",
  "a": true,
  "exp": "最高速度（さいこうそくど）の規制標識（きせいひょうしき）です。（82P）",
  "img": "g5_q1.jpg",
  "vi": {
   "q": "Trên đường có biển báo này, ô tô không được chạy quá tốc độ 50 km/giờ.",
   "e": "Đây là biển quy chế \"Tốc độ tối đa\". (Trang 82)"
  },
  "ne": {
   "q": "यो चिन्ह भएको सडकमा गाडीले घण्टाको ५० किलोमिटरभन्दा बढी गतिमा चल्नु हुँदैन।",
   "e": "यो 「अधिकतम गति」 को नियमन चिन्ह हो। (पृष्ठ 82)"
  },
  "en": {
   "q": "On a road with this sign, vehicles must not exceed 50 km/h.",
   "e": "This is the \"Maximum speed\" regulatory sign. (P.82)"
  },
  "idn": {
   "q": "Di jalan dengan rambu ini, mobil tidak boleh melaju lebih dari 50 km/jam.",
   "e": "Ini rambu pengatur \"kecepatan maksimum\". (Hal.82)"
  }
 },
 {
  "id": "5-2",
  "cat": "学科5",
  "q": "路面（ろめん）が雨（あめ）にぬれ、タイヤがすり減っている場合（ばあい）の停止距離（ていしきょり）は、乾燥（かんそう）した路面（ろめん）でタイヤの状態（じょうたい）が良い（よい）場合（ばあい）に比べて（くらべて）、2倍（ばい）程度（ていど）のびることがある。",
  "a": true,
  "exp": "路面（ろめん）が雨（あめ）にぬれ、タイヤがすり減っている場合（ばあい）の停止距離（ていしきょり）は、乾燥（かんそう）した路面（ろめん）でタイヤの状態（じょうたい）が良い（よい）場合（ばあい）に比べて（くらべて）、2倍（ばい）程度（ていど）のびることがあります。（84P）",
  "img": null,
  "vi": {
   "q": "Khi mặt đường ướt mưa và lốp bị mòn, khoảng cách dừng xe có thể dài gấp khoảng 2 lần so với khi mặt đường khô và lốp ở tình trạng tốt.",
   "e": "Khi mặt đường ướt mưa và lốp mòn, khoảng cách dừng có thể dài gấp khoảng 2 lần so với mặt đường khô, lốp tốt. (Trang 84)"
  },
  "ne": {
   "q": "पानीले भिजेको सडक र खिइएको टायरको अवस्थामा रोकिने दूरी, सुक्खा सडक र राम्रो टायरको तुलनामा करिब २ गुणासम्म लामो हुनसक्छ।",
   "e": "भिजेको सडक र खिइएको टायरमा रोकिने दूरी करिब २ गुणासम्म लामो हुनसक्छ। (पृष्ठ 84)"
  },
  "en": {
   "q": "On a wet road with worn tires, the stopping distance can be about twice as long as on a dry road with good tires.",
   "e": "On wet roads with worn tires, stopping distance can be about twice that of dry roads with good tires. (P.84)"
  },
  "idn": {
   "q": "Di jalan basah dengan ban aus, jarak berhenti bisa memanjang sekitar 2 kali lipat dibanding jalan kering dengan ban baik.",
   "e": "Di jalan basah dengan ban aus, jarak berhenti bisa sekitar 2 kali lipat. (Hal.84)"
  }
 },
 {
  "id": "5-3",
  "cat": "学科5",
  "q": "一般道路（いっぱんどうろ）で自動車（じどうしゃ）を運転（うんてん）するとき、最高速度（さいこうそくど）が標識（ひょうしき）や標示（ひょうじ）で指定（してい）されていない場合（ばあい）は、時速（じそく）50キロメートルを超えて運転（うんてん）してはならない。",
  "a": false,
  "exp": "一般道路（いっぱんどうろ）で自動車（じどうしゃ）を運転（うんてん）するとき、最高速度（さいこうそくど）が標識（ひょうしき）や標示（ひょうじ）で指定（してい）されていない場合（ばあい）は、時速（じそく）60キロメートルを超えて運転（うんてん）してはなりません。（82P）",
  "img": null,
  "vi": {
   "q": "Khi lái ô tô trên đường thông thường, nếu tốc độ tối đa không được chỉ định bằng biển báo hay vạch kẻ thì không được chạy quá 50 km/giờ.",
   "e": "Trên đường thông thường, nếu không có chỉ định bằng biển báo hay vạch kẻ thì không được chạy quá 60 km/giờ. (Trang 82)"
  },
  "ne": {
   "q": "सामान्य सडकमा गाडी चलाउँदा, चिन्ह वा रेखाले अधिकतम गति नतोकिएको अवस्थामा घण्टाको ५० किलोमिटरभन्दा बढी चलाउनु हुँदैन।",
   "e": "सामान्य सडकमा गति नतोकिएको अवस्थामा घण्टाको ६० किलोमिटरभन्दा बढी चलाउनु हुँदैन। (पृष्ठ 82)"
  },
  "en": {
   "q": "On ordinary roads, when no maximum speed is designated by signs or markings, you must not exceed 50 km/h.",
   "e": "On ordinary roads with no designated limit, the maximum is 60 km/h. (P.82)"
  },
  "idn": {
   "q": "Di jalan biasa, jika kecepatan maksimum tidak ditentukan rambu atau marka, tidak boleh melebihi 50 km/jam.",
   "e": "Di jalan biasa tanpa ketentuan, batasnya 60 km/jam. (Hal.82)"
  }
 },
 {
  "id": "5-4",
  "cat": "学科5",
  "q": "路線バス等優先通行帯（ろせんばすとうゆうせんつうこうたい）を普通自動車（ふつうじどうしゃ）で通行中（つうこうちゅう）、後方（こうほう）から路線（ろせん）バスが近づいて（ちかづいて）きたので、速度（そくど）を上げて、走行（そうこう）し続けた。",
  "a": false,
  "exp": "路線バス等優先通行帯（ろせんばすとうゆうせんつうこうたい）を通行（つうこう）しているときに後方（こうほう）から路線（ろせん）バスが近づいて（ちかづいて）きたときは、すみやかにそこから出なければなりません。（80P）",
  "img": null,
  "vi": {
   "q": "Đang đi xe con trên làn ưu tiên cho xe buýt tuyến v.v., thấy xe buýt tuyến đến gần từ phía sau nên đã tăng tốc và tiếp tục chạy.",
   "e": "Khi đang đi trên làn ưu tiên xe buýt mà xe buýt tuyến đến gần từ phía sau, phải nhanh chóng ra khỏi làn đó. (Trang 80)"
  },
  "ne": {
   "q": "रुट बस आदि प्राथमिकता लेनमा साधारण कार चलाइरहँदा पछाडिबाट रुट बस नजिक आएकोले गति बढाएर चलिरह्यो।",
   "e": "बस प्राथमिकता लेनमा चल्दा पछाडिबाट रुट बस आए तुरुन्तै त्यो लेनबाट निस्कनुपर्छ। (पृष्ठ 80)"
  },
  "en": {
   "q": "While driving a car in a route-bus priority lane, a route bus approached from behind, so I sped up and kept driving in that lane.",
   "e": "When a route bus approaches from behind in a priority lane, you must promptly move out of that lane. (P.80)"
  },
  "idn": {
   "q": "Saat mengendarai mobil di lajur prioritas bus, sebuah bus mendekat dari belakang, lalu saya menambah kecepatan dan terus melaju di lajur itu.",
   "e": "Jika bus mendekat dari belakang di lajur prioritas, harus segera keluar dari lajur itu. (Hal.80)"
  }
 },
 {
  "id": "5-5",
  "cat": "学科5",
  "q": "ブレーキを数回（すうかい）に分けて（わけて）踏む（ふむ）と、ブレーキ灯が点滅（てんめつ）し、後続車（こうぞくしゃ）への合図（あいず）となって追突事故防止（ついとつじこぼうし）に役立つ（やくだつ）。",
  "a": true,
  "exp": "ブレーキを数回（すうかい）に分けて（わけて）踏む（ふむ）と、ブレーキ灯が点滅（てんめつ）し、後続車（こうぞくしゃ）への合図（あいず）となって追突事故防止（ついとつじこぼうし）に役立ちます。（86P）",
  "img": null,
  "vi": {
   "q": "Đạp phanh chia làm nhiều lần sẽ làm đèn phanh nhấp nháy, trở thành tín hiệu cho xe phía sau và giúp phòng ngừa tai nạn đâm từ phía sau.",
   "e": "Đạp phanh chia nhiều lần làm đèn phanh nhấp nháy, là tín hiệu cho xe sau, giúp phòng ngừa tai nạn đâm từ phía sau. (Trang 86)"
  },
  "ne": {
   "q": "ब्रेक धेरै पटकमा बाँडेर थिच्दा ब्रेक बत्ती झिमझिम भई पछाडिको गाडीलाई सङ्केत हुन्छ र ठोकिने दुर्घटना रोक्न उपयोगी हुन्छ।",
   "e": "ब्रेक बाँडेर थिच्दा ब्रेक बत्ती झिमझिम भई पछाडिको गाडीलाई सङ्केत हुन्छ, दुर्घटना रोक्न उपयोगी। (पृष्ठ 86)"
  },
  "en": {
   "q": "Pressing the brake in several steps makes the brake lights flash, signaling vehicles behind and helping prevent rear-end collisions.",
   "e": "Braking in several steps flashes the brake lights, signaling vehicles behind and preventing rear-end collisions. (P.86)"
  },
  "idn": {
   "q": "Menginjak rem secara bertahap membuat lampu rem berkedip, menjadi isyarat bagi kendaraan di belakang dan membantu mencegah tabrakan dari belakang.",
   "e": "Mengerem bertahap membuat lampu rem berkedip sebagai isyarat kendaraan belakang, mencegah tabrakan. (Hal.86)"
  }
 },
 {
  "id": "5-6",
  "cat": "学科5",
  "q": "雨（あめ）にぬれた道路（どうろ）を走る場合（ばあい）や、過積載（かせきさい）の場合（ばあい）などは、制動距離（せいどうきょり）が長く（ながく）なる。",
  "a": true,
  "exp": "雨（あめ）にぬれた道路（どうろ）や砂利道（じゃりみち）を走る場合（ばあい）や、過積載（かせきさい）の場合（ばあい）などは、制動距離（せいどうきょり）が長く（ながく）なります。（84P）",
  "img": null,
  "vi": {
   "q": "Khi chạy trên đường ướt mưa hoặc khi chở quá tải, khoảng cách phanh (chế động) sẽ dài hơn.",
   "e": "Trên đường ướt mưa, đường sỏi đá, hoặc khi chở quá tải, khoảng cách phanh dài hơn. (Trang 84)"
  },
  "ne": {
   "q": "पानीले भिजेको सडकमा चल्दा वा बढी भार बोकेको अवस्थामा ब्रेक लागेर रोकिने दूरी लामो हुन्छ।",
   "e": "भिजेको सडक, गिट्टी बाटो वा बढी भारमा ब्रेकिङ दूरी लामो हुन्छ। (पृष्ठ 84)"
  },
  "en": {
   "q": "Braking distance becomes longer on wet roads or when the vehicle is overloaded.",
   "e": "Braking distance becomes longer on wet or gravel roads and when overloaded. (P.84)"
  },
  "idn": {
   "q": "Jarak pengereman menjadi lebih panjang di jalan basah atau saat kendaraan kelebihan muatan.",
   "e": "Jarak pengereman memanjang di jalan basah, jalan berkerikil, atau saat kelebihan muatan. (Hal.84)"
  }
 },
 {
  "id": "5-7",
  "cat": "学科5",
  "q": "緊急自動車（きんきゅうじどうしゃ）が近づいて（ちかづいて）きたが、交差点付近（こうさてんふきん）ではないので、そのまま走行（そうこう）した。",
  "a": false,
  "exp": "交差点（こうさてん）やその付近以外の場所（ばしょ）で緊急自動車（きんきゅうじどうしゃ）が近づいて（ちかづいて）きたときは、道路（どうろ）の左側（ひだりがわ）に寄り（より）、進路（しんろ）をゆずります。（78P）",
  "img": null,
  "vi": {
   "q": "Xe khẩn cấp đến gần nhưng vì không phải gần giao lộ nên cứ tiếp tục chạy.",
   "e": "Khi xe khẩn cấp đến gần ở nơi ngoài giao lộ và vùng lân cận, phải đi sát về bên trái đường và nhường đường. (Trang 78)"
  },
  "ne": {
   "q": "आपतकालीन गाडी नजिक आयो तर चोक (क्रसिङ) नजिक नभएकाले त्यत्तिकै चलिरह्यो।",
   "e": "चोक बाहेकको ठाउँमा आपतकालीन गाडी आए सडकको बायाँ लागेर बाटो छोड्नुपर्छ। (पृष्ठ 78)"
  },
  "en": {
   "q": "An emergency vehicle approached, but since it was not near an intersection, I kept driving as I was.",
   "e": "When an emergency vehicle approaches away from an intersection, pull over to the left and yield. (P.78)"
  },
  "idn": {
   "q": "Kendaraan darurat mendekat, tetapi karena bukan di dekat persimpangan, saya terus melaju.",
   "e": "Jika kendaraan darurat mendekat di luar persimpangan, menepilah ke kiri dan beri jalan. (Hal.78)"
  }
 },
 {
  "id": "5-8",
  "cat": "学科5",
  "q": "小型特殊自動車（こがたとくしゅじどうしゃ）・一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）・軽車両（けいしゃりょう）は、路線（ろせん）バスの専用通行帯（せんようつうこうたい）を通行（つうこう）できない。",
  "a": false,
  "exp": "最も（もっとも）左側（ひだりがわ）の通行（つうこう）帯が専用通行帯（せんようつうこうたい）のとき、小型特殊自動車（こがたとくしゅじどうしゃ）・一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）・軽車両（けいしゃりょう）は、路線（ろせん）バスの専用通行帯（せんようつうこうたい）を通行（つうこう）できます。（79P）",
  "img": null,
  "vi": {
   "q": "Xe đặc thù loại nhỏ, xe gắn máy thông thường và xe thô sơ không được đi trên làn chuyên dụng của xe buýt tuyến.",
   "e": "Khi làn ngoài cùng bên trái là làn chuyên dụng, xe đặc thù loại nhỏ, xe gắn máy thông thường và xe thô sơ được phép đi trên làn chuyên dụng của xe buýt. (Trang 79)"
  },
  "ne": {
   "q": "साना विशेष गाडी, सामान्य मोपेड र हलुका सवारीले रुट बसको विशेष लेनमा चल्न पाउँदैनन्।",
   "e": "सबैभन्दा बायाँ लेन विशेष लेन भएको बेला साना विशेष गाडी, सामान्य मोपेड र हलुका सवारी बस लेनमा चल्न पाउँछन्। (पृष्ठ 79)"
  },
  "en": {
   "q": "Small special vehicles, standard mopeds, and light vehicles cannot use a route-bus exclusive lane.",
   "e": "When the leftmost lane is the exclusive lane, small special vehicles, standard mopeds, and light vehicles MAY use it. (P.79)"
  },
  "idn": {
   "q": "Kendaraan khusus kecil, moped standar, dan kendaraan ringan tidak boleh memakai lajur khusus bus.",
   "e": "Jika lajur paling kiri adalah lajur khusus, kendaraan khusus kecil, moped standar, dan kendaraan ringan BOLEH memakainya. (Hal.79)"
  }
 },
 {
  "id": "5-9",
  "cat": "学科5",
  "q": "エンジンの始動直後（しどうちょくご）やエアコン作動時（さどうじ）はクリープ現象（げんしょう）が強く（つよく）働く（はたらく）ことがある。",
  "a": true,
  "exp": "エンジン回転数（かいてんすう）が高くなる始動直後（しどうちょくご）やエアコン作動時（さどうじ）は注意（ちゅうい）が必要（ひつよう）です。（146P）",
  "img": null,
  "vi": {
   "q": "Ngay sau khi khởi động máy hoặc khi bật điều hòa, hiện tượng xe tự trôi (creep) có thể hoạt động mạnh hơn.",
   "e": "Ngay sau khởi động hoặc khi bật điều hòa, vòng tua máy cao nên cần chú ý. (Trang 146)"
  },
  "ne": {
   "q": "इन्जिन स्टार्ट गरेको लगत्तै वा एयरकन्डिसनर चालु हुँदा क्रिप घटना (गाडी आफैँ अगाडि सर्ने) बलियो हुनसक्छ।",
   "e": "इन्जिन स्टार्ट लगत्तै वा एसी चालु हुँदा इन्जिनको घुमाइ बढ्ने भएकाले ध्यान आवश्यक छ। (पृष्ठ 146)"
  },
  "en": {
   "q": "The creep phenomenon can act more strongly right after engine start or when the air conditioner is on.",
   "e": "Right after starting or with the AC on, engine rpm is higher, so caution is needed. (P.146)"
  },
  "idn": {
   "q": "Fenomena creep (mobil merayap sendiri) bisa lebih kuat sesaat setelah mesin dinyalakan atau saat AC menyala.",
   "e": "Sesaat setelah start atau saat AC hidup, putaran mesin tinggi sehingga perlu hati-hati. (Hal.146)"
  }
 },
 {
  "id": "5-10",
  "cat": "学科5",
  "q": "AT車（ATしゃ）において、チェンジレバーをDに入れて（いれて）走行中（そうこうちゅう）、アクセルペダルを一気（いっき）にいっぱいまで踏み込む（ふみこむ）と、勢い（いきおい）よく加速（かそく）することを、クリープ現象（げんしょう）という。",
  "a": false,
  "exp": "キックダウンといいます。（147P）",
  "img": null,
  "vi": {
   "q": "Trên xe số tự động (AT), khi đang chạy với cần số ở vị trí D, nếu đạp ga mạnh xuống hết mức một lần thì xe tăng tốc mạnh — hiện tượng này gọi là creep.",
   "e": "Hiện tượng đó gọi là kick-down. (Trang 147)"
  },
  "ne": {
   "q": "AT गाडीमा गियर D मा राखेर चल्दा एक्सेलेरेटर एकैपटक पूरै थिच्दा तीव्र गतिमा बढ्ने घटनालाई क्रिप घटना भनिन्छ।",
   "e": "त्यसलाई किकडाउन भनिन्छ। (पृष्ठ 147)"
  },
  "en": {
   "q": "In an AT car, pressing the accelerator all the way down while driving in D, causing sudden strong acceleration, is called the creep phenomenon.",
   "e": "That is called kickdown. (P.147)"
  },
  "idn": {
   "q": "Pada mobil AT, menekan pedal gas penuh sekaligus saat melaju di posisi D sehingga melesat cepat disebut fenomena creep.",
   "e": "Itu disebut kickdown. (Hal.147)"
  }
 },
 {
  "id": "6-1",
  "cat": "学科6",
  "q": "この標識（ひょうしき）のある交差点（こうさてん）で右折（うせつ）しようとする一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）は、あらかじめ道路（どうろ）の中央（ちゅうおう）に寄り（より）、交差点（こうさてん）の中心（ちゅうしん）のすぐ内側（うちがわ）を徐行（じょこう）しながら通行（つうこう）しなければならない。",
  "a": false,
  "exp": "この標識（ひょうしき）のある交差点（こうさてん）で右折（うせつ）しようとする一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）は、二段階右折（にだんかいうせつ）をしなければなりません。（65P）",
  "img": "g6_q1.jpg",
  "vi": {
   "q": "Tại giao lộ có biển báo này, xe gắn máy thông thường muốn rẽ phải phải đi sát giữa đường trước, rồi đi chậm sát phía trong tâm giao lộ.",
   "e": "Tại giao lộ có biển này, xe gắn máy thông thường rẽ phải phải rẽ theo kiểu hai giai đoạn. (Trang 65)"
  },
  "ne": {
   "q": "यो चिन्ह भएको चोकमा दायाँ मोडिन चाहने सामान्य मोपेडले पहिले सडकको बीचतिर लागेर चोकको केन्द्रको भित्री भागबाट ढिलो गतिमा जानुपर्छ।",
   "e": "यो चिन्ह भएको चोकमा सामान्य मोपेडले दुई-चरण दायाँ मोड गर्नुपर्छ। (पृष्ठ 65)"
  },
  "en": {
   "q": "At an intersection with this sign, a standard moped turning right must move to the center of the road in advance and pass slowly just inside the intersection center.",
   "e": "At an intersection with this sign, standard mopeds must make a two-stage right turn. (P.65)"
  },
  "idn": {
   "q": "Di persimpangan dengan rambu ini, moped standar yang belok kanan harus mendekat ke tengah jalan lalu melintas pelan tepat di sisi dalam pusat persimpangan.",
   "e": "Di persimpangan dengan rambu ini, moped standar wajib belok kanan dua tahap. (Hal.65)"
  }
 },
 {
  "id": "6-2",
  "cat": "学科6",
  "q": "踏切内（ふみきりない）で自動車（じどうしゃ）が動かなくなったときは、踏切支障報知装置（ふみきりししょうほうちそうち）などを活用（かつよう）して、一刻（いっこく）も早く列車（れっしゃ）の運転士（うんてんし）などに知らせ（しらせ）なければならない。",
  "a": true,
  "exp": "踏切内（ふみきりない）で自動車（じどうしゃ）が動かなくなったときは、踏切支障報知装置（ふみきりししょうほうちそうち）などを活用（かつよう）して、一刻（いっこく）も早く列車（れっしゃ）の運転士（うんてんし）などに知らせ（しらせ）なければなりません。（74P）",
  "img": null,
  "vi": {
   "q": "Khi ô tô chết máy trong đường ngang (giao cắt đường sắt), phải dùng thiết bị báo sự cố đường ngang v.v. để báo cho người lái tàu biết sớm nhất có thể.",
   "e": "Khi xe chết máy trong đường ngang, dùng thiết bị báo sự cố v.v. để báo cho người lái tàu sớm nhất có thể. (Trang 74)"
  },
  "ne": {
   "q": "रेल क्रसिङभित्र गाडी चल्न नसक्ने भएमा क्रसिङ खराबी सूचना यन्त्र आदि प्रयोग गरेर सकेसम्म चाँडो रेल चालकलाई जानकारी दिनुपर्छ।",
   "e": "क्रसिङभित्र गाडी रोकिए सूचना यन्त्र आदि प्रयोग गरी चाँडो रेल चालकलाई खबर गर्नुपर्छ। (पृष्ठ 74)"
  },
  "en": {
   "q": "If your car becomes stuck inside a railroad crossing, you must use the crossing emergency button etc. to alert the train driver as quickly as possible.",
   "e": "If stuck in a crossing, use the emergency alert device etc. to notify the train driver quickly. (P.74)"
  },
  "idn": {
   "q": "Jika mobil mogok di dalam perlintasan kereta, harus menggunakan alat pemberitahu darurat dsb. untuk secepatnya memberi tahu masinis.",
   "e": "Jika mogok di perlintasan, gunakan alat pemberitahu darurat untuk cepat memberi tahu masinis. (Hal.74)"
  }
 },
 {
  "id": "6-3",
  "cat": "学科6",
  "q": "この標識（ひょうしき）のある交差点（こうさてん）で、他（ほか）の交通（こうつう）に注意（ちゅうい）して徐行（じょこう）しながら進んだ。",
  "a": false,
  "exp": "この標識（ひょうしき）があるときは、停止線（ていしせん）の直前（ちょくぜん）（停止線（ていしせん）がないときは、交差点（こうさてん）の直前（ちょくぜん））で一時停止（いちじていし）しなければなりません。（70P）",
  "img": "g6_q3.png",
  "vi": {
   "q": "Tại giao lộ có biển báo này, đã vừa chú ý giao thông khác vừa đi chậm qua.",
   "e": "Khi có biển này, phải dừng lại ngay trước vạch dừng (không có vạch thì ngay trước giao lộ). (Trang 70)"
  },
  "ne": {
   "q": "यो चिन्ह भएको चोकमा अरू यातायातमा ध्यान दिँदै ढिलो गतिमा अगाडि बढ्यो।",
   "e": "यो चिन्ह भएको ठाउँमा स्टप लाइनको ठिक अगाडि (रेखा नभए चोकको ठिक अगाडि) एकपटक रोकिनुपर्छ। (पृष्ठ 70)"
  },
  "en": {
   "q": "At an intersection with this sign, I proceeded slowly while watching other traffic.",
   "e": "With this sign, you must stop momentarily just before the stop line (or just before the intersection if there is none). (P.70)"
  },
  "idn": {
   "q": "Di persimpangan dengan rambu ini, saya melaju pelan sambil memperhatikan lalu lintas lain.",
   "e": "Dengan rambu ini, wajib berhenti sejenak tepat sebelum garis berhenti (jika tidak ada, sebelum persimpangan). (Hal.70)"
  }
 },
 {
  "id": "6-4",
  "cat": "学科6",
  "q": "警報機（けいほうき）が鳴っていなければ、踏切（ふみきり）の直前（ちょくぜん）（停止線（ていしせん）があるときは、その直前（ちょくぜん））で一時停止（いちじていし）をする必要（ひつよう）はない。",
  "a": false,
  "exp": "警報機（けいほうき）が鳴っていなくても、踏切（ふみきり）の直前（ちょくぜん）（停止線（ていしせん）があるときは、その直前（ちょくぜん））で一時停止（いちじていし）しなければなりません。（72P）",
  "img": null,
  "vi": {
   "q": "Nếu chuông cảnh báo không kêu thì không cần dừng lại ngay trước đường ngang (có vạch dừng thì ngay trước vạch).",
   "e": "Dù chuông không kêu, vẫn phải dừng lại ngay trước đường ngang (có vạch dừng thì ngay trước vạch). (Trang 72)"
  },
  "ne": {
   "q": "चेतावनी घण्टी बजेको छैन भने रेल क्रसिङको ठिक अगाडि (स्टप लाइन भए त्यसको अगाडि) रोकिनु आवश्यक छैन।",
   "e": "घण्टी नबजे पनि क्रसिङको ठिक अगाडि एकपटक रोकिनुपर्छ। (पृष्ठ 72)"
  },
  "en": {
   "q": "If the warning bell is not ringing, you do not need to stop just before a railroad crossing (or its stop line).",
   "e": "Even if the bell is not ringing, you must stop momentarily just before the crossing. (P.72)"
  },
  "idn": {
   "q": "Jika bel peringatan tidak berbunyi, tidak perlu berhenti tepat sebelum perlintasan kereta (atau garis berhentinya).",
   "e": "Meski bel tidak berbunyi, wajib berhenti sejenak tepat sebelum perlintasan. (Hal.72)"
  }
 },
 {
  "id": "6-5",
  "cat": "学科6",
  "q": "交差点（こうさてん）（環状交差点（かんじょうこうさてん）を除く（のぞく）。）で右折（うせつ）しようとするとき、反対方向（はんたいほうこう）から直進（ちょくしん）してくる車（くるま）や路面電車（ろめんでんしゃ）があるときは、自車（じしゃ）に優先権（ゆうせんけん）があるので先に（さきに）右折（うせつ）できる。",
  "a": false,
  "exp": "交差点（こうさてん）（環状交差点（かんじょうこうさてん）を除く（のぞく）。）で右折（うせつ）しようとするとき、反対方向（はんたいほうこう）から直進（ちょくしん）してくる車（くるま）や路面電車（ろめんでんしゃ）があるときは、自分（じぶん）の車（くるま）が先に（さきに）交差点（こうさてん）に入っていてもその進行（しんこう）を妨げて（さまたげて）はいけません。（66P）",
  "img": null,
  "vi": {
   "q": "Khi rẽ phải tại giao lộ (trừ giao lộ vòng xuyến), nếu có xe hay tàu điện đi thẳng từ hướng ngược lại, xe mình có quyền ưu tiên nên được rẽ trước.",
   "e": "Khi rẽ phải tại giao lộ, nếu có xe hay tàu điện đi thẳng từ hướng đối diện, dù xe mình vào giao lộ trước cũng không được cản trở họ. (Trang 66)"
  },
  "ne": {
   "q": "चोकमा (गोलचक्कर बाहेक) दायाँ मोडिँदा विपरीत दिशाबाट सीधा आउने गाडी वा ट्राम भए पनि आफ्नो गाडीलाई प्राथमिकता भएकाले पहिले मोडिन सकिन्छ।",
   "e": "दायाँ मोडिँदा विपरीत दिशाबाट सीधा आउने गाडी भए, आफू पहिले चोकमा पसे पनि उसको बाटो रोक्नु हुँदैन। (पृष्ठ 66)"
  },
  "en": {
   "q": "When turning right at an intersection (except roundabouts), if a vehicle or streetcar is coming straight from the opposite direction, you have priority and may turn first.",
   "e": "When turning right, you must not obstruct oncoming straight-through vehicles or streetcars, even if you entered the intersection first. (P.66)"
  },
  "idn": {
   "q": "Saat belok kanan di persimpangan (kecuali bundaran), jika ada kendaraan atau trem lurus dari arah berlawanan, Anda punya prioritas dan boleh belok duluan.",
   "e": "Saat belok kanan, tidak boleh menghalangi kendaraan lurus dari arah berlawanan meski Anda masuk persimpangan lebih dulu. (Hal.66)"
  }
 },
 {
  "id": "6-6",
  "cat": "学科6",
  "q": "この標識（ひょうしき）があるときでも特定小型原動機付自転車（とくていこがたげんどうきつきじてんしゃ）や軽車両（けいしゃりょう）は、道路（どうろ）の左端（ひだりはし）に寄って（よって）通行（つうこう）する。",
  "a": true,
  "exp": "この標識（ひょうしき）があるときでも特定小型原動機付自転車（とくていこがたげんどうきつきじてんしゃ）や軽車両（けいしゃりょう）は、道路（どうろ）の左端（ひだりはし）に寄って（よって）通行（つうこう）します。（67P）",
  "img": "g6_q6.png",
  "vi": {
   "q": "Dù có biển báo này, xe đạp điện loại nhỏ đặc định và xe thô sơ vẫn đi sát mép trái đường.",
   "e": "Dù có biển này, xe đạp điện loại nhỏ đặc định và xe thô sơ vẫn đi sát mép trái đường. (Trang 67)"
  },
  "ne": {
   "q": "यो चिन्ह भए पनि विशेष साना मोपेड र हलुका सवारीले सडकको बायाँ किनारा भएर चल्छन्।",
   "e": "यो चिन्ह भए पनि विशेष साना मोपेड र हलुका सवारी बायाँ किनारा भएर चल्छन्। (पृष्ठ 67)"
  },
  "en": {
   "q": "Even with this sign, special small motorized bicycles and light vehicles keep to the left edge of the road.",
   "e": "Even with this sign, special small motorized bicycles and light vehicles keep to the left edge. (P.67)"
  },
  "idn": {
   "q": "Meski ada rambu ini, sepeda motor kecil khusus dan kendaraan ringan tetap berjalan di tepi kiri jalan.",
   "e": "Meski ada rambu ini, sepeda motor kecil khusus dan kendaraan ringan tetap di tepi kiri. (Hal.67)"
  }
 },
 {
  "id": "6-7",
  "cat": "学科6",
  "q": "前（まえ）の車両（しゃりょう）が右左折（うさせつ）するため、進路（しんろ）を変えようとして、合図（あいず）をしているときは、急（きゅう）ブレーキや急（きゅう）ハンドルで避けて（さけて）、その進路（しんろ）の変更（へんこう）を妨げて（さまたげて）はならない。",
  "a": false,
  "exp": "急（きゅう）ブレーキや急（きゅう）ハンドルで避けなければならないような場合はそのまま進行（しんこう）できます。（68P）",
  "img": null,
  "vi": {
   "q": "Khi xe phía trước ra tín hiệu chuyển hướng để rẽ phải/trái, không được cản trở việc đổi hướng đó bằng cách phải phanh gấp hay bẻ lái gấp để tránh.",
   "e": "Nếu phải phanh gấp hay bẻ lái gấp mới tránh được thì có thể tiếp tục đi. (Trang 68)"
  },
  "ne": {
   "q": "अगाडिको गाडीले दायाँ/बायाँ मोडिन दिशा परिवर्तनको सङ्केत दिइरहेको बेला, आफूले अचानक ब्रेक वा ह्यान्डल चलाएर छल्नुपर्ने गरी उसको बाटो रोक्नु हुँदैन।",
   "e": "अचानक ब्रेक वा ह्यान्डलले छल्नुपर्ने अवस्था हो भने आफू अगाडि बढ्न सकिन्छ। (पृष्ठ 68)"
  },
  "en": {
   "q": "When the vehicle ahead signals to change course for a right or left turn, you must not obstruct it by braking or steering sharply to avoid it.",
   "e": "If avoiding would require sudden braking or steering, you may proceed. (P.68)"
  },
  "idn": {
   "q": "Saat kendaraan di depan memberi isyarat pindah arah untuk belok, tidak boleh menghalanginya dengan mengerem atau membanting setir mendadak.",
   "e": "Jika menghindar butuh rem atau setir mendadak, Anda boleh terus melaju. (Hal.68)"
  }
 },
 {
  "id": "6-8",
  "cat": "学科6",
  "q": "この標識（ひょうしき）は、優先道路（ゆうせんどうろ）であることを示（しめ）している。",
  "a": true,
  "exp": "優先道路（ゆうせんどうろ）の標識（ひょうしき）です。（39P）7、（69P）",
  "img": "g6_q8.png",
  "vi": {
   "q": "Biển báo này thể hiện rằng đây là đường ưu tiên.",
   "e": "Đây là biển \"Đường ưu tiên\". (Trang 39 số 7, Trang 69)"
  },
  "ne": {
   "q": "यो चिन्हले प्राथमिकता सडक हो भन्ने जनाउँछ।",
   "e": "यो 「प्राथमिकता सडक」 को चिन्ह हो। (पृष्ठ 39 नं. 7, पृष्ठ 69)"
  },
  "en": {
   "q": "This sign indicates a priority road.",
   "e": "This is the \"Priority road\" sign. (P.39 No.7, P.69)"
  },
  "idn": {
   "q": "Rambu ini menunjukkan jalan prioritas.",
   "e": "Ini rambu \"jalan prioritas\". (Hal.39 No.7, Hal.69)"
  }
 },
 {
  "id": "6-9",
  "cat": "学科6",
  "q": "自動車（じどうしゃ）で交差点（こうさてん）を右折（うせつ）するときは、交差点（こうさてん）の中心（ちゅうしん）のすぐ外側（そとがわ）を徐行（じょこう）しながら進まなければならない。",
  "a": false,
  "exp": "自動車（じどうしゃ）で交差点（こうさてん）を右折（うせつ）するときは、交差点（こうさてん）の中心（ちゅうしん）のすぐ内側（うちがわ）を徐行（じょこう）しながら進まなければなりません。（64P）",
  "img": null,
  "vi": {
   "q": "Khi ô tô rẽ phải tại giao lộ, phải đi chậm sát phía ngoài tâm giao lộ.",
   "e": "Khi ô tô rẽ phải tại giao lộ, phải đi chậm sát phía trong tâm giao lộ. (Trang 64)"
  },
  "ne": {
   "q": "गाडीले चोकमा दायाँ मोडिँदा चोकको केन्द्रको ठिक बाहिरी भागबाट ढिलो गतिमा जानुपर्छ।",
   "e": "चोकमा दायाँ मोडिँदा केन्द्रको ठिक भित्री भागबाट ढिलो गतिमा जानुपर्छ। (पृष्ठ 64)"
  },
  "en": {
   "q": "When turning right at an intersection, a car must pass slowly just OUTSIDE the intersection center.",
   "e": "Turn right by passing slowly just INSIDE the intersection center. (P.64)"
  },
  "idn": {
   "q": "Saat belok kanan di persimpangan, mobil harus melintas pelan tepat di sisi LUAR pusat persimpangan.",
   "e": "Belok kanan dengan melintas pelan tepat di sisi DALAM pusat persimpangan. (Hal.64)"
  }
 },
 {
  "id": "6-10",
  "cat": "学科6",
  "q": "環状交差点（かんじょうこうさてん）に進入（しんにゅう）するときは、交差点（こうさてん）から３０メートル手前（てまえ）の地点（ちてん）で合図（あいず）を出（だ）し、できる限り（かぎり）道路（どうろ）の左端（ひだりはし）に寄り（より）徐行（じょこう）して進入（しんにゅう）しなければならない。",
  "a": false,
  "exp": "環状交差点（かんじょうこうさてん）に入（はい）るときは、合図（あいず）を出（だ）す義務（ぎむ）はありません。（71P）",
  "img": null,
  "vi": {
   "q": "Khi đi vào giao lộ vòng xuyến, phải ra tín hiệu tại điểm cách giao lộ 30m, đi sát mép trái đường hết mức có thể và đi chậm vào.",
   "e": "Khi vào giao lộ vòng xuyến, không có nghĩa vụ ra tín hiệu. (Trang 71)"
  },
  "ne": {
   "q": "गोलचक्कर (राउन्डअबाउट) मा पस्दा ३० मिटर अगाडिबाट सङ्केत दिँदै सकेसम्म बायाँ किनारा लागेर ढिलो गतिमा पस्नुपर्छ।",
   "e": "गोलचक्करमा पस्दा सङ्केत दिने दायित्व छैन। (पृष्ठ 71)"
  },
  "en": {
   "q": "When entering a roundabout, you must signal 30 meters before, keep as far left as possible, and enter slowly.",
   "e": "There is no obligation to signal when entering a roundabout. (P.71)"
  },
  "idn": {
   "q": "Saat masuk bundaran, harus memberi isyarat 30 meter sebelumnya, merapat ke kiri sebisa mungkin, dan masuk perlahan.",
   "e": "Tidak ada kewajiban memberi isyarat saat masuk bundaran. (Hal.71)"
  }
 },
 {
  "id": "7-1",
  "cat": "学科7",
  "q": "横断歩道（おうだんほどう）を横断（おうだん）しようとしている歩行者（ほこうしゃ）を発見（はっけん）したときは、横断歩道（おうだんほどう）の手前（てまえ）（停止線（ていしせん）があるときは、その手前（てまえ））で一時停止（いちじていし）し、歩行者（ほこうしゃ）に道（みち）を譲ら（ゆずら）なければならない。",
  "a": true,
  "exp": "歩行者（ほこうしゃ）が横断歩道（おうだんほどう）を横断（おうだん）しようとしている場合（ばあい）は、横断歩道（おうだんほどう）の手前（てまえ）（停止線（ていしせん）があるときは、その手前（てまえ））で一時停止（いちじていし）し、歩行者（ほこうしゃ）に道（みち）を譲ら（ゆずら）なければなりません。（93P）",
  "img": null,
  "vi": {
   "q": "Khi phát hiện người đi bộ sắp sang đường tại vạch sang đường, phải dừng lại ngay trước vạch (có vạch dừng thì trước vạch dừng) và nhường đường cho người đi bộ.",
   "e": "Khi người đi bộ sắp sang đường tại vạch sang đường, phải dừng ngay trước đó và nhường đường cho họ. (Trang 93)"
  },
  "ne": {
   "q": "पैदल यात्री क्रसिङमा बाटो काट्न लागेको मानिस देखेमा, क्रसिङको अगाडि (स्टप लाइन भए त्यसको अगाडि) एकपटक रोकिएर बाटो छोड्नुपर्छ।",
   "e": "क्रसिङमा बाटो काट्न लागेको पैदल यात्री भए अगाडि एकपटक रोकिएर बाटो छोड्नुपर्छ। (पृष्ठ 93)"
  },
  "en": {
   "q": "When you see a pedestrian about to cross at a crosswalk, you must stop just before the crosswalk (or its stop line) and yield to the pedestrian.",
   "e": "When a pedestrian is about to cross, stop just before the crosswalk and yield. (P.93)"
  },
  "idn": {
   "q": "Saat melihat pejalan kaki hendak menyeberang di zebra cross, harus berhenti tepat sebelum zebra cross (atau garis berhentinya) dan memberi jalan.",
   "e": "Jika pejalan kaki hendak menyeberang, berhenti sebelum zebra cross dan beri jalan. (Hal.93)"
  }
 },
 {
  "id": "7-2",
  "cat": "学科7",
  "q": "安全地帯（あんぜんちたい）のそばを通る（とおる）とき、安全地帯（あんぜんちたい）に歩行者（ほこうしゃ）がいなかったので徐行（じょこう）しないで通行（つうこう）した。",
  "a": true,
  "exp": "安全地帯（あんぜんちたい）に歩行者（ほこうしゃ）がいないときは、徐行（じょこう）しないで通行（つうこう）できます。（92P）",
  "img": null,
  "vi": {
   "q": "Khi đi qua cạnh khu vực an toàn, vì không có người đi bộ trong khu vực an toàn nên đã đi qua mà không đi chậm.",
   "e": "Khi không có người đi bộ trong khu vực an toàn, có thể đi qua mà không cần đi chậm. (Trang 92)"
  },
  "ne": {
   "q": "सुरक्षा क्षेत्रको छेउबाट गुज्रँदा, त्यहाँ पैदल यात्री नभएकाले ढिलो नगरी गुज्रियो।",
   "e": "सुरक्षा क्षेत्रमा पैदल यात्री छैन भने ढिलो नगरी गुज्रन सकिन्छ। (पृष्ठ 92)"
  },
  "en": {
   "q": "Passing a safety zone with no pedestrians in it, I did not slow down.",
   "e": "When there are no pedestrians in the safety zone, you may pass without slowing down. (P.92)"
  },
  "idn": {
   "q": "Saat melewati sisi zona aman yang tidak ada pejalan kakinya, saya tidak memperlambat laju.",
   "e": "Jika tidak ada pejalan kaki di zona aman, boleh lewat tanpa memperlambat. (Hal.92)"
  }
 },
 {
  "id": "7-3",
  "cat": "学科7",
  "q": "横断歩道（おうだんほどう）のない場所（ばしょ）で、歩行者（ほこうしゃ）が横断（おうだん）しているときは、車（くるま）の通行（つうこう）を優先（ゆうせん）する。",
  "a": false,
  "exp": "歩行者（ほこうしゃ）が横断（おうだん）しているときは、歩行者（ほこうしゃ）の通行（つうこう）を妨げて（さまたげて）はいけません。（94P）",
  "img": null,
  "vi": {
   "q": "Ở nơi không có vạch sang đường, khi người đi bộ đang sang đường thì ưu tiên cho xe đi trước.",
   "e": "Khi người đi bộ đang sang đường, không được cản trở việc đi lại của họ. (Trang 94)"
  },
  "ne": {
   "q": "क्रसिङ नभएको ठाउँमा पैदल यात्रीले बाटो काटिरहेको बेला गाडीलाई प्राथमिकता दिइन्छ।",
   "e": "पैदल यात्रीले बाटो काटिरहेको बेला उसको हिँडाइ रोक्नु हुँदैन। (पृष्ठ 94)"
  },
  "en": {
   "q": "Where there is no crosswalk, vehicles have priority over pedestrians who are crossing.",
   "e": "When pedestrians are crossing, you must not obstruct their passage. (P.94)"
  },
  "idn": {
   "q": "Di tempat tanpa zebra cross, kendaraan diprioritaskan atas pejalan kaki yang sedang menyeberang.",
   "e": "Saat pejalan kaki menyeberang, tidak boleh menghalangi mereka. (Hal.94)"
  }
 },
 {
  "id": "7-4",
  "cat": "学科7",
  "q": "こどもや高齢者（こうれいしゃ）には、注意（ちゅうい）しなくても、徐行（じょこう）していれば危険（きけん）はない。",
  "a": false,
  "exp": "こどもや高齢者（こうれいしゃ）には、さまざまな特性（とくせい）や傾向（けいこう）があるので注意（ちゅうい）しましょう。（96P）",
  "img": null,
  "vi": {
   "q": "Đối với trẻ em và người cao tuổi, không cần chú ý đặc biệt, chỉ cần đi chậm là không nguy hiểm.",
   "e": "Trẻ em và người cao tuổi có nhiều đặc tính và xu hướng khác nhau, nên phải chú ý. (Trang 96)"
  },
  "ne": {
   "q": "बालबालिका र वृद्धवृद्धाप्रति विशेष ध्यान नदिए पनि ढिलो गतिमा चले खतरा हुँदैन।",
   "e": "बालबालिका र वृद्धवृद्धाका विभिन्न विशेषता हुने भएकाले ध्यान दिनुपर्छ। (पृष्ठ 96)"
  },
  "en": {
   "q": "With children and elderly people, there is no danger as long as you drive slowly, without paying special attention.",
   "e": "Children and the elderly have various characteristics and tendencies, so pay attention. (P.96)"
  },
  "idn": {
   "q": "Terhadap anak-anak dan lansia, tidak berbahaya asalkan melaju pelan, tanpa perhatian khusus.",
   "e": "Anak-anak dan lansia punya berbagai karakteristik, jadi perhatikanlah. (Hal.96)"
  }
 },
 {
  "id": "7-5",
  "cat": "学科7",
  "q": "身体障害者用（しんたいしょうがいしゃよう）の車（くるま）で通行（つうこう）している人（ひと）、白（しろ）や黄（き）のつえを持った人（ひと）が歩いているとき、車（くるま）は徐行（じょこう）さえすればよく、これらの人（ひと）が安全（あんぜん）に通行（つうこう）できるようにしなくてもよい。",
  "a": false,
  "exp": "身体障害者用（しんたいしょうがいしゃよう）の車（くるま）で通行（つうこう）している人（ひと）、白（しろ）や黄（き）のつえを持った人（ひと）が歩いているとき、車（くるま）は一時停止（いちじていし）か徐行（じょこう）して、これらの人（ひと）が安全（あんぜん）に通行（つうこう）できるようにしなければなりません。（96P）",
  "img": null,
  "vi": {
   "q": "Khi có người đi bằng xe dành cho người khuyết tật hoặc người cầm gậy trắng/vàng đang đi bộ, xe chỉ cần đi chậm là đủ, không cần bảo đảm cho họ đi lại an toàn.",
   "e": "Trường hợp đó, xe phải dừng lại tạm thời hoặc đi chậm để những người này có thể đi lại an toàn. (Trang 96)"
  },
  "ne": {
   "q": "अपाङ्गता भएका व्यक्तिको गाडीमा हिँड्ने वा सेतो/पहेँलो लट्ठी बोकेका व्यक्ति भएको बेला, गाडी ढिलो मात्र चले पुग्छ; उनीहरूको सुरक्षित आवागमन सुनिश्चित गर्नु पर्दैन।",
   "e": "त्यस्तो बेला एकपटक रोकिने वा ढिलो गति गरेर उनीहरू सुरक्षित हिँड्न सक्ने बनाउनुपर्छ। (पृष्ठ 96)"
  },
  "en": {
   "q": "When a person in a wheelchair for the disabled or a person with a white or yellow cane is walking, the vehicle only needs to slow down and need not ensure their safe passage.",
   "e": "You must stop momentarily or slow down so that these people can pass safely. (P.96)"
  },
  "idn": {
   "q": "Saat ada pengguna kursi roda atau orang bertongkat putih/kuning, kendaraan cukup melambat dan tidak perlu memastikan mereka lewat dengan aman.",
   "e": "Harus berhenti sejenak atau melambat agar mereka bisa lewat dengan aman. (Hal.96)"
  }
 },
 {
  "id": "7-6",
  "cat": "学科7",
  "q": "横断歩道（おうだんほどう）に近づいた（ちかづいた）とき、横断（おうだん）する歩行者（ほこうしゃ）がいないことがあきらかな場合（ばあい）には、そのまま進行（しんこう）してよい。",
  "a": true,
  "exp": "横断歩道（おうだんほどう）に近づいた（ちかづいた）とき、横断（おうだん）する歩行者（ほこうしゃ）がいないことがあきらかな場合（ばあい）には、そのまま進む（すすむ）ことができます。（93P）",
  "img": null,
  "vi": {
   "q": "Khi đến gần vạch sang đường, nếu rõ ràng không có người đi bộ sang đường thì có thể đi tiếp như bình thường.",
   "e": "Nếu rõ ràng không có người sang đường thì có thể đi tiếp. (Trang 93)"
  },
  "ne": {
   "q": "पैदल यात्री क्रसिङ नजिक पुग्दा, बाटो काट्ने मानिस छैन भन्ने स्पष्ट भए त्यत्तिकै अगाडि बढ्न सकिन्छ।",
   "e": "बाटो काट्ने मानिस छैन भन्ने स्पष्ट भए अगाडि बढ्न सकिन्छ। (पृष्ठ 93)"
  },
  "en": {
   "q": "Approaching a crosswalk where it is clear there are no pedestrians crossing, you may proceed as you are.",
   "e": "If it is clear no one is crossing, you may proceed. (P.93)"
  },
  "idn": {
   "q": "Saat mendekati zebra cross dan jelas tidak ada penyeberang, boleh terus melaju.",
   "e": "Jika jelas tidak ada penyeberang, boleh terus melaju. (Hal.93)"
  }
 },
 {
  "id": "7-7",
  "cat": "学科7",
  "q": "歩行者（ほこうしゃ）に泥（どろ）や水（みず）をはねても、徐行（じょこう）していれば、運転者（うんてんしゃ）に責任（せきにん）はない。",
  "a": false,
  "exp": "徐行（じょこう）したり、よけたり、場合（ばあい）によっては一時停止（いちじていし）したりして、他人（たにん）に迷惑（めいわく）をかけないようにしなければなりません。（92P）",
  "img": null,
  "vi": {
   "q": "Dù làm bắn bùn hay nước lên người đi bộ, nếu đang đi chậm thì người lái không có trách nhiệm.",
   "e": "Phải đi chậm, tránh, hoặc tùy trường hợp dừng lại tạm thời để không gây phiền hà cho người khác. (Trang 92)"
  },
  "ne": {
   "q": "पैदल यात्रीमाथि हिलो वा पानी छिट्किए पनि ढिलो गतिमा चलेको भए चालकको जिम्मेवारी हुँदैन।",
   "e": "ढिलो चल्ने, छल्ने वा आवश्यक परे रोकिएर अरूलाई दुःख नदिने गर्नुपर्छ। (पृष्ठ 92)"
  },
  "en": {
   "q": "Even if you splash mud or water on pedestrians, the driver bears no responsibility as long as the vehicle was moving slowly.",
   "e": "Slow down, steer clear, or stop if necessary so as not to trouble others. (P.92)"
  },
  "idn": {
   "q": "Meski memercikkan lumpur atau air ke pejalan kaki, pengemudi tidak bertanggung jawab asalkan melaju pelan.",
   "e": "Melambat, menghindar, atau berhenti bila perlu agar tidak merugikan orang lain. (Hal.92)"
  }
 },
 {
  "id": "7-8",
  "cat": "学科7",
  "q": "児童（じどう）・幼児（ようじ）が乗り降り（のりおり）のため停止（ていし）している通学通園バス（つうがくつうえんばす）のそばを通る（とおる）ときは、徐行（じょこう）して安全（あんぜん）を確かめる（たしかめる）。",
  "a": true,
  "exp": "児童（じどう）・幼児（ようじ）が乗り降り（のりおり）のため停止（ていし）している通学通園バス（つうがくつうえんばす）のそばを通る（とおる）ときは、徐行（じょこう）して安全（あんぜん）を確かめなければ（たしかめなければ）なりません。（97P）",
  "img": null,
  "vi": {
   "q": "Khi đi qua cạnh xe buýt trường học/mẫu giáo đang dừng để trẻ em lên xuống, phải đi chậm và xác nhận an toàn.",
   "e": "Khi đi qua cạnh xe buýt trường học đang dừng cho trẻ lên xuống, phải đi chậm và xác nhận an toàn. (Trang 97)"
  },
  "ne": {
   "q": "बालबालिका चढ्न-ओर्लनका लागि रोकिएको स्कुल बसको छेउबाट गुज्रँदा ढिलो गतिमा चलेर सुरक्षा जाँच गर्नुपर्छ।",
   "e": "रोकिएको स्कुल बसको छेउबाट गुज्रँदा ढिलो गतिमा सुरक्षा जाँच गर्नुपर्छ। (पृष्ठ 97)"
  },
  "en": {
   "q": "When passing a school bus stopped for children to get on and off, slow down and check safety.",
   "e": "When passing a stopped school bus, slow down and check safety. (P.97)"
  },
  "idn": {
   "q": "Saat melewati bus sekolah yang berhenti untuk naik-turun anak, melambatlah dan pastikan keamanan.",
   "e": "Saat melewati bus sekolah yang berhenti, melambat dan pastikan keamanan. (Hal.97)"
  }
 },
 {
  "id": "7-9",
  "cat": "学科7",
  "q": "初心運転者標識（しょしんうんてんしゃひょうしき）や高齢運転者標識（こうれいうんてんしゃひょうしき）をつけている自動車（じどうしゃ）を追い越し（おいこし）てはならない。",
  "a": false,
  "exp": "幅寄せ（はばよせ）をしたり、割り込んだり（わりこんだり）してはいけませんが、追い越し（おいこし）は禁止（きんし）されていません。（98P）",
  "img": null,
  "vi": {
   "q": "Không được vượt xe đang gắn biển người mới lái hoặc biển người lái cao tuổi.",
   "e": "Không được ép sát hay chen ngang các xe đó, nhưng việc vượt không bị cấm. (Trang 98)"
  },
  "ne": {
   "q": "नयाँ चालक चिन्ह वा वृद्ध चालक चिन्ह लगाएको गाडीलाई उछिन्नु हुँदैन।",
   "e": "ती गाडीलाई साइडमा च्याप्ने वा बीचमा छिर्ने गर्नु हुँदैन, तर उछिन्न निषेध छैन। (पृष्ठ 98)"
  },
  "en": {
   "q": "You must not overtake a vehicle displaying a beginner driver mark or an elderly driver mark.",
   "e": "You must not squeeze in beside or cut in front of such vehicles, but overtaking is not prohibited. (P.98)"
  },
  "idn": {
   "q": "Tidak boleh menyalip kendaraan yang memasang tanda pengemudi pemula atau pengemudi lansia.",
   "e": "Dilarang memepet atau memotong kendaraan itu, tetapi menyalip tidak dilarang. (Hal.98)"
  }
 },
 {
  "id": "7-10",
  "cat": "学科7",
  "q": "人（ひと）の乗り降り（のりおり）のため路面電車（ろめんでんしゃ）が停留所（ていりゅうじょ）で停止（ていし）しているときは、安全地帯（あんぜんちたい）の有無（うむ）にかかわらず徐行（じょこう）すれば通行（つうこう）できる。",
  "a": false,
  "exp": "安全地帯（あんぜんちたい）のない場合（ばあい）は、乗り降り（のりおり）する人（ひと）や道路（どうろ）を横断（おうだん）する人（ひと）がいなくなるまで、路面電車（ろめんでんしゃ）の後方（こうほう）で停止（ていし）して待た（また）なければなりません。（92P）",
  "img": null,
  "vi": {
   "q": "Khi tàu điện mặt đường đang dừng ở trạm để khách lên xuống, bất kể có khu vực an toàn hay không, chỉ cần đi chậm là có thể đi qua.",
   "e": "Khi không có khu vực an toàn, phải dừng phía sau tàu điện và chờ đến khi không còn người lên xuống hay sang đường. (Trang 92)"
  },
  "ne": {
   "q": "यात्रु चढ्न-ओर्लन ट्राम बिसौनीमा रोकिएको बेला, सुरक्षा क्षेत्र भए/नभए जे भए पनि ढिलो गतिमा गुज्रन सकिन्छ।",
   "e": "सुरक्षा क्षेत्र नभएको बेला यात्रु र बाटो काट्ने मानिस नसकुन्जेल ट्रामको पछाडि रोकिएर पर्खनुपर्छ। (पृष्ठ 92)"
  },
  "en": {
   "q": "When a streetcar is stopped at a stop for passengers, you may pass at slow speed regardless of whether there is a safety zone.",
   "e": "With no safety zone, you must stop behind the streetcar and wait until no one is boarding, alighting, or crossing. (P.92)"
  },
  "idn": {
   "q": "Saat trem berhenti di halte untuk naik-turun penumpang, boleh lewat pelan terlepas ada tidaknya zona aman.",
   "e": "Tanpa zona aman, harus berhenti di belakang trem sampai tak ada lagi yang naik-turun atau menyeberang. (Hal.92)"
  }
 },
 {
  "id": "8-1",
  "cat": "学科8",
  "q": "自動車（じどうしゃ）に乗って（のって）からドアを閉め（しめ）るときは、半ドア（はんどあ）を防止（ぼうし）するため、途中（とちゅう）で止め（とめ）ないで一気（いっき）に閉め（しめ）る。",
  "a": false,
  "exp": "乗って（のって）からドアを閉め（しめ）るときは、少し手前（てまえ）で一度（いちど）止め、力を入れて閉め（しめ）ます。（102P）",
  "img": null,
  "vi": {
   "q": "Sau khi lên ô tô, khi đóng cửa thì để tránh cửa đóng hờ (nửa chừng), nên đóng mạnh một lần không dừng giữa chừng.",
   "e": "Khi đóng cửa, dừng lại một lần ở gần vị trí đóng rồi dùng lực đóng chặt. (Trang 102)"
  },
  "ne": {
   "q": "गाडीमा चढेपछि ढोका बन्द गर्दा आधा बन्द नहोस् भनेर बीचमा नरोकी एकैपटक जोडले बन्द गर्ने।",
   "e": "ढोका बन्द गर्दा अलिकति अगाडि एकपटक रोकेर बल दिएर बन्द गर्नुहोस्। (पृष्ठ 102)"
  },
  "en": {
   "q": "After getting in the car, close the door in one strong motion without stopping midway, to prevent it being half-shut.",
   "e": "When closing the door, stop once just before it closes, then shut it firmly. (P.102)"
  },
  "idn": {
   "q": "Setelah naik mobil, tutup pintu sekali gerakan dengan kuat tanpa berhenti di tengah agar tidak setengah tertutup.",
   "e": "Saat menutup pintu, hentikan sekali sesaat sebelum tertutup lalu tutup dengan kuat. (Hal.102)"
  }
 },
 {
  "id": "8-2",
  "cat": "学科8",
  "q": "徐行（じょこう）や停止（ていし）をするときの合図（あいず）は、徐行（じょこう）や停止（ていし）しようとするときに行えばよい。",
  "a": true,
  "exp": "徐行（じょこう）するときの合図（あいず）は、徐行（じょこう）しようとするときです。（104P）",
  "img": null,
  "vi": {
   "q": "Tín hiệu khi đi chậm hoặc dừng lại chỉ cần thực hiện vào lúc chuẩn bị đi chậm hoặc dừng là được.",
   "e": "Tín hiệu đi chậm được thực hiện khi chuẩn bị đi chậm. (Trang 104)"
  },
  "ne": {
   "q": "ढिलो गर्ने वा रोकिने बेलाको सङ्केत, ढिलो गर्न वा रोकिन लाग्दा दिए पुग्छ।",
   "e": "ढिलो गर्ने सङ्केत ढिलो गर्न लाग्दा दिने हो। (पृष्ठ 104)"
  },
  "en": {
   "q": "The signal for slowing down or stopping may be given at the moment you are about to slow down or stop.",
   "e": "The signal for slowing down is given when you are about to slow down. (P.104)"
  },
  "idn": {
   "q": "Isyarat untuk melambat atau berhenti cukup diberikan pada saat hendak melambat atau berhenti.",
   "e": "Isyarat melambat diberikan saat hendak melambat. (Hal.104)"
  }
 },
 {
  "id": "8-3",
  "cat": "学科8",
  "q": "進路変更（しんろへんこう）をするときは、十分（じゅうぶん）に安全確認（あんぜんかくにん）し、合図（あいず）を出し、もう一度（いちど）安全（あんぜん）を確かめる（たしかめる）必要（ひつよう）がある。",
  "a": true,
  "exp": "進路変更（しんろへんこう）をするときは、十分（じゅうぶん）に安全確認（あんぜんかくにん）し、合図（あいず）を出し、もう一度（いちど）安全（あんぜん）を確かめる（たしかめる）必要（ひつよう）があります。（102P）（109P）",
  "img": null,
  "vi": {
   "q": "Khi thay đổi hướng đi, cần xác nhận an toàn đầy đủ, ra tín hiệu, rồi xác nhận an toàn một lần nữa.",
   "e": "Khi đổi hướng đi, cần xác nhận an toàn đầy đủ, ra tín hiệu, rồi xác nhận an toàn một lần nữa. (Trang 102, 109)"
  },
  "ne": {
   "q": "लेन/दिशा परिवर्तन गर्दा राम्ररी सुरक्षा जाँच गरी सङ्केत दिएर फेरि एकपटक सुरक्षा जाँच गर्नु आवश्यक छ।",
   "e": "दिशा परिवर्तनमा सुरक्षा जाँच, सङ्केत, र फेरि सुरक्षा जाँच आवश्यक छ। (पृष्ठ 102, 109)"
  },
  "en": {
   "q": "When changing course, you need to check safety thoroughly, give a signal, and check safety once more.",
   "e": "When changing course: check safety thoroughly, signal, then check safety again. (P.102, 109)"
  },
  "idn": {
   "q": "Saat pindah arah/jalur, perlu memastikan keamanan, memberi isyarat, lalu memastikan keamanan sekali lagi.",
   "e": "Saat pindah arah: pastikan keamanan, beri isyarat, lalu pastikan lagi. (Hal.102, 109)"
  }
 },
 {
  "id": "8-4",
  "cat": "学科8",
  "q": "右折（うせつ）するとき（環状交差点（かんじょうこうさてん）でこの行為（こうい）をしようとするときを除く（のぞく）。）の手（て）による合図方法（あいずほうほう）は、右腕（みぎうで）を車（くるま）の右側（みぎがわ）の外に（そとに）出して（だして）ひじを垂直（すいちょく）に上に（うえに）曲げる（まげる）か、左腕（ひだりうで）を車両（しゃりょう）の左側（ひだりがわ）の外に出して水平（すいへい）にのばす。",
  "a": false,
  "exp": "右折（うせつ）するとき（環状交差点（かんじょうこうさてん）でこの行為（こうい）をしようとするときを除く（のぞく）。）の手（て）による合図方法（あいずほうほう）は、右腕（みぎうで）を車（くるま）の右側（みぎがわ）の外に（そとに）出して（だして）水平（すいへい）にのばすか、左腕（ひだりうで）を車（くるま）の左側（ひだりがわ）の外に出してひじを垂直（すいちょく）に上にまげます。（104P）",
  "img": null,
  "vi": {
   "q": "Cách ra hiệu bằng tay khi rẽ phải (trừ tại vòng xuyến) là: đưa tay phải ra ngoài bên phải xe và gập khuỷu tay vuông góc lên trên, hoặc đưa tay trái ra ngoài bên trái xe và duỗi ngang.",
   "e": "Khi rẽ phải: đưa tay phải ra ngoài bên phải xe duỗi ngang, hoặc đưa tay trái ra ngoài bên trái xe và gập khuỷu tay vuông góc lên trên. (Trang 104)"
  },
  "ne": {
   "q": "दायाँ मोडिँदा (गोलचक्कर बाहेक) हातको सङ्केत: दायाँ हात गाडीको दायाँपट्टि बाहिर निकालेर कुहिनो ठाडो पारेर माथि झुकाउने, वा बायाँ हात बायाँपट्टि बाहिर निकालेर तेर्सो पसार्ने।",
   "e": "दायाँ मोड्दा: दायाँ हात बाहिर तेर्सो पसार्ने, वा बायाँ हात बाहिर निकालेर कुहिनो ठाडो पारी माथि झुकाउने। (पृष्ठ 104)"
  },
  "en": {
   "q": "The hand signal for a right turn (except at roundabouts) is: extend the right arm out the right side and bend the elbow vertically upward, or extend the left arm out the left side horizontally.",
   "e": "For a right turn: extend the right arm horizontally, or extend the left arm and bend the elbow vertically upward. (P.104)"
  },
  "idn": {
   "q": "Isyarat tangan belok kanan (kecuali di bundaran): julurkan lengan kanan ke luar sisi kanan dengan siku ditekuk tegak ke atas, atau julurkan lengan kiri ke luar sisi kiri secara mendatar.",
   "e": "Belok kanan: lengan kanan dijulurkan mendatar, atau lengan kiri dijulurkan dengan siku ditekuk tegak ke atas. (Hal.104)"
  }
 },
 {
  "id": "8-5",
  "cat": "学科8",
  "q": "自動車（じどうしゃ）の乗り降り（のりおり）をするときは、周囲（しゅうい）の状況（じょうきょう）、特に（とくに）後方（こうほう）からの車両（しゃりょう）の有無（うむ）を確かめ（たしかめ）、交通量（こうつうりょう）の多い（おおい）ところでは左側（ひだりがわ）のドアから乗り降り（のりおり）する。",
  "a": true,
  "exp": "自動車（じどうしゃ）の乗り降り（のりおり）をするときは、周囲（しゅうい）の状況（じょうきょう）、特に（とくに）後方（こうほう）からの車両（しゃりょう）の有無（うむ）を確かめ（たしかめ）、交通量（こうつうりょう）の多い（おおい）ところでは左側（ひだりがわ）のドアから乗り降り（のりおり）しましょう。（102P）",
  "img": null,
  "vi": {
   "q": "Khi lên xuống ô tô, phải xác nhận tình hình xung quanh, đặc biệt là xe từ phía sau; ở nơi giao thông đông đúc thì lên xuống bằng cửa bên trái.",
   "e": "Khi lên xuống xe, xác nhận xung quanh, đặc biệt xe phía sau; nơi đông xe thì lên xuống bằng cửa bên trái. (Trang 102)"
  },
  "ne": {
   "q": "गाडीमा चढ्दा-ओर्लँदा वरपरको अवस्था, विशेष गरी पछाडिबाट आउने गाडी जाँच गर्ने; धेरै यातायात भएको ठाउँमा बायाँ ढोकाबाट चढ्ने-ओर्लने।",
   "e": "चढ्दा-ओर्लँदा पछाडिका गाडी जाँच गर्ने; भीडभाडमा बायाँ ढोका प्रयोग गर्ने। (पृष्ठ 102)"
  },
  "en": {
   "q": "When getting in and out of a car, check the surroundings, especially vehicles from behind, and in heavy traffic use the left-side doors.",
   "e": "Check surroundings, especially vehicles behind; in heavy traffic, get in and out through the left-side doors. (P.102)"
  },
  "idn": {
   "q": "Saat naik-turun mobil, periksa keadaan sekitar terutama kendaraan dari belakang, dan di tempat ramai gunakan pintu sisi kiri.",
   "e": "Periksa sekitar terutama kendaraan belakang; di tempat ramai gunakan pintu kiri. (Hal.102)"
  }
 },
 {
  "id": "8-6",
  "cat": "学科8",
  "q": "同一方向（どういつほうこう）に進行（しんこう）しながら進路（しんろ）を左方（さほう）に変える（かえる）ときの合図（あいず）の時期（じき）は、進路（しんろ）を変えようとするときの約（やく）30メートル前（まえ）である。",
  "a": false,
  "exp": "同一方向（どういつほうこう）に進行（しんこう）しながら進路（しんろ）を左方（さほう）に変える（かえる）ときの合図（あいず）の時期（じき）は、進路（しんろ）を変えようとするときの約（やく）3秒前（びょうまえ）です。（104P）",
  "img": null,
  "vi": {
   "q": "Thời điểm ra tín hiệu khi vừa đi cùng chiều vừa chuyển hướng sang trái là khoảng 30 mét trước khi đổi hướng.",
   "e": "Thời điểm ra tín hiệu khi chuyển hướng là khoảng 3 giây trước khi đổi hướng. (Trang 104)"
  },
  "ne": {
   "q": "एउटै दिशामा चल्दै बायाँतिर लेन परिवर्तन गर्ने सङ्केतको समय, परिवर्तन गर्नुभन्दा करिब ३० मिटर अगाडि हो।",
   "e": "लेन परिवर्तनको सङ्केत परिवर्तन गर्नुभन्दा करिब ३ सेकेन्ड अगाडि दिने हो। (पृष्ठ 104)"
  },
  "en": {
   "q": "The timing of the signal for moving left while traveling in the same direction is about 30 meters before changing course.",
   "e": "The signal for changing course is given about 3 SECONDS before. (P.104)"
  },
  "idn": {
   "q": "Waktu isyarat untuk berpindah ke kiri sambil melaju searah adalah sekitar 30 meter sebelum pindah.",
   "e": "Isyarat pindah jalur diberikan sekitar 3 DETIK sebelumnya. (Hal.104)"
  }
 },
 {
  "id": "8-7",
  "cat": "学科8",
  "q": "夕日（ゆうひ）の反射（はんしゃ）などによって方向指示器（ほうこうしじき）が見え（みえ）にくい場合（ばあい）でも、方向指示器（ほうこうしじき）のみで合図（あいず）すべきである。",
  "a": false,
  "exp": "夕日（ゆうひ）の反射（はんしゃ）などによって方向指示器（ほうこうしじき）が見え（みえ）にくい場合（ばあい）は、方向指示器（ほうこうしじき）の操作（そうさ）とあわせて、手（て）による合図（あいず）を行う（おこなう）ようにしましょう。（105P）",
  "img": null,
  "vi": {
   "q": "Ngay cả khi đèn xi-nhan khó nhìn thấy do phản chiếu ánh nắng chiều, vẫn chỉ nên ra hiệu bằng đèn xi-nhan.",
   "e": "Khi đèn xi-nhan khó thấy do nắng chiều phản chiếu, nên kết hợp thao tác xi-nhan với tín hiệu bằng tay. (Trang 105)"
  },
  "ne": {
   "q": "साँझको घामको प्रतिबिम्बले इन्डिकेटर देख्न गाह्रो भए पनि इन्डिकेटरले मात्र सङ्केत दिनुपर्छ।",
   "e": "इन्डिकेटर देख्न गाह्रो हुँदा इन्डिकेटरसँगै हातको सङ्केत पनि दिनुपर्छ। (पृष्ठ 105)"
  },
  "en": {
   "q": "Even when turn signals are hard to see due to reflected evening sun, you should signal only with the turn signals.",
   "e": "When turn signals are hard to see, combine them with hand signals. (P.105)"
  },
  "idn": {
   "q": "Meski lampu sein sulit terlihat karena pantulan matahari sore, sebaiknya tetap memberi isyarat hanya dengan lampu sein.",
   "e": "Jika sein sulit terlihat, kombinasikan dengan isyarat tangan. (Hal.105)"
  }
 },
 {
  "id": "8-8",
  "cat": "学科8",
  "q": "この標識（ひょうしき）がある区間内（くかんない）では、警音器（けいおんき）を鳴らし続け（ならしつづけ）なければならない。",
  "a": false,
  "exp": "この標識（ひょうしき）がある区間内（くかんない）で、見通し（みとおし）の悪い（わるい）交差点（こうさてん）や道路（どうろ）のまがり角（まがりかど）、上り坂（のぼりざか）の頂上（ちょうじょう）を通る（とおる）ときは警音器（けいおんき）を鳴ら（なら）さなければなりません。（106P）",
  "img": "g8_q8.png",
  "vi": {
   "q": "Trong đoạn đường có biển báo này, phải bấm còi liên tục.",
   "e": "Trong đoạn có biển này, phải bấm còi khi đi qua giao lộ khuất tầm nhìn, khúc cua, hoặc đỉnh dốc lên. (Trang 106)"
  },
  "ne": {
   "q": "यो चिन्ह भएको खण्डभित्र लगातार हर्न बजाइरहनुपर्छ।",
   "e": "यो खण्डभित्र नदेखिने चोक, घुम्ती वा उकालोको टुप्पोमा मात्र हर्न बजाउनुपर्छ। (पृष्ठ 106)"
  },
  "en": {
   "q": "Within a section marked with this sign, you must keep sounding the horn continuously.",
   "e": "Within this section, sound the horn when passing blind intersections, curves, or hilltops. (P.106)"
  },
  "idn": {
   "q": "Di dalam ruas yang ada rambu ini, klakson harus terus dibunyikan.",
   "e": "Di ruas ini, bunyikan klakson di persimpangan tak terlihat, tikungan, atau puncak tanjakan. (Hal.106)"
  }
 },
 {
  "id": "8-9",
  "cat": "学科8",
  "q": "車（くるま）は、標識（ひょうしき）により横断（おうだん）が禁止（きんし）されている場所（ばしょ）では、転回（てんかい）も禁止（きんし）されている。",
  "a": false,
  "exp": "車両横断禁止（しゃりょうおうだんきんし）では横断（おうだん）が禁止（きんし）され、転回禁止（てんかいきんし）では転回（てんかい）が禁止（きんし）されています。（110P）",
  "img": null,
  "vi": {
   "q": "Ở nơi bị cấm băng ngang đường bằng biển báo, việc quay đầu xe cũng bị cấm.",
   "e": "Biển \"Cấm băng ngang\" chỉ cấm băng ngang; biển \"Cấm quay đầu\" mới cấm quay đầu. (Trang 110)"
  },
  "ne": {
   "q": "चिन्हले बाटो काट्न निषेध गरिएको ठाउँमा यु-टर्न पनि निषेध हुन्छ।",
   "e": "「काट्न निषेध」 ले काट्न मात्र र 「यु-टर्न निषेध」 ले यु-टर्न निषेध गर्छ। (पृष्ठ 110)"
  },
  "en": {
   "q": "Where crossing is prohibited by a sign, U-turns are also prohibited.",
   "e": "\"No crossing\" prohibits crossing; \"No U-turn\" prohibits U-turns. (P.110)"
  },
  "idn": {
   "q": "Di tempat yang dilarang memotong jalan oleh rambu, putar balik juga dilarang.",
   "e": "\"Dilarang memotong\" melarang memotong; \"dilarang putar balik\" melarang putar balik. (Hal.110)"
  }
 },
 {
  "id": "8-10",
  "cat": "学科8",
  "q": "前（まえ）の車（くるま）が交差点（こうさてん）や踏切（ふみきり）で停止（ていし）や徐行（じょこう）をしているときは、その車（くるま）の前（まえ）に割り込んだり（わりこんだり）、横切ったり（よこぎったり）してはいけない。",
  "a": true,
  "exp": "前（まえ）の車（くるま）が交差点（こうさてん）や踏切（ふみきり）で停止（ていし）や徐行（じょこう）をしているときは、その車（くるま）の前（まえ）に割り込んだり（わりこんだり）、横切ったり（よこぎったり）してはいけません。（111P）",
  "img": null,
  "vi": {
   "q": "Khi xe phía trước đang dừng hay đi chậm tại giao lộ hoặc đường ngang, không được chen vào phía trước xe đó hoặc cắt ngang.",
   "e": "Khi xe trước dừng/đi chậm tại giao lộ hay đường ngang, không được chen vào trước hoặc cắt ngang. (Trang 111)"
  },
  "ne": {
   "q": "अगाडिको गाडी चोक वा रेल क्रसिङमा रोकिएको वा ढिलो चलिरहेको बेला, त्यसको अगाडि छिर्ने वा काट्ने गर्नु हुँदैन।",
   "e": "चोक वा क्रसिङमा रोकिएको गाडीको अगाडि छिर्ने वा काट्ने गर्नु हुँदैन। (पृष्ठ 111)"
  },
  "en": {
   "q": "When the vehicle ahead is stopped or moving slowly at an intersection or railroad crossing, you must not cut in front of it or cross in front of it.",
   "e": "Do not cut in front of or cross in front of a vehicle stopped or slowing at an intersection or crossing. (P.111)"
  },
  "idn": {
   "q": "Saat kendaraan di depan berhenti atau melambat di persimpangan atau perlintasan kereta, tidak boleh menyerobot atau memotong di depannya.",
   "e": "Jangan menyerobot atau memotong kendaraan yang berhenti/melambat di persimpangan atau perlintasan. (Hal.111)"
  }
 },
 {
  "id": "9-1",
  "cat": "学科9",
  "q": "後ろ（うしろ）の車（くるま）が自分（じぶん）の車（くるま）を追い越そう（おいこそう）としているときは、前（まえ）の車（くるま）を追い越し（おいこし）てよい。",
  "a": false,
  "exp": "後ろ（うしろ）の車（くるま）が自分（じぶん）の車（くるま）を追い越そう（おいこそう）としているときは、前（まえ）の車（くるま）を追い越し（おいこし）てはいけません。（115P）",
  "img": null,
  "vi": {
   "q": "Khi xe phía sau đang định vượt xe mình, thì mình được phép vượt xe phía trước.",
   "e": "Khi xe sau đang định vượt xe mình, không được vượt xe phía trước. (Trang 115)"
  },
  "ne": {
   "q": "पछाडिको गाडीले आफ्नो गाडीलाई उछिन्न लागेको बेला, आफूले अगाडिको गाडीलाई उछिन्न हुन्छ।",
   "e": "पछाडिको गाडीले उछिन्न लागेको बेला अगाडिको गाडीलाई उछिन्नु हुँदैन। (पृष्ठ 115)"
  },
  "en": {
   "q": "When the vehicle behind is trying to overtake you, you may overtake the vehicle ahead.",
   "e": "When the vehicle behind is overtaking you, you must not overtake the vehicle ahead. (P.115)"
  },
  "idn": {
   "q": "Saat kendaraan di belakang sedang mencoba menyalip Anda, Anda boleh menyalip kendaraan di depan.",
   "e": "Saat kendaraan belakang sedang menyalip Anda, tidak boleh menyalip kendaraan di depan. (Hal.115)"
  }
 },
 {
  "id": "9-2",
  "cat": "学科9",
  "q": "前（まえ）の車（くるま）が一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）を追い越そう（おいこそう）としているときであっても、速度制限（そくどせいげん）を守っていれば、その2台（だい）をまとめて追い越せる（おいこせる）（二重追越し（にじゅうおいこし）ができる）。",
  "a": true,
  "exp": "前（まえ）の車（くるま）が原動機付自転車（げんどうきつきじてんしゃ）・軽車両（けいしゃりょう）を追い越そう（おいこそう）としているときは、二重追越し（にじゅうおいこし）にはなりません。（115P）",
  "img": null,
  "vi": {
   "q": "Ngay cả khi xe phía trước đang định vượt một xe gắn máy thông thường, nếu tuân thủ giới hạn tốc độ thì có thể vượt cả 2 xe cùng lúc (vượt kép).",
   "e": "Khi xe trước đang vượt xe gắn máy/xe thô sơ thì không tính là vượt kép. (Trang 115)"
  },
  "ne": {
   "q": "अगाडिको गाडीले सामान्य मोपेडलाई उछिन्न लागेको भए पनि, गति सीमा पालना गरेमा दुवैलाई एकैपटक उछिन्न (दोहोरो उछिनाइ) सकिन्छ।",
   "e": "अगाडिको गाडीले मोपेड/हलुका सवारी उछिन्दै गरेको बेला त्यो दोहोरो उछिनाइ मानिँदैन। (पृष्ठ 115)"
  },
  "en": {
   "q": "Even when the vehicle ahead is about to overtake a standard moped, you may overtake both at once (double overtaking) as long as you keep to the speed limit.",
   "e": "When the vehicle ahead is overtaking a moped or light vehicle, it does not count as double overtaking. (P.115)"
  },
  "idn": {
   "q": "Meski kendaraan di depan sedang menyalip moped standar, Anda boleh menyalip keduanya sekaligus (salip ganda) asalkan mematuhi batas kecepatan.",
   "e": "Jika kendaraan depan menyalip moped/kendaraan ringan, itu tidak terhitung salip ganda. (Hal.115)"
  }
 },
 {
  "id": "9-3",
  "cat": "学科9",
  "q": "ほかの車両（しゃりょう）に追い越される（おいこされる）とき、追越し（おいこし）に十分（じゅうぶん）な余地（よち）がない場合（ばあい）は、できるだけ左（ひだり）に寄り（より）、道路（どうろ）をゆずらなければならない。",
  "a": true,
  "exp": "ほかの車両（しゃりょう）に追い越される（おいこされる）とき、相手（あいて）に追越し（おいこし）をするための十分（じゅうぶん）な余地（よち）がない場合（ばあい）は、できるだけ左（ひだり）に寄り（より）、道路（どうろ）をゆずらなければなりません。（120P）",
  "img": null,
  "vi": {
   "q": "Khi bị xe khác vượt, nếu không có đủ khoảng trống để vượt thì phải đi sát về bên trái hết mức và nhường đường.",
   "e": "Khi bị vượt mà đối phương không đủ khoảng trống, phải đi sát trái hết mức và nhường đường. (Trang 120)"
  },
  "ne": {
   "q": "अरू गाडीले उछिन्दा, उछिन्न पर्याप्त ठाउँ छैन भने सकेसम्म बायाँ लागेर बाटो छोड्नुपर्छ।",
   "e": "उछिनाइका लागि पर्याप्त ठाउँ नभए सकेसम्म बायाँ लागेर बाटो छोड्नुपर्छ। (पृष्ठ 120)"
  },
  "en": {
   "q": "When being overtaken and there is not enough room for the overtaking, you must keep as far left as possible and yield.",
   "e": "If there is not enough room, keep as far left as possible and yield. (P.120)"
  },
  "idn": {
   "q": "Saat disalip dan ruang untuk menyalip tidak cukup, harus merapat ke kiri sebisa mungkin dan memberi jalan.",
   "e": "Jika ruang tidak cukup, merapatlah ke kiri dan beri jalan. (Hal.120)"
  }
 },
 {
  "id": "9-4",
  "cat": "学科9",
  "q": "トンネルでの追越し（おいこし）は危険（きけん）であるが、車両通行帯（しゃりょうつうこうたい）のある場合（ばあい）は、追越し（おいこし）をしてよい。",
  "a": true,
  "exp": "車両通行帯（しゃりょうつうこうたい）のある道路（どうろ）の場合（ばあい）は、追越し（おいこし）できます。（116P）",
  "img": null,
  "vi": {
   "q": "Vượt xe trong đường hầm là nguy hiểm, nhưng nếu có làn xe (phân làn) thì được phép vượt.",
   "e": "Trên đường có làn xe thì được phép vượt. (Trang 116)"
  },
  "ne": {
   "q": "टनेलभित्र उछिन्नु खतरनाक हो, तर लेन छुट्याइएको भए उछिन्न सकिन्छ।",
   "e": "लेन भएको सडकमा उछिन्न सकिन्छ। (पृष्ठ 116)"
  },
  "en": {
   "q": "Overtaking in tunnels is dangerous, but it is allowed where there are marked lanes.",
   "e": "On roads with marked lanes, overtaking is allowed. (P.116)"
  },
  "idn": {
   "q": "Menyalip di terowongan berbahaya, tetapi diperbolehkan jika ada jalur bermarka.",
   "e": "Di jalan berjalur marka, menyalip diperbolehkan. (Hal.116)"
  }
 },
 {
  "id": "9-5",
  "cat": "学科9",
  "q": "この標識（ひょうしき）があるときは、一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）を追い越す（おいこす）ために進路（しんろ）を変えたり、その横（よこ）を通り過ぎ（とおりすぎ）たりしてはならない。",
  "a": true,
  "exp": "自動車（じどうしゃ）や一般原動機付自転車（いっぱんげんどうきつきじてんしゃ）を追い越す（おいこす）ために進路（しんろ）を変えたり（かえたり）、その横（よこ）を通り過ぎ（とおりすぎ）たりしてはいけません。（116P）",
  "img": "g9_q5.png",
  "vi": {
   "q": "Khi có biển báo này, không được đổi hướng để vượt xe gắn máy thông thường hoặc đi qua cạnh nó.",
   "e": "Không được đổi hướng để vượt ô tô hay xe gắn máy thông thường, hoặc đi qua cạnh chúng. (Trang 116)"
  },
  "ne": {
   "q": "यो चिन्ह भएको ठाउँमा सामान्य मोपेडलाई उछिन्न दिशा बदल्ने वा त्यसको छेउबाट गुज्रने गर्नु हुँदैन।",
   "e": "गाडी वा सामान्य मोपेड उछिन्न दिशा बदल्ने वा छेउबाट गुज्रने गर्नु हुँदैन। (पृष्ठ 116)"
  },
  "en": {
   "q": "Where this sign is posted, you must not change course to overtake a standard moped or pass alongside it.",
   "e": "You must not change course to overtake a motor vehicle or standard moped, or pass alongside it. (P.116)"
  },
  "idn": {
   "q": "Di tempat yang ada rambu ini, tidak boleh berpindah arah untuk menyalip moped standar atau melewati sampingnya.",
   "e": "Dilarang pindah arah untuk menyalip mobil atau moped standar, atau melewati sampingnya. (Hal.116)"
  }
 },
 {
  "id": "9-6",
  "cat": "学科9",
  "q": "進路（しんろ）の前方（ぜんぽう）に障害物（しょうがいぶつ）がある場所（ばしょ）で対向車（たいこうしゃ）と行き違う（いきちがう）ときは、障害物（しょうがいぶつ）のある方（ほう）を進行（しんこう）する車（くるま）が優先（ゆうせん）なので、先（さき）に通行（つうこう）することができる。",
  "a": false,
  "exp": "進路（しんろ）の前方（ぜんぽう）に障害物（しょうがいぶつ）があるときは、あらかじめ一時停止（いちじていし）か減速（げんそく）して反対方向（はんたいほうこう）からの車（くるま）に道（みち）をゆずりましょう。（123P）",
  "img": null,
  "vi": {
   "q": "Khi tránh xe ngược chiều ở nơi phía trước có chướng ngại vật, xe đi bên phía có chướng ngại vật được ưu tiên đi trước.",
   "e": "Khi phía trước có chướng ngại vật, phải dừng lại hoặc giảm tốc trước và nhường đường cho xe ngược chiều. (Trang 123)"
  },
  "ne": {
   "q": "अगाडि अवरोध भएको ठाउँमा विपरीत दिशाको गाडीसँग साट्दा, अवरोध भएको साइडको गाडीलाई प्राथमिकता हुने भएकाले पहिले जान सकिन्छ।",
   "e": "अगाडि अवरोध भए पहिले नै रोकिने वा गति घटाएर विपरीत गाडीलाई बाटो छोड्नुपर्छ। (पृष्ठ 123)"
  },
  "en": {
   "q": "When passing an oncoming vehicle where there is an obstacle ahead, the vehicle on the obstacle's side has priority and may go first.",
   "e": "With an obstacle ahead, stop or slow down in advance and yield to oncoming vehicles. (P.123)"
  },
  "idn": {
   "q": "Saat berpapasan di tempat yang ada rintangan di depan, kendaraan di sisi rintangan diprioritaskan dan boleh lewat duluan.",
   "e": "Jika ada rintangan di depan, berhenti atau melambat lebih dulu dan beri jalan kendaraan dari arah berlawanan. (Hal.123)"
  }
 },
 {
  "id": "9-7",
  "cat": "学科9",
  "q": "こう配（こうばい）の急な（きゅうな）上り坂（のぼりざか）や下り坂（くだりざか）では、追い越し（おいこし）をすることはできない。",
  "a": false,
  "exp": "こう配（こうばい）の急な（きゅうな）上り坂（のぼりざか）は、追い越し（おいこし）が禁止（きんし）されている場所（ばしょ）ではありません。（116P）",
  "img": null,
  "vi": {
   "q": "Không được vượt xe trên dốc lên gấp và dốc xuống gấp.",
   "e": "Dốc lên gấp không phải là nơi cấm vượt (dốc xuống gấp thì bị cấm). (Trang 116)"
  },
  "ne": {
   "q": "ठाडो उकालो र ठाडो ओरालोमा उछिन्न पाइँदैन।",
   "e": "ठाडो उकालो उछिन्न निषेध गरिएको ठाउँ होइन (ठाडो ओरालो निषेध हो)। (पृष्ठ 116)"
  },
  "en": {
   "q": "You cannot overtake on steep uphill or steep downhill slopes.",
   "e": "Steep uphill slopes are NOT no-overtaking zones (steep downhills are). (P.116)"
  },
  "idn": {
   "q": "Tidak boleh menyalip di tanjakan curam maupun turunan curam.",
   "e": "Tanjakan curam BUKAN tempat larangan menyalip (turunan curam dilarang). (Hal.116)"
  }
 },
 {
  "id": "9-8",
  "cat": "学科9",
  "q": "坂道（さかみち）で行き違う（いきちがう）とき、上り坂（のぼりざか）に待避所（たいひじょ）があったが、上り坂（のぼりざか）の車（くるま）の方（ほう）が優先（ゆうせん）なのでそのまま通行（つうこう）した。",
  "a": false,
  "exp": "待避所（たいひじょ）がある方（ほう）の車（くるま）がその待避所（たいひじょ）で一時停止（いちじていし）して待ち（まち）ます。（123P）",
  "img": null,
  "vi": {
   "q": "Khi tránh nhau trên đường dốc, có chỗ tránh xe (taihijo) bên phía dốc lên, nhưng xe lên dốc được ưu tiên nên đã cứ thế đi tiếp.",
   "e": "Xe ở bên phía có chỗ tránh phải dừng tại chỗ tránh đó và chờ. (Trang 123)"
  },
  "ne": {
   "q": "ओरालो-उकालोमा साट्दा, उकालोतिर साइड दिने ठाउँ (退避所) थियो, तर उकालो चढ्ने गाडीलाई प्राथमिकता भएकाले त्यत्तिकै गयो।",
   "e": "साइड दिने ठाउँ भएको साइडको गाडीले त्यहाँ रोकिएर पर्खनुपर्छ। (पृष्ठ 123)"
  },
  "en": {
   "q": "Passing on a slope, there was a turnout on the uphill side, but the uphill vehicle has priority, so I kept going.",
   "e": "The vehicle on the side with the turnout stops there and waits. (P.123)"
  },
  "idn": {
   "q": "Saat berpapasan di tanjakan, ada tempat menepi di sisi yang menanjak, tetapi kendaraan menanjak diprioritaskan jadi saya terus jalan.",
   "e": "Kendaraan di sisi yang punya tempat menepi berhenti di sana dan menunggu. (Hal.123)"
  }
 },
 {
  "id": "9-9",
  "cat": "学科9",
  "q": "追い越し（おいこし）が禁止（きんし）されている場所（ばしょ）でも、特定小型原動機付自転車（とくていこがたげんどうきつきじてんしゃ）や軽車両（けいしゃりょう）は追い越す（おいこす）ことができる。",
  "a": true,
  "exp": "追い越し（おいこし）が禁止（きんし）されている場所（ばしょ）でも、特定小型原動機付自転車（とくていこがたげんどうきつきじてんしゃ）や軽車両（けいしゃりょう）は追い越す（おいこす）ことができます。（116P）",
  "img": null,
  "vi": {
   "q": "Ngay cả ở nơi cấm vượt, vẫn có thể vượt xe đạp điện loại nhỏ đặc định và xe thô sơ.",
   "e": "Ở nơi cấm vượt, vẫn được vượt xe đạp điện loại nhỏ đặc định và xe thô sơ. (Trang 116)"
  },
  "ne": {
   "q": "उछिन्न निषेध गरिएको ठाउँमा पनि विशेष साना मोपेड र हलुका सवारीलाई उछिन्न सकिन्छ।",
   "e": "निषेधित ठाउँमा पनि विशेष साना मोपेड र हलुका सवारी उछिन्न मिल्छ। (पृष्ठ 116)"
  },
  "en": {
   "q": "Even where overtaking is prohibited, you may overtake special small motorized bicycles and light vehicles.",
   "e": "Even in no-overtaking zones, you may overtake special small motorized bicycles and light vehicles. (P.116)"
  },
  "idn": {
   "q": "Meski di tempat larangan menyalip, boleh menyalip sepeda motor kecil khusus dan kendaraan ringan.",
   "e": "Di zona larangan pun boleh menyalip sepeda motor kecil khusus dan kendaraan ringan. (Hal.116)"
  }
 },
 {
  "id": "9-10",
  "cat": "学科9",
  "q": "追い抜き（おいぬき）とは、車（くるま）が進路（しんろ）を変えて（かえて）、進行中（しんこうちゅう）の前車（ぜんしゃ）の前方（ぜんぽう）に出る（でる）ことをいう。",
  "a": false,
  "exp": "進路（しんろ）を変えない（かえない）で、進行（しんこう）中の前車（ぜんしゃ）の前方（ぜんぽう）に出る（でる）ことをいいます。（114P）",
  "img": null,
  "vi": {
   "q": "\"Vượt qua\" (oinuki) nghĩa là xe đổi hướng đi rồi vượt lên phía trước xe đang chạy phía trước.",
   "e": "Oinuki là vượt lên trước xe đang chạy mà KHÔNG đổi hướng đi. (Trang 114)"
  },
  "ne": {
   "q": "「ओइनुकी」 (追い抜き) भनेको गाडीले दिशा बदलेर अगाडि चलिरहेको गाडीको अगाडि निस्कनु हो।",
   "e": "दिशा नबदली अगाडिको गाडीको अगाडि निस्कनुलाई ओइनुकी भनिन्छ। (पृष्ठ 114)"
  },
  "en": {
   "q": "\"Passing\" (oinuki) means changing course and moving ahead of a moving vehicle in front.",
   "e": "Oinuki means moving ahead of the vehicle in front WITHOUT changing course. (P.114)"
  },
  "idn": {
   "q": "\"Oinuki\" berarti berpindah arah lalu maju melewati kendaraan yang sedang melaju di depan.",
   "e": "Oinuki adalah melewati kendaraan di depan TANPA berpindah arah. (Hal.114)"
  }
 },
 {
  "id": "10-1",
  "cat": "学科10",
  "q": "大型特殊免許（おおがたとくしゅめんきょ）を受け（うけ）ている者（もの）は、大型自動車（おおがたじどうしゃ）を運転（うんてん）することができる。",
  "a": false,
  "exp": "大型特殊免許（おおがたとくしゅめんきょ）を受け（うけ）ている者（もの）は、大型特殊自動車（おおがたとくしゅじどうしゃ）、小型特殊自動車（こがたとくしゅじどうしゃ）、原動機付自転車（げんどうきつきじてんしゃ）を運転（うんてん）することができます。（127P）",
  "img": null,
  "vi": {
   "q": "Người có bằng lái xe đặc thù cỡ lớn có thể lái ô tô cỡ lớn.",
   "e": "Người có bằng đặc thù cỡ lớn chỉ được lái: xe đặc thù cỡ lớn, xe đặc thù loại nhỏ và xe gắn máy. (Trang 127)"
  },
  "ne": {
   "q": "ठूलो विशेष सवारी लाइसेन्स भएको व्यक्तिले ठूलो गाडी (बस/ट्रक) चलाउन सक्छ।",
   "e": "ठूलो विशेष लाइसेन्सले ठूलो विशेष गाडी, सानो विशेष गाडी र मोपेड मात्र चलाउन मिल्छ। (पृष्ठ 127)"
  },
  "en": {
   "q": "A person with a large special vehicle license may drive a large motor vehicle (truck/bus).",
   "e": "A large special license permits only large special vehicles, small special vehicles, and mopeds. (P.127)"
  },
  "idn": {
   "q": "Pemegang SIM kendaraan khusus besar boleh mengendarai mobil besar (truk/bus).",
   "e": "SIM khusus besar hanya untuk kendaraan khusus besar, khusus kecil, dan moped. (Hal.127)"
  }
 },
 {
  "id": "10-2",
  "cat": "学科10",
  "q": "緊急自動車（きんきゅうじどうしゃ）を運転（うんてん）するには、その車（くるま）に必要（ひつよう）な第一種免許（だいいっしゅめんきょ）があればよく、運転経験年数（うんてんけいけんねんすう）は問われ（とわれ）ない。",
  "a": false,
  "exp": "緊急自動車（きんきゅうじどうしゃ）を運転（うんてん）するには、必要（ひつよう）な免許（めんきょ）に加えて（くわえて）、一定（いってい）の運転経験年数（うんてんけいけんねんすう）も必要（ひつよう）です。（128P）",
  "img": null,
  "vi": {
   "q": "Để lái xe khẩn cấp, chỉ cần có bằng lái hạng 1 cần thiết cho xe đó là đủ, không cần số năm kinh nghiệm lái xe.",
   "e": "Để lái xe khẩn cấp, ngoài bằng lái cần thiết còn cần số năm kinh nghiệm lái nhất định. (Trang 128)"
  },
  "ne": {
   "q": "आपतकालीन गाडी चलाउन त्यो गाडीको आवश्यक प्रथम श्रेणी लाइसेन्स भए पुग्छ; ड्राइभिङ अनुभवका वर्ष चाहिँदैन।",
   "e": "आपतकालीन गाडी चलाउन लाइसेन्सका साथै निश्चित वर्षको अनुभव पनि आवश्यक छ। (पृष्ठ 128)"
  },
  "en": {
   "q": "To drive an emergency vehicle, you only need the required Class 1 license for that vehicle; years of driving experience are not required.",
   "e": "Driving an emergency vehicle requires both the license and a certain number of years of driving experience. (P.128)"
  },
  "idn": {
   "q": "Untuk mengendarai kendaraan darurat, cukup SIM kelas 1 yang diperlukan; pengalaman mengemudi bertahun-tahun tidak diperlukan.",
   "e": "Mengendarai kendaraan darurat butuh SIM dan juga pengalaman mengemudi beberapa tahun. (Hal.128)"
  }
 },
 {
  "id": "10-3",
  "cat": "学科10",
  "q": "運転免許証（うんてんめんきょしょう）又は（または）免許情報記録個人番号カード（めんきょじょうほうきろくこじんばんごうかーど）を携帯（けいたい）しないで運転（うんてん）すると、無免許運転（むめんきょうんてん）になる。",
  "a": false,
  "exp": "免許（めんきょ）を持って（もって）いる人（ひと）が免許証（めんきょしょう）などを携帯（けいたい）せずに運転（うんてん）した場合（ばあい）は、無免許運転（むめんきょうんてん）ではなく免許証不携帯（めんきょしょうふけいたい）です。（126P）",
  "img": null,
  "vi": {
   "q": "Lái xe mà không mang theo bằng lái hoặc thẻ my-number có ghi thông tin bằng lái thì bị coi là lái xe không có bằng.",
   "e": "Người có bằng nhưng không mang theo khi lái xe thì là lỗi \"không mang theo bằng lái\", không phải \"lái xe không bằng\". (Trang 126)"
  },
  "ne": {
   "q": "लाइसेन्स वा लाइसेन्स जानकारी भएको माइनम्बर कार्ड नबोकी गाडी चलाए बिना-लाइसेन्स ड्राइभिङ हुन्छ।",
   "e": "लाइसेन्स भएर पनि नबोकेको अवस्था 「लाइसेन्स नबोकेको」 हो, बिना-लाइसेन्स होइन। (पृष्ठ 126)"
  },
  "en": {
   "q": "Driving without carrying your license (or My Number card with license information) constitutes unlicensed driving.",
   "e": "A licensed person driving without carrying the license commits \"failure to carry license\", not unlicensed driving. (P.126)"
  },
  "idn": {
   "q": "Mengemudi tanpa membawa SIM (atau kartu My Number berinformasi SIM) termasuk mengemudi tanpa SIM.",
   "e": "Pemegang SIM yang tidak membawanya melakukan \"tidak membawa SIM\", bukan mengemudi tanpa SIM. (Hal.126)"
  }
 },
 {
  "id": "10-4",
  "cat": "学科10",
  "q": "小型特殊自動車免許（こがたとくしゅじどうしゃめんきょ）を受け（うけ）た者（もの）は、小型特殊自動車（こがたとくしゅじどうしゃ）のみ運転（うんてん）することができる。",
  "a": true,
  "exp": "小型特殊自動車免許（こがたとくしゅじどうしゃめんきょ）を受け（うけ）た者（もの）は、小型特殊自動車（こがたとくしゅじどうしゃ）のみ運転（うんてん）することができます。（127P）",
  "img": null,
  "vi": {
   "q": "Người có bằng xe đặc thù loại nhỏ chỉ được lái xe đặc thù loại nhỏ.",
   "e": "Người có bằng xe đặc thù loại nhỏ chỉ được lái xe đặc thù loại nhỏ. (Trang 127)"
  },
  "ne": {
   "q": "सानो विशेष सवारी लाइसेन्स लिएको व्यक्तिले सानो विशेष गाडी मात्र चलाउन सक्छ।",
   "e": "सानो विशेष लाइसेन्सले सानो विशेष गाडी मात्र चलाउन मिल्छ। (पृष्ठ 127)"
  },
  "en": {
   "q": "A person with a small special vehicle license may drive only small special vehicles.",
   "e": "A small special license permits only small special vehicles. (P.127)"
  },
  "idn": {
   "q": "Pemegang SIM kendaraan khusus kecil hanya boleh mengendarai kendaraan khusus kecil.",
   "e": "SIM khusus kecil hanya untuk kendaraan khusus kecil. (Hal.127)"
  }
 },
 {
  "id": "10-5",
  "cat": "学科10",
  "q": "中型自動車（ちゅうがたじどうしゃ）の最大積載量（さいだいせきさいりょう）は、4500キログラム以上（いじょう）6500キログラム未満（みまん）である。",
  "a": true,
  "exp": "中型自動車（ちゅうがたじどうしゃ）の最大積載量（さいだいせきさいりょう）は、4500キログラム以上（いじょう）6500キログラム未満（みまん）です。（129P）",
  "img": null,
  "vi": {
   "q": "Trọng tải tối đa của ô tô cỡ trung là từ 4.500 kg đến dưới 6.500 kg.",
   "e": "Trọng tải tối đa của ô tô cỡ trung là từ 4.500 kg đến dưới 6.500 kg. (Trang 129)"
  },
  "ne": {
   "q": "मझौला गाडीको अधिकतम भार क्षमता ४,५०० केजीदेखि ६,५०० केजीभन्दा कम हो।",
   "e": "मझौला गाडीको अधिकतम भार ४,५०० केजीदेखि ६,५०० केजीभन्दा कम हो। (पृष्ठ 129)"
  },
  "en": {
   "q": "The maximum load capacity of a medium-sized vehicle is 4,500 kg or more and less than 6,500 kg.",
   "e": "The maximum load of a medium vehicle is 4,500 kg or more and less than 6,500 kg. (P.129)"
  },
  "idn": {
   "q": "Kapasitas muatan maksimum mobil ukuran sedang adalah 4.500 kg hingga kurang dari 6.500 kg.",
   "e": "Muatan maksimum mobil sedang: 4.500 kg hingga kurang dari 6.500 kg. (Hal.129)"
  }
 },
 {
  "id": "10-6",
  "cat": "学科10",
  "q": "車両総重量（しゃりょうそうじゅうりょう）750キログラム以下（いか）の車（くるま）をけん引（けんいん）するときは、けん引（けんいん）する自動車（じどうしゃ）の免許（めんきょ）の他（ほか）にけん引免許（けんいんめんきょ）が必要（ひつよう）である。",
  "a": false,
  "exp": "車両総重量（しゃりょうそうじゅうりょう）750キログラム以下（いか）の車（くるま）をけん引（けんいん）するときは、けん引（けんいん）する自動車（じどうしゃ）の免許（めんきょ）の他（ほか）にけん引免許（けんいんめんきょ）はいりません。（130P）",
  "img": null,
  "vi": {
   "q": "Khi kéo xe có tổng trọng lượng từ 750 kg trở xuống, ngoài bằng lái của xe kéo còn cần bằng kéo xe (kéo moóc).",
   "e": "Khi kéo xe có tổng trọng lượng từ 750 kg trở xuống, không cần bằng kéo xe. (Trang 130)"
  },
  "ne": {
   "q": "कुल तौल ७५० केजी वा कम भएको गाडी तान्दा, तान्ने गाडीको लाइसेन्सका अतिरिक्त तान्ने (けん引) लाइसेन्स पनि चाहिन्छ।",
   "e": "७५० केजी वा कमको गाडी तान्दा तान्ने लाइसेन्स चाहिँदैन। (पृष्ठ 130)"
  },
  "en": {
   "q": "When towing a vehicle with a gross weight of 750 kg or less, a towing license is required in addition to the license for the towing vehicle.",
   "e": "Towing a vehicle of 750 kg or less does not require a towing license. (P.130)"
  },
  "idn": {
   "q": "Saat menderek kendaraan berbobot total 750 kg atau kurang, selain SIM kendaraan penderek juga perlu SIM derek.",
   "e": "Menderek kendaraan 750 kg atau kurang tidak perlu SIM derek. (Hal.130)"
  }
 },
 {
  "id": "10-7",
  "cat": "学科10",
  "q": "乗車定員（じょうしゃていいん）30人（にん）以上（いじょう）の自動車（じどうしゃ）は、大型自動車（おおがたじどうしゃ）である。",
  "a": true,
  "exp": "乗車定員（じょうしゃていいん）30人（にん）以上（いじょう）の自動車（じどうしゃ）は、大型自動車（おおがたじどうしゃ）です。（129P）",
  "img": null,
  "vi": {
   "q": "Ô tô có sức chở từ 30 người trở lên là ô tô cỡ lớn.",
   "e": "Ô tô có sức chở từ 30 người trở lên là ô tô cỡ lớn. (Trang 129)"
  },
  "ne": {
   "q": "३० जना वा बढी यात्रु क्षमता भएको गाडी ठूलो गाडी हो।",
   "e": "३० जना वा बढी क्षमताको गाडी ठूलो गाडी हो। (पृष्ठ 129)"
  },
  "en": {
   "q": "A vehicle with a seating capacity of 30 or more is a large vehicle.",
   "e": "A vehicle with capacity of 30 or more people is a large vehicle. (P.129)"
  },
  "idn": {
   "q": "Kendaraan berkapasitas 30 orang atau lebih adalah kendaraan besar.",
   "e": "Kendaraan berkapasitas 30 orang atau lebih adalah kendaraan besar. (Hal.129)"
  }
 },
 {
  "id": "10-8",
  "cat": "学科10",
  "q": "運転免許（うんてんめんきょ）は、第一種運転免許（だいいっしゅうんてんめんきょ）、第二種運転免許（だいにしゅうんてんめんきょ）、原付免許（げんつきめんきょ）の3つに区分（くぶん）される。",
  "a": false,
  "exp": "運転免許（うんてんめんきょ）の区分（くぶん）は、第一種運転免許（だいいっしゅうんてんめんきょ）・第二種運転免許（だいにしゅうんてんめんきょ）・仮運転免許（かりうんてんめんきょ）の3つです。（126P）",
  "img": null,
  "vi": {
   "q": "Bằng lái xe được chia thành 3 loại: bằng lái hạng 1, bằng lái hạng 2 và bằng xe gắn máy.",
   "e": "Bằng lái được chia thành: bằng hạng 1, bằng hạng 2 và bằng lái tạm (kari-menkyo). (Trang 126)"
  },
  "ne": {
   "q": "ड्राइभिङ लाइसेन्स ३ प्रकारमा बाँडिन्छ: प्रथम श्रेणी, द्वितीय श्रेणी र मोपेड लाइसेन्स।",
   "e": "लाइसेन्सको वर्गीकरण: प्रथम श्रेणी, द्वितीय श्रेणी र अस्थायी (仮) लाइसेन्स गरी ३ प्रकार हो। (पृष्ठ 126)"
  },
  "en": {
   "q": "Driver's licenses are divided into three categories: Class 1, Class 2, and moped licenses.",
   "e": "The three categories are Class 1, Class 2, and provisional (learner's) licenses. (P.126)"
  },
  "idn": {
   "q": "SIM dibagi tiga jenis: SIM kelas 1, SIM kelas 2, dan SIM moped.",
   "e": "Tiga jenisnya: kelas 1, kelas 2, dan SIM sementara (belajar). (Hal.126)"
  }
 },
 {
  "id": "10-9",
  "cat": "学科10",
  "q": "仮免許（かりめんきょ）で運転練習（うんてんれんしゅう）をするときは、車（くるま）の前（まえ）と後ろ（うしろ）の決められた（きめられた）位置（いち）に「仮免許練習標識（かりめんきょれんしゅうひょうしき）」をつけなければならない。",
  "a": true,
  "exp": "仮免許（かりめんきょ）で路上練習（ろじょうれんしゅう）をするときは、車（くるま）の前後（ぜんご）に仮免許練習標識（かりめんきょれんしゅうひょうしき）が必要（ひつよう）です。（131P）",
  "img": null,
  "vi": {
   "q": "Khi tập lái bằng bằng lái tạm, phải gắn \"biển tập lái bằng tạm\" ở vị trí quy định phía trước và phía sau xe.",
   "e": "Khi tập lái trên đường bằng bằng tạm, phải gắn biển tập lái ở trước và sau xe. (Trang 131)"
  },
  "ne": {
   "q": "अस्थायी लाइसेन्सले अभ्यास गर्दा गाडीको अगाडि र पछाडि तोकिएको स्थानमा 「अस्थायी लाइसेन्स अभ्यास चिन्ह」 राख्नुपर्छ।",
   "e": "अस्थायी लाइसेन्सले सडक अभ्यास गर्दा गाडीको अगाडि-पछाडि अभ्यास चिन्ह आवश्यक छ। (पृष्ठ 131)"
  },
  "en": {
   "q": "When practicing with a provisional license, you must attach \"provisional license practice plates\" at the designated positions on the front and rear of the car.",
   "e": "For road practice with a provisional license, practice plates are required on the front and rear. (P.131)"
  },
  "idn": {
   "q": "Saat berlatih dengan SIM sementara, harus memasang \"pelat latihan SIM sementara\" di posisi yang ditentukan di depan dan belakang mobil.",
   "e": "Latihan di jalan dengan SIM sementara wajib memasang pelat latihan di depan dan belakang. (Hal.131)"
  }
 },
 {
  "id": "10-10",
  "cat": "学科10",
  "q": "普通免許（ふつうめんきょ）を取得後（しゅとくご）1年間（ねんかん）は、初心運転者期間（しょしんうんてんしゃきかん）である。",
  "a": true,
  "exp": "普通免許（ふつうめんきょ）を取得後（しゅとくご）1年間（ねんかん）は、初心運転者期間（しょしんうんてんしゃきかん）です。（142P）",
  "img": null,
  "vi": {
   "q": "Trong 1 năm sau khi lấy bằng lái xe phổ thông là thời kỳ người lái xe mới (shoshin-untensha).",
   "e": "Trong 1 năm sau khi lấy bằng phổ thông là thời kỳ người lái mới. (Trang 142)"
  },
  "ne": {
   "q": "साधारण लाइसेन्स लिएपछिको १ वर्ष नयाँ चालक अवधि हो।",
   "e": "साधारण लाइसेन्स लिएपछिको १ वर्ष नयाँ चालक अवधि हो। (पृष्ठ 142)"
  },
  "en": {
   "q": "The one year after obtaining a regular license is the beginner driver period.",
   "e": "One year after obtaining a regular license is the beginner driver period. (P.142)"
  },
  "idn": {
   "q": "Satu tahun setelah memperoleh SIM biasa adalah masa pengemudi pemula.",
   "e": "Satu tahun setelah memperoleh SIM biasa adalah masa pengemudi pemula. (Hal.142)"
  }
 },
 {
  "id": "15-1",
  "cat": "学科15",
  "q": "バックミラーに映らなければ（うつらなければ）後続車（こうぞくしゃ）はいないと考えて（かんがえて）よい。",
  "a": false,
  "exp": "車（くるま）には、ミラーでは確認（かくにん）しにくい死角（しかく）があります。特に（とくに）、車線変更（しゃせんへんこう）や進路変更（しんろへんこう）をするときは、バックミラーやサイドミラーだけでなく、直接（ちょくせつ）目（め）で見て（みて）安全（あんぜん）確認（かくにん）をすることが大切（たいせつ）です。（163P）",
  "img": null,
  "vi": {
   "q": "Nếu không thấy trong gương chiếu hậu thì có thể coi là không có xe phía sau.",
   "e": "Xe có điểm mù mà gương khó quan sát được. Đặc biệt khi chuyển làn hay đổi hướng, ngoài gương chiếu hậu và gương bên, phải trực tiếp nhìn bằng mắt để xác nhận an toàn. (Trang 163)"
  },
  "ne": {
   "q": "ब्याकमिररमा नदेखिए पछाडि गाडी छैन भनी ठान्न हुन्छ।",
   "e": "गाडीमा मिररले नदेखिने ब्लाइन्ड स्पट (मृत कोण) हुन्छ। विशेष गरी लेन परिवर्तन गर्दा मिरर मात्र होइन, आफ्नै आँखाले सीधै हेरेर सुरक्षा जाँच गर्नु महत्त्वपूर्ण छ। (पृष्ठ 163)"
  },
  "en": {
   "q": "If nothing appears in the rearview mirror, you may assume there are no vehicles behind you.",
   "e": "Cars have blind spots that mirrors cannot cover. Especially when changing lanes or course, check directly with your eyes, not only the mirrors. (P.163)"
  },
  "idn": {
   "q": "Jika tidak terlihat di kaca spion, boleh dianggap tidak ada kendaraan di belakang.",
   "e": "Mobil punya titik buta yang tak tertangkap spion. Terutama saat pindah jalur, periksa langsung dengan mata, bukan hanya spion. (Hal.163)"
  }
 },
 {
  "id": "15-2",
  "cat": "学科15",
  "q": "駐車車両（ちゅうしゃしゃりょう）のそばを通る（とおる）ときは、車（くるま）のかげから人（ひと）が出てくる（でてくる）かもしれないと考えて（かんがえて）運転（うんてん）する。",
  "a": true,
  "exp": "駐車車両（ちゅうしゃしゃりょう）のかげには人（ひと）がいるかもしれません。（163P）",
  "img": null,
  "vi": {
   "q": "Khi đi qua cạnh xe đang đỗ, phải lái xe với suy nghĩ rằng có thể có người bước ra từ sau bóng xe.",
   "e": "Sau bóng xe đang đỗ có thể có người. (Trang 163)"
  },
  "ne": {
   "q": "पार्क गरिएको गाडीको छेउबाट गुज्रँदा, गाडीको ओझेलबाट मानिस निस्कन सक्छ भनी सोचेर चलाउनुपर्छ।",
   "e": "पार्क गरिएको गाडीको ओझेलमा मानिस हुनसक्छ। (पृष्ठ 163)"
  },
  "en": {
   "q": "When passing a parked vehicle, drive with the thought that a person may come out from behind it.",
   "e": "Someone may be hidden behind a parked vehicle. (P.163)"
  },
  "idn": {
   "q": "Saat melewati kendaraan yang parkir, berkendaralah dengan pemikiran bahwa mungkin ada orang keluar dari baliknya.",
   "e": "Mungkin ada orang di balik kendaraan yang parkir. (Hal.163)"
  }
 },
 {
  "id": "15-3",
  "cat": "学科15",
  "q": "フロントピラーによって歩行者（ほこうしゃ）や自転車（じてんしゃ）が見えにくく（みえにくく）なることがあるため、交差点（こうさてん）や横断歩道（おうだんほどう）では、十分（じゅうぶん）注意（ちゅうい）する。",
  "a": true,
  "exp": "フロントピラーのかげに歩行者（ほこうしゃ）や自転車（じてんしゃ）が隠れる（かくれる）ことがあります。（162P）",
  "img": null,
  "vi": {
   "q": "Cột trước xe (front pillar) có thể che khuất người đi bộ và xe đạp, nên tại giao lộ và vạch sang đường phải hết sức chú ý.",
   "e": "Người đi bộ và xe đạp có thể bị khuất sau cột trước xe. (Trang 162)"
  },
  "ne": {
   "q": "फ्रन्ट पिलर (अगाडिको खम्बा) ले पैदल यात्री र साइकल देख्न गाह्रो बनाउन सक्ने भएकाले चोक र क्रसिङमा राम्ररी ध्यान दिनुपर्छ।",
   "e": "फ्रन्ट पिलरको ओझेलमा पैदल यात्री र साइकल लुक्न सक्छन्। (पृष्ठ 162)"
  },
  "en": {
   "q": "Front pillars can obscure pedestrians and bicycles, so be very careful at intersections and crosswalks.",
   "e": "Pedestrians and bicycles can be hidden behind the front pillars. (P.162)"
  },
  "idn": {
   "q": "Pilar depan mobil dapat menghalangi pandangan terhadap pejalan kaki dan sepeda, jadi berhati-hatilah di persimpangan dan zebra cross.",
   "e": "Pejalan kaki dan sepeda bisa tersembunyi di balik pilar depan. (Hal.162)"
  }
 },
 {
  "id": "15-4",
  "cat": "学科15",
  "q": "駐停車車両（ちゅうていしゃしゃりょう）のそばを通行（つうこう）するときは、車（くるま）のかげから人（ひと）が出てくる（でてくる）ことはあるが、車（くるま）の床下（ゆかした）まで注意（ちゅうい）する必要（ひつよう）はない。",
  "a": false,
  "exp": "駐停車車両（ちゅうていしゃしゃりょう）のかげにいる歩行者（ほこうしゃ）や子ども（こども）は、車体（しゃたい）に隠れて（かくれて）見えにくい（みえにくい）ことがあります。しかし、車（くるま）の床下（ゆかした）から足（あし）などが見えて（みえて）、存在（そんざい）に気づける（きづける）場合（ばあい）があります。（163P）",
  "img": null,
  "vi": {
   "q": "Khi đi qua cạnh xe đang dừng/đỗ, có thể có người bước ra từ sau xe, nhưng không cần chú ý đến khoảng gầm xe.",
   "e": "Người đi bộ hay trẻ em sau xe đang dừng/đỗ có thể bị thân xe che khuất, nhưng đôi khi có thể nhận ra sự hiện diện qua bàn chân nhìn thấy dưới gầm xe. (Trang 163)"
  },
  "ne": {
   "q": "रोकिएका/पार्क गरिएका गाडीको छेउबाट गुज्रँदा ओझेलबाट मानिस निस्कन सक्छ, तर गाडीको भुइँमुनिसम्म ध्यान दिनु आवश्यक छैन।",
   "e": "गाडीको ओझेलमा भएका मानिस देखिन गाह्रो हुन्छ, तर गाडीमुनिबाट खुट्टा देखिएर उपस्थिति थाहा पाउन सकिने अवस्था हुन्छ। (पृष्ठ 163)"
  },
  "en": {
   "q": "When passing stopped or parked vehicles, people may come out from behind them, but there is no need to watch under the vehicle floor.",
   "e": "Pedestrians or children behind vehicles may be hidden, but their feet may be visible under the vehicle, alerting you to their presence. (P.163)"
  },
  "idn": {
   "q": "Saat melewati kendaraan yang berhenti/parkir, orang mungkin keluar dari baliknya, tetapi tidak perlu memperhatikan kolong kendaraan.",
   "e": "Orang di balik kendaraan sulit terlihat, tetapi kadang kakinya terlihat dari kolong sehingga keberadaannya diketahui. (Hal.163)"
  }
 },
 {
  "id": "15-5",
  "cat": "学科15",
  "q": "カーブミラーに車（くるま）や歩行者（ほこうしゃ）が映って（うつって）いなければ、安全（あんぜん）なので、そのまま進行（しんこう）してよい。",
  "a": false,
  "exp": "ミラーに映る（うつる）範囲（はんい）には限り（かぎり）があり、死角（しかく）に車（くるま）や歩行者（ほこうしゃ）、自転車（じてんしゃ）が隠れて（かくれて）いることがあります。（165P）",
  "img": null,
  "vi": {
   "q": "Nếu gương cầu ở góc đường (curve mirror) không phản chiếu xe hay người đi bộ nào thì an toàn, có thể đi tiếp như bình thường.",
   "e": "Phạm vi phản chiếu của gương có giới hạn; xe, người đi bộ, xe đạp có thể ẩn trong điểm mù. (Trang 165)"
  },
  "ne": {
   "q": "कर्भ मिररमा गाडी वा पैदल यात्री नदेखिए सुरक्षित भएकाले त्यत्तिकै अगाडि बढ्न हुन्छ।",
   "e": "मिररमा देखिने दायरा सीमित हुन्छ; मृत कोणमा गाडी, पैदल यात्री, साइकल लुकेका हुनसक्छन्। (पृष्ठ 165)"
  },
  "en": {
   "q": "If no vehicles or pedestrians appear in the curve mirror, it is safe and you may proceed as you are.",
   "e": "Mirrors have a limited field of view; vehicles, pedestrians, or bicycles may be hidden in blind spots. (P.165)"
  },
  "idn": {
   "q": "Jika tidak ada kendaraan atau pejalan kaki terlihat di cermin tikungan, berarti aman dan boleh terus melaju.",
   "e": "Jangkauan cermin terbatas; kendaraan, pejalan kaki, atau sepeda bisa tersembunyi di titik buta. (Hal.165)"
  }
 },
 {
  "id": "15-6",
  "cat": "学科15",
  "q": "対向車（たいこうしゃ）がパッシングをしたときは、必ず（かならず）「先に（さきに）行って（いって）よい」という合図（あいず）なので、そのまま進行（しんこう）してよい。",
  "a": false,
  "exp": "パッシングは、相手（あいて）に道（みち）を譲る（ゆずる）合図（あいず）として使われる（つかわれる）こともありますが、必ず（かならず）同じ（おなじ）意味（いみ）とは限り（かぎり）ません。「危険（きけん）を知らせる（しらせる）」「注意（ちゅうい）を促す（うながす）」など、状況（じょうきょう）によって意味（いみ）が変わる（かわる）ことがあります。（168P）",
  "img": null,
  "vi": {
   "q": "Khi xe ngược chiều nháy đèn pha (passing), đó nhất định là tín hiệu \"mời đi trước\", nên có thể đi tiếp như bình thường.",
   "e": "Nháy đèn đôi khi được dùng làm tín hiệu nhường đường, nhưng không phải lúc nào cũng cùng một ý nghĩa. Tùy tình huống, nó có thể mang nghĩa \"báo nguy hiểm\" hay \"nhắc chú ý\". (Trang 168)"
  },
  "ne": {
   "q": "विपरीत दिशाको गाडीले पासिङ (हेडलाइट झिम्काउनु) गरेमा त्यो पक्कै 「पहिले जानुहोस्」 भन्ने सङ्केत भएकाले त्यत्तिकै अगाडि बढ्न हुन्छ।",
   "e": "पासिङ बाटो छोड्ने सङ्केतका रूपमा पनि प्रयोग हुन्छ, तर सधैँ एउटै अर्थ हुँदैन। अवस्था अनुसार 「खतराको जानकारी」「सावधान गराउने」 अर्थ पनि हुनसक्छ। (पृष्ठ 168)"
  },
  "en": {
   "q": "When an oncoming car flashes its headlights, it always means \"you may go first\", so you may proceed as you are.",
   "e": "Headlight flashing is sometimes used to yield, but not always. Depending on the situation it can mean \"danger\" or \"attention\". (P.168)"
  },
  "idn": {
   "q": "Saat mobil dari arah berlawanan memberi lampu jauh (passing), itu selalu berarti \"silakan duluan\", jadi boleh terus melaju.",
   "e": "Passing kadang berarti memberi jalan, tetapi tidak selalu. Tergantung situasi, bisa berarti \"bahaya\" atau \"perhatian\". (Hal.168)"
  }
 },
 {
  "id": "15-7",
  "cat": "学科15",
  "q": "夜間（やかん）、狭い（せまい）道路（どうろ）で対向車（たいこうしゃ）に道（みち）を譲る（ゆずる）とき、相手（あいて）がまぶしく感じ（かんじ）ないように、前照灯（ぜんしょうとう）を下向き（したむき）にしたり消したり（けしたり）することがある。",
  "a": true,
  "exp": "夜間（やかん）に狭い（せまい）道（みち）で対向車（たいこうしゃ）に道（みち）を譲る（ゆずる）ときは、前照灯（ぜんしょうとう）が相手（あいて）にまぶしく感じ（かんじ）られることがあります。そのため、状況（じょうきょう）に応じて（おうじて）前照灯（ぜんしょうとう）を下向き（したむき）にしたり、一時的（いちじてき）に消したり（けしたり）することがあります。（169P）",
  "img": null,
  "vi": {
   "q": "Ban đêm, khi nhường đường cho xe ngược chiều trên đường hẹp, để đối phương không bị chói, có khi hạ đèn pha xuống thấp hoặc tắt đèn.",
   "e": "Ban đêm trên đường hẹp, đèn pha có thể làm chói mắt đối phương, nên tùy tình huống có thể chuyển đèn xuống thấp hoặc tắt tạm thời. (Trang 169)"
  },
  "ne": {
   "q": "राति साँघुरो सडकमा विपरीत गाडीलाई बाटो छोड्दा, उसलाई तिरमिर नहोस् भनेर हेडलाइट तल फर्काउने वा निभाउने गरिन्छ।",
   "e": "राति साँघुरो बाटोमा हेडलाइटले अर्को चालकलाई तिरमिर पार्न सक्ने भएकाले, अवस्था अनुसार लाइट तल फर्काउने वा केही बेर निभाउने गरिन्छ। (पृष्ठ 169)"
  },
  "en": {
   "q": "At night on a narrow road, when yielding to an oncoming car, drivers sometimes dip or turn off their headlights so as not to dazzle the other driver.",
   "e": "At night on narrow roads, headlights can dazzle the other driver, so depending on the situation you may dip or briefly turn them off. (P.169)"
  },
  "idn": {
   "q": "Pada malam hari di jalan sempit, saat memberi jalan pada mobil dari arah berlawanan, kadang lampu depan diarahkan ke bawah atau dimatikan agar tidak menyilaukan.",
   "e": "Malam hari di jalan sempit, lampu bisa menyilaukan pengemudi lain, jadi sesuai situasi lampu diarahkan ke bawah atau dimatikan sebentar. (Hal.169)"
  }
 },
 {
  "id": "15-8",
  "cat": "学科15",
  "q": "進路（しんろ）を譲って（ゆずって）もらったときなどに、感謝（かんしゃ）の気持ち（きもち）を伝える（つたえる）ため、非常点滅表示灯（ひじょうてんめつひょうじとう）を短く（みじかく）点滅（てんめつ）させることがある。",
  "a": true,
  "exp": "進路（しんろ）を譲って（ゆずって）もらったときなどに、感謝（かんしゃ）の気持ち（きもち）を伝える（つたえる）ため、非常点滅表示灯（ひじょうてんめつひょうじとう）を短く（みじかく）点滅（てんめつ）させることがあります。（169P）",
  "img": null,
  "vi": {
   "q": "Khi được nhường đường v.v., để bày tỏ lòng cảm ơn, có khi nháy đèn khẩn cấp (hazard) một lúc ngắn.",
   "e": "Khi được nhường đường v.v., để bày tỏ cảm ơn, có khi nháy ngắn đèn khẩn cấp. (Trang 169)"
  },
  "ne": {
   "q": "बाटो छोडिदिँदा धन्यवादको भावना जनाउन हजार्ड बत्ती (आपतकालीन झिमझिम बत्ती) छोटो समय झिम्काउने गरिन्छ।",
   "e": "बाटो छोडिदिँदा धन्यवाद जनाउन हजार्ड बत्ती छोटो झिम्काउने चलन छ। (पृष्ठ 169)"
  },
  "en": {
   "q": "When someone yields the way to you, you may briefly flash the hazard lights to express thanks.",
   "e": "Briefly flashing the hazard lights to express thanks when yielded to is a common practice. (P.169)"
  },
  "idn": {
   "q": "Saat diberi jalan, kadang lampu hazard dikedipkan sebentar untuk menyampaikan terima kasih.",
   "e": "Mengedipkan lampu hazard sebentar untuk berterima kasih adalah kebiasaan umum. (Hal.169)"
  }
 },
 {
  "id": "15-9",
  "cat": "学科15",
  "q": "高速道路（こうそくどうろ）で渋滞（じゅうたい）の最後尾（さいこうび）に近づいた（ちかづいた）ときは、後続車（こうぞくしゃ）に注意（ちゅうい）を促す（うながす）ため、非常点滅表示灯（ひじょうてんめつひょうじとう）を点灯（てんとう）させることがある。",
  "a": true,
  "exp": "高速道路（こうそくどうろ）の渋滞（じゅうたい）の最後尾（さいこうび）では、追突防止（ついとつぼうし）のため非常点滅表示灯（ひじょうてんめつひょうじとう）で後続車（こうぞくしゃ）に注意（ちゅうい）を促します（うながします）。（169P）",
  "img": null,
  "vi": {
   "q": "Trên đường cao tốc, khi đến gần đuôi đoàn xe ùn tắc, có khi bật đèn khẩn cấp để nhắc xe phía sau chú ý.",
   "e": "Ở cuối đoàn ùn tắc trên đường cao tốc, bật đèn khẩn cấp để phòng tránh bị đâm từ phía sau và nhắc xe sau chú ý. (Trang 169)"
  },
  "ne": {
   "q": "हाइवेमा जामको पुछारमा पुग्न लाग्दा पछाडिका गाडीलाई सचेत गराउन हजार्ड बत्ती बाल्ने गरिन्छ।",
   "e": "हाइवेको जामको पुछारमा पछाडिबाट ठोकिनबाट जोगिन हजार्ड बत्तीले पछाडिका गाडीलाई सचेत गराइन्छ। (पृष्ठ 169)"
  },
  "en": {
   "q": "On an expressway, when approaching the tail of a traffic jam, you may turn on the hazard lights to alert vehicles behind.",
   "e": "At the tail of an expressway jam, hazard lights alert following vehicles and help prevent rear-end collisions. (P.169)"
  },
  "idn": {
   "q": "Di jalan tol, saat mendekati ekor kemacetan, lampu hazard boleh dinyalakan untuk memperingatkan kendaraan di belakang.",
   "e": "Di ekor kemacetan tol, lampu hazard memperingatkan kendaraan belakang dan mencegah tabrakan belakang. (Hal.169)"
  }
 },
 {
  "id": "15-10",
  "cat": "学科15",
  "q": "二輪車（にりんしゃ）は四輪車（よんりんしゃ）に比べて（くらべて）小さく（ちいさく）、遠く（とおく）にいても近く（ちかく）にいるように見える（みえる）ので注意（ちゅうい）する。",
  "a": false,
  "exp": "二輪車（にりんしゃ）は四輪車（よんりんしゃ）に比べて（くらべて）小さく（ちいさく）、近く（ちかく）にいても遠く（とおく）にいるように見える（みえる）ので注意（ちゅうい）します。（166P）",
  "img": null,
  "vi": {
   "q": "Xe hai bánh nhỏ hơn xe bốn bánh, nên dù ở xa vẫn trông như đang ở gần; cần chú ý.",
   "e": "Xe hai bánh nhỏ hơn xe bốn bánh nên dù ở gần vẫn trông như đang ở xa; cần chú ý. (Trang 166)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रे गाडी चारपाङ्ग्रेभन्दा सानो हुने भएकाले टाढा भए पनि नजिक देखिन्छ; ध्यान दिनुपर्छ।",
   "e": "दुईपाङ्ग्रे सानो हुने भएकाले नजिक भए पनि टाढा देखिन्छ; ध्यान दिनुपर्छ। (पृष्ठ 166)"
  },
  "en": {
   "q": "Two-wheeled vehicles are smaller than cars, so even when far away they look close; be careful.",
   "e": "Two-wheelers are smaller than cars, so even when close they look FAR away; be careful. (P.166)"
  },
  "idn": {
   "q": "Kendaraan roda dua lebih kecil dari mobil, sehingga meski jauh terlihat dekat; hati-hatilah.",
   "e": "Roda dua lebih kecil sehingga meski DEKAT terlihat JAUH; hati-hatilah. (Hal.166)"
  }
 },
 {
  "id": "16-1",
  "cat": "学科16",
  "q": "運転（うんてん）をするときは、気持ち（きもち）や時間（じかん）にゆとりを持つ（もつ）ことが大切（たいせつ）である。",
  "a": true,
  "exp": "あせらず落ち着いて（おちついて）運転（うんてん）するために、気持ち（きもち）と時間（じかん）にゆとりを持つ（もつ）必要（ひつよう）があります。（179P）",
  "img": null,
  "vi": {
   "q": "Khi lái xe, điều quan trọng là giữ sự thư thái về tinh thần và thời gian.",
   "e": "Để lái xe bình tĩnh không vội vàng, cần có sự dư dả về tinh thần và thời gian. (Trang 179)"
  },
  "ne": {
   "q": "गाडी चलाउँदा मन र समयमा फुर्सद (ग्याप) राख्नु महत्त्वपूर्ण छ।",
   "e": "हतार नगरी शान्त भएर चलाउन मन र समयमा फुर्सद चाहिन्छ। (पृष्ठ 179)"
  },
  "en": {
   "q": "When driving, it is important to have plenty of room in both mind and schedule.",
   "e": "To drive calmly without rushing, allow room in your mind and schedule. (P.179)"
  },
  "idn": {
   "q": "Saat mengemudi, penting untuk memiliki kelonggaran perasaan dan waktu.",
   "e": "Agar mengemudi tenang tanpa terburu-buru, sediakan kelonggaran perasaan dan waktu. (Hal.179)"
  }
 },
 {
  "id": "16-2",
  "cat": "学科16",
  "q": "運転適性検査（うんてんてきせいけんさ）は、自分（じぶん）の運転（うんてん）に関する（かんする）性格（せいかく）や行動（こうどう）の傾向（けいこう）を知り（しり）、安全運転（あんぜんうんてん）に役立てる（やくだてる）ためのものである。",
  "a": true,
  "exp": "検査結果（けんさけっか）を参考（さんこう）にして、自分（じぶん）の弱点（じゃくてん）を補う（おぎなう）運転（うんてん）を心がける（こころがける）ことが、安全運転（あんぜんうんてん）につながります。（172P）",
  "img": null,
  "vi": {
   "q": "Kiểm tra thích tính lái xe là để biết xu hướng tính cách và hành động của bản thân khi lái xe, và vận dụng vào việc lái xe an toàn.",
   "e": "Tham khảo kết quả kiểm tra, cố gắng lái xe bù đắp điểm yếu của mình sẽ giúp lái xe an toàn. (Trang 172)"
  },
  "ne": {
   "q": "ड्राइभिङ योग्यता परीक्षण आफ्नो स्वभाव र व्यवहारको प्रवृत्ति थाहा पाई सुरक्षित ड्राइभिङमा उपयोग गर्नका लागि हो।",
   "e": "परीक्षणको नतिजा हेरेर आफ्नो कमजोरी सच्याउने गरी चलाउँदा सुरक्षित ड्राइभिङ हुन्छ। (पृष्ठ 172)"
  },
  "en": {
   "q": "The driving aptitude test is meant to help you learn your personality and behavioral tendencies in driving and use them for safe driving.",
   "e": "Use the test results to compensate for your weak points — this leads to safe driving. (P.172)"
  },
  "idn": {
   "q": "Tes kecocokan mengemudi bertujuan mengetahui kecenderungan sifat dan perilaku diri dalam mengemudi untuk dimanfaatkan bagi keselamatan.",
   "e": "Manfaatkan hasil tes untuk menutupi kelemahan diri — itu mendukung keselamatan. (Hal.172)"
  }
 },
 {
  "id": "16-3",
  "cat": "学科16",
  "q": "事故（じこ）を何度（なんど）も起こして（おこして）いる人（ひと）は、運転技術（うんてんぎじゅつ）だけでなく、運転中（うんてんちゅう）の考え方（かんがえかた）や行動（こうどう）のくせを見直す（みなおす）ことが大切（たいせつ）である。",
  "a": true,
  "exp": "事故（じこ）を何度（なんど）も起こして（おこして）いる人（ひと）は、運転技術（うんてんぎじゅつ）だけが原因（げんいん）とは限りません（かぎりません）。たとえば、確認（かくにん）が不十分（ふじゅうぶん）、急ぎ（いそぎ）すぎる、車間距離（しゃかんきょり）が近い（ちかい）、危険（きけん）を軽く（かるく）考える（かんがえる）など、運転中（うんてんちゅう）の考え方（かんがえかた）や行動（こうどう）のくせが事故（じこ）につながっていることがあります。（172P）",
  "img": null,
  "vi": {
   "q": "Người gây tai nạn nhiều lần, không chỉ kỹ thuật lái mà cần xem lại cả cách suy nghĩ và thói quen hành động khi lái xe.",
   "e": "Người gây tai nạn nhiều lần không hẳn chỉ do kỹ thuật. Ví dụ: xác nhận không đủ, quá vội, khoảng cách xe quá gần, coi nhẹ nguy hiểm — những thói quen suy nghĩ và hành động này có thể dẫn đến tai nạn. (Trang 172)"
  },
  "ne": {
   "q": "पटक-पटक दुर्घटना गराउने व्यक्तिले ड्राइभिङ सीप मात्र नभई सोचाइ र बानी पनि पुनर्विचार गर्नु महत्त्वपूर्ण छ।",
   "e": "दुर्घटनाको कारण सीप मात्र नहुन सक्छ। जाँच अपुग, हतार, नजिकको दूरी, खतरालाई हल्का ठान्ने जस्ता बानीहरूले दुर्घटना गराउन सक्छन्। (पृष्ठ 172)"
  },
  "en": {
   "q": "For people who cause repeated accidents, it is important to review not only driving skill but also their way of thinking and behavioral habits while driving.",
   "e": "Repeated accidents are not necessarily due to skill alone. Insufficient checking, rushing, tailgating, underestimating danger — such habits can lead to accidents. (P.172)"
  },
  "idn": {
   "q": "Bagi orang yang sering mengalami kecelakaan, penting meninjau bukan hanya keterampilan tetapi juga cara berpikir dan kebiasaan perilaku saat mengemudi.",
   "e": "Kecelakaan berulang belum tentu karena keterampilan saja. Pemeriksaan kurang, terburu-buru, jarak terlalu dekat, meremehkan bahaya — kebiasaan itu bisa memicu kecelakaan. (Hal.172)"
  }
 },
 {
  "id": "16-4",
  "cat": "学科16",
  "q": "神経質傾向（しんけいしつけいこう）が強い（つよい）人（ひと）は、すべての場面（ばめん）で安全運転（あんぜんうんてん）ができるため、特に（とくに）注意（ちゅうい）する必要（ひつよう）はない。",
  "a": false,
  "exp": "神経質傾向（しんけいしつけいこう）が強い（つよい）人（ひと）は細やか（こまやか）な気遣い（きづかい）ができる反面（はんめん）、気になる（きになる）ことがあると、注意（ちゅうい）が散漫（さんまん）になったりすることがあります。（174P）",
  "img": null,
  "vi": {
   "q": "Người có xu hướng thần kinh nhạy cảm mạnh có thể lái xe an toàn trong mọi tình huống, nên không cần đặc biệt chú ý.",
   "e": "Người nhạy cảm chu đáo tỉ mỉ, nhưng ngược lại khi có điều bận tâm thì sự chú ý có thể bị phân tán. (Trang 174)"
  },
  "ne": {
   "q": "धेरै संवेदनशील स्वभावका मानिसले सबै अवस्थामा सुरक्षित चलाउन सक्ने भएकाले विशेष ध्यान आवश्यक छैन।",
   "e": "संवेदनशील व्यक्तिले मसिनो ध्यान दिन सक्छन्, तर चिन्ता लाग्ने कुरा भए ध्यान भङ्ग हुनसक्छ। (पृष्ठ 174)"
  },
  "en": {
   "q": "People with strong nervous tendencies can drive safely in all situations, so they need no particular caution.",
   "e": "Nervous people are attentive to detail, but when something bothers them their attention can become scattered. (P.174)"
  },
  "idn": {
   "q": "Orang yang sangat perasa dapat mengemudi dengan aman di segala situasi, jadi tidak perlu perhatian khusus.",
   "e": "Orang perasa teliti, tetapi jika ada yang mengganggu pikiran, perhatiannya bisa buyar. (Hal.174)"
  }
 },
 {
  "id": "16-5",
  "cat": "学科16",
  "q": "無理（むり）な追い越し（おいこし）や割り込み（わりこみ）をされて腹（はら）が立った（たった）ときは、追い越し返す（おいこしかえす）などして気分（きぶん）を落ち着かせる（おちつかせる）とよい。",
  "a": false,
  "exp": "感情的（かんじょうてき）になると、スピードの出しすぎ（だしすぎ）や危険（きけん）な運転（うんてん）につながり、事故（じこ）の原因（げんいん）になります。腹（はら）が立った（たった）ときこそ、深呼吸（しんこきゅう）をして車間距離（しゃかんきょり）をとり、冷静（れいせい）に運転（うんてん）することが大切（たいせつ）です。（179P）",
  "img": null,
  "vi": {
   "q": "Khi bị vượt ẩu hay chen ngang mà thấy tức giận, nên vượt trả lại để bình tĩnh lại.",
   "e": "Khi cảm xúc chi phối sẽ dẫn đến chạy quá tốc độ và lái xe nguy hiểm, gây tai nạn. Khi tức giận, hãy hít thở sâu, giữ khoảng cách xe và lái bình tĩnh. (Trang 179)"
  },
  "ne": {
   "q": "जबरजस्ती उछिनिँदा वा बीचमा छिरिँदा रिस उठे, आफूले पनि उछिनेर मन शान्त पार्नु राम्रो हो।",
   "e": "भावनामा बगे गति बढ्ने र खतरनाक ड्राइभिङ भई दुर्घटनाको कारण बन्छ। रिस उठ्दा गहिरो सास फेरेर दूरी राखी शान्त चलाउनु महत्त्वपूर्ण छ। (पृष्ठ 179)"
  },
  "en": {
   "q": "When angered by reckless overtaking or cutting in, it is good to overtake them back to calm yourself down.",
   "e": "Driving emotionally leads to speeding and dangerous driving. When angry, breathe deeply, keep distance, and drive calmly. (P.179)"
  },
  "idn": {
   "q": "Saat kesal karena disalip atau diserobot, sebaiknya balas menyalip untuk menenangkan diri.",
   "e": "Mengemudi dengan emosi memicu ngebut dan bahaya. Saat marah, tarik napas dalam, jaga jarak, dan tenanglah. (Hal.179)"
  }
 },
 {
  "id": "16-6",
  "cat": "学科16",
  "q": "自信過剰（じしんかじょう）になると、スピードを出しすぎて（だしすぎて）大きな（おおきな）事故（じこ）につながることがある。",
  "a": true,
  "exp": "運転（うんてん）に自信（じしん）を持ちすぎる（もちすぎる）と、危険（きけん）を軽く（かるく）考えたり（かんがえたり）、スピードを出しすぎたり（だしすぎたり）することがあります。その結果（けっか）、発見（はっけん）や判断（はんだん）が遅れ（おくれ）、大きな（おおきな）事故（じこ）につながるおそれがあります。（180P）",
  "img": null,
  "vi": {
   "q": "Khi quá tự tin, có thể chạy quá tốc độ và dẫn đến tai nạn lớn.",
   "e": "Quá tự tin vào tay lái sẽ coi nhẹ nguy hiểm, chạy quá nhanh, khiến phát hiện và phán đoán chậm trễ, có nguy cơ dẫn đến tai nạn lớn. (Trang 180)"
  },
  "ne": {
   "q": "अति आत्मविश्वासले गति बढाई ठूलो दुर्घटनामा पुर्‍याउन सक्छ।",
   "e": "अति आत्मविश्वासले खतरालाई हल्का ठान्ने, गति बढाउने भई पहिचान र निर्णय ढिलो हुन्छ र ठूलो दुर्घटना हुनसक्छ। (पृष्ठ 180)"
  },
  "en": {
   "q": "Overconfidence can lead to speeding and serious accidents.",
   "e": "Overconfidence leads to underestimating danger and speeding, delaying detection and judgment, risking serious accidents. (P.180)"
  },
  "idn": {
   "q": "Terlalu percaya diri dapat membuat ngebut dan berujung kecelakaan besar.",
   "e": "Terlalu percaya diri membuat meremehkan bahaya dan ngebut, memperlambat deteksi dan penilaian, berisiko kecelakaan besar. (Hal.180)"
  }
 },
 {
  "id": "16-7",
  "cat": "学科16",
  "q": "自分（じぶん）に優先権（ゆうせんけん）があれば、それを主張（しゅちょう）して運転（うんてん）したほうが安全（あんぜん）である。",
  "a": false,
  "exp": "自分（じぶん）に優先権（ゆうせんけん）があっても、それを振りかざせば（ふりかざせば）トラブルや交通（こうつう）の妨げ（さまたげ）になります。（174P）",
  "img": null,
  "vi": {
   "q": "Nếu mình có quyền ưu tiên thì khẳng định quyền đó khi lái xe sẽ an toàn hơn.",
   "e": "Dù mình có quyền ưu tiên, nếu cứ khăng khăng đòi quyền đó sẽ gây rắc rối và cản trở giao thông. (Trang 174)"
  },
  "ne": {
   "q": "आफूसँग प्राथमिकता अधिकार भए त्यो दाबी गरेर चलाउनु बढी सुरक्षित हुन्छ।",
   "e": "प्राथमिकता भए पनि त्यसलाई जिद्दी गरे झगडा र यातायात अवरोधको कारण बन्छ। (पृष्ठ 174)"
  },
  "en": {
   "q": "If you have the right of way, it is safer to assert it while driving.",
   "e": "Even with the right of way, insisting on it causes trouble and obstructs traffic. (P.174)"
  },
  "idn": {
   "q": "Jika Anda punya hak prioritas, lebih aman menegaskannya saat mengemudi.",
   "e": "Meski punya prioritas, memaksakannya menimbulkan masalah dan menghambat lalu lintas. (Hal.174)"
  }
 },
 {
  "id": "16-8",
  "cat": "学科16",
  "q": "自分勝手（じぶんかって）な運転（うんてん）は、周囲（しゅうい）の車（くるま）や歩行者（ほこうしゃ）に迷惑（めいわく）をかけるだけでなく、事故（じこ）につながる危険（きけん）がある。",
  "a": true,
  "exp": "自分勝手（じぶんかって）な運転（うんてん）は、周囲（しゅうい）の車（くるま）や歩行者（ほこうしゃ）に迷惑（めいわく）をかけるだけでなく、事故（じこ）の原因（げんいん）にもなります。（175P）",
  "img": null,
  "vi": {
   "q": "Lái xe tùy tiện theo ý mình không chỉ gây phiền hà cho xe và người đi bộ xung quanh mà còn có nguy cơ dẫn đến tai nạn.",
   "e": "Lái xe tùy tiện gây phiền hà cho xung quanh và cũng là nguyên nhân tai nạn. (Trang 175)"
  },
  "ne": {
   "q": "आफूखुसी ड्राइभिङले वरपरका गाडी र पैदल यात्रीलाई दुःख दिनुका साथै दुर्घटनाको खतरा पनि हुन्छ।",
   "e": "आफूखुसी ड्राइभिङ अरूलाई सताउने र दुर्घटनाको कारण पनि बन्छ। (पृष्ठ 175)"
  },
  "en": {
   "q": "Selfish driving not only troubles surrounding vehicles and pedestrians but also risks causing accidents.",
   "e": "Selfish driving troubles others and also causes accidents. (P.175)"
  },
  "idn": {
   "q": "Mengemudi seenaknya bukan hanya merugikan kendaraan dan pejalan kaki sekitar, tetapi juga berisiko menimbulkan kecelakaan.",
   "e": "Mengemudi seenaknya merugikan orang lain dan juga menjadi penyebab kecelakaan. (Hal.175)"
  }
 },
 {
  "id": "16-9",
  "cat": "学科16",
  "q": "免許（めんきょ）を受けて（うけて）1年（ねん）ほど運転（うんてん）すれば慣れて（なれて）くるので、初心者（しょしんしゃ）のときほど慎重（しんちょう）に運転（うんてん）しなくてもよい。",
  "a": false,
  "exp": "運転（うんてん）に慣れて（なれて）きた頃（ころ）が最も（もっとも）注意（ちゅうい）が必要（ひつよう）です。（180P）",
  "img": null,
  "vi": {
   "q": "Sau khi có bằng khoảng 1 năm sẽ quen tay lái, nên không cần lái thận trọng như thời mới lái nữa.",
   "e": "Thời điểm bắt đầu quen tay lái chính là lúc cần chú ý nhất. (Trang 180)"
  },
  "ne": {
   "q": "लाइसेन्स लिएको १ वर्षजति चलाएपछि बानी पर्ने भएकाले नयाँ बेलाजस्तो होसियार नभए पनि हुन्छ।",
   "e": "बानी पर्न थालेको बेला नै सबैभन्दा ध्यान आवश्यक हुन्छ। (पृष्ठ 180)"
  },
  "en": {
   "q": "After about a year of driving you get used to it, so you no longer need to drive as carefully as when you were a beginner.",
   "e": "The time when you start getting used to driving is when the most caution is needed. (P.180)"
  },
  "idn": {
   "q": "Setelah setahun mengemudi Anda terbiasa, jadi tidak perlu berhati-hati seperti saat pemula.",
   "e": "Masa mulai terbiasa justru saat yang paling memerlukan kehati-hatian. (Hal.180)"
  }
 },
 {
  "id": "16-10",
  "cat": "学科16",
  "q": "自分（じぶん）の性格（せいかく）や運転（うんてん）のくせを知り（しり）、慎重（しんちょう）に運転（うんてん）することが大切（たいせつ）である。",
  "a": true,
  "exp": "自分（じぶん）の性格（せいかく）やくせを理解（りかい）し、気持ち（きもち）をコントロールすることが大切（たいせつ）です。（172P）",
  "img": null,
  "vi": {
   "q": "Biết tính cách và thói quen lái xe của bản thân, lái xe thận trọng là điều quan trọng.",
   "e": "Hiểu tính cách và thói quen của mình, kiểm soát cảm xúc là điều quan trọng. (Trang 172)"
  },
  "ne": {
   "q": "आफ्नो स्वभाव र ड्राइभिङ बानी बुझेर होसियारीपूर्वक चलाउनु महत्त्वपूर्ण छ।",
   "e": "आफ्नो स्वभाव र बानी बुझेर भावना नियन्त्रण गर्नु महत्त्वपूर्ण छ। (पृष्ठ 172)"
  },
  "en": {
   "q": "It is important to know your personality and driving habits and to drive carefully.",
   "e": "Understand your personality and habits, and control your emotions. (P.172)"
  },
  "idn": {
   "q": "Penting mengetahui sifat dan kebiasaan mengemudi diri sendiri serta mengemudi dengan hati-hati.",
   "e": "Pahami sifat dan kebiasaan diri, kendalikan emosi. (Hal.172)"
  }
 },
 {
  "id": "17-1",
  "cat": "学科17",
  "q": "運転中（うんてんちゅう）は、注意力（ちゅういりょく）を高める（たかめる）ために、一点（いってん）だけを見つめて（みつめて）運転（うんてん）するほうがよい。",
  "a": false,
  "exp": "一点（いってん）を注視（ちゅうし）することは危険（きけん）です。視線（しせん）を一か所（いっかしょ）に固定（こてい）せず、周囲（しゅうい）を広く（ひろく）見渡して（みわたして）、交通状況（こうつうじょうきょう）を早め（はやめ）に把握（はあく）しましょう。（183P）",
  "img": null,
  "vi": {
   "q": "Khi lái xe, để nâng cao sự tập trung, nên nhìn chăm chú vào một điểm duy nhất.",
   "e": "Nhìn chăm chú một điểm là nguy hiểm. Không cố định ánh mắt một chỗ, hãy nhìn bao quát xung quanh để nắm bắt sớm tình hình giao thông. (Trang 183)"
  },
  "ne": {
   "q": "गाडी चलाउँदा ध्यान बढाउन एउटै बिन्दुमा मात्र हेरेर चलाउनु राम्रो हो।",
   "e": "एक बिन्दुमा एकोहोरो हेर्नु खतरनाक छ। नजर एकै ठाउँमा नअड्काई वरपर फराकिलो हेरेर स्थिति चाँडो बुझ्नुहोस्। (पृष्ठ 183)"
  },
  "en": {
   "q": "While driving, it is better to stare at a single point to heighten your attention.",
   "e": "Staring at one point is dangerous. Do not fix your gaze; scan widely to grasp traffic conditions early. (P.183)"
  },
  "idn": {
   "q": "Saat mengemudi, lebih baik menatap satu titik saja untuk meningkatkan konsentrasi.",
   "e": "Menatap satu titik itu berbahaya. Jangan memaku pandangan; pandanglah luas untuk memahami kondisi lebih awal. (Hal.183)"
  }
 },
 {
  "id": "17-2",
  "cat": "学科17",
  "q": "速度（そくど）が速く（はやく）なるほど視野（しや）が狭く（せまく）なり、危険（きけん）を見落とし（みおとし）やすくなる。",
  "a": true,
  "exp": "速度（そくど）が速く（はやく）なると、視力（しりょく）が低下（ていか）し視野（しや）も狭く（せまく）なるため、危険（きけん）の発見（はっけん）が遅れる（おくれる）おそれがあります。（183P）（184P）",
  "img": null,
  "vi": {
   "q": "Tốc độ càng nhanh thì tầm nhìn càng hẹp, càng dễ bỏ sót nguy hiểm.",
   "e": "Khi tốc độ nhanh, thị lực giảm và tầm nhìn hẹp lại, nên có nguy cơ phát hiện nguy hiểm chậm. (Trang 183, 184)"
  },
  "ne": {
   "q": "गति जति बढ्यो त्यति दृष्टिक्षेत्र साँघुरो भई खतरा छुटाउन सजिलो हुन्छ।",
   "e": "गति बढ्दा दृष्टि क्षमता घट्छ र दृष्टिक्षेत्र साँघुरिन्छ, खतरा पहिचान ढिलो हुनसक्छ। (पृष्ठ 183, 184)"
  },
  "en": {
   "q": "The faster the speed, the narrower the field of vision, making it easier to miss dangers.",
   "e": "At higher speeds, vision deteriorates and the field of view narrows, delaying danger detection. (P.183, 184)"
  },
  "idn": {
   "q": "Semakin cepat laju, semakin sempit bidang pandang sehingga mudah melewatkan bahaya.",
   "e": "Pada kecepatan tinggi, daya lihat menurun dan bidang pandang menyempit, deteksi bahaya terlambat. (Hal.183, 184)"
  }
 },
 {
  "id": "17-3",
  "cat": "学科17",
  "q": "眠気（ねむけ）をもよおすおそれのある薬（くすり）を服用（ふくよう）した場合（ばあい）は、安全（あんぜん）のため運転（うんてん）を控え（ひかえ）たほうがよい。",
  "a": true,
  "exp": "眠気（ねむけ）をもよおすおそれのある薬（くすり）を服用（ふくよう）した場合（ばあい）は、安全（あんぜん）のため運転（うんてん）を控え（ひかえ）ましょう。（190P）",
  "img": null,
  "vi": {
   "q": "Khi đã uống thuốc có thể gây buồn ngủ, vì an toàn nên tránh lái xe.",
   "e": "Khi uống thuốc có thể gây buồn ngủ, hãy tránh lái xe vì an toàn. (Trang 190)"
  },
  "ne": {
   "q": "निद्रा लगाउन सक्ने औषधि खाएको बेला सुरक्षाका लागि गाडी नचलाउनु राम्रो हो।",
   "e": "निद्रा लगाउन सक्ने औषधि खाएपछि गाडी चलाउनबाट जोगिनुहोस्। (पृष्ठ 190)"
  },
  "en": {
   "q": "If you have taken medicine that may cause drowsiness, you should refrain from driving for safety.",
   "e": "Refrain from driving after taking medicine that may cause drowsiness. (P.190)"
  },
  "idn": {
   "q": "Jika minum obat yang bisa menyebabkan kantuk, sebaiknya tidak mengemudi demi keselamatan.",
   "e": "Hindari mengemudi setelah minum obat yang bisa menyebabkan kantuk. (Hal.190)"
  }
 },
 {
  "id": "17-4",
  "cat": "学科17",
  "q": "運転中（うんてんちゅう）など動き（うごき）ながらものを見る（みる）場合（ばあい）でも、静止（せいし）しているときと視力（しりょく）は同じ（おなじ）である。",
  "a": false,
  "exp": "視力（しりょく）は、速度（そくど）が速く（はやく）なるにつれて低下（ていか）します。（183P）",
  "img": null,
  "vi": {
   "q": "Khi nhìn vật thể trong lúc đang di chuyển như khi lái xe, thị lực vẫn như khi đứng yên.",
   "e": "Thị lực giảm dần khi tốc độ tăng lên. (Trang 183)"
  },
  "ne": {
   "q": "गाडी चलाउँदा जस्तै चलिरहेको बेला वस्तु हेर्दा पनि दृष्टि क्षमता स्थिर अवस्थाकै जस्तो हुन्छ।",
   "e": "गति बढ्दै जाँदा दृष्टि क्षमता घट्दै जान्छ। (पृष्ठ 183)"
  },
  "en": {
   "q": "Even when viewing objects while moving, such as while driving, visual acuity is the same as when stationary.",
   "e": "Visual acuity decreases as speed increases. (P.183)"
  },
  "idn": {
   "q": "Saat melihat benda sambil bergerak seperti ketika mengemudi, daya penglihatan sama dengan saat diam.",
   "e": "Daya lihat menurun seiring bertambahnya kecepatan. (Hal.183)"
  }
 },
 {
  "id": "17-5",
  "cat": "学科17",
  "q": "反射時間（はんしゃじかん）とは、運転者（うんてんしゃ）が危険（きけん）を感じ（かんじ）、ブレーキが必要（ひつよう）だと判断（はんだん）してから、手（て）や足（あし）が実際（じっさい）に動き（うごき）始める（はじめる）までの時間（じかん）をいう。",
  "a": true,
  "exp": "運転者（うんてんしゃ）が危険（きけん）を感じ（かんじ）、ブレーキをかける必要（ひつよう）があると判断（はんだん）してから、手（て）や足（あし）が動き（うごき）始める（はじめる）までの時間（じかん）です。（182P）",
  "img": null,
  "vi": {
   "q": "Thời gian phản xạ là thời gian từ khi người lái cảm nhận nguy hiểm, phán đoán cần phanh, đến khi tay chân thực sự bắt đầu cử động.",
   "e": "Là thời gian từ khi người lái cảm nhận nguy hiểm và phán đoán cần phanh đến khi tay chân bắt đầu cử động. (Trang 182)"
  },
  "ne": {
   "q": "रिफ्लेक्स समय भनेको चालकले खतरा महसुस गरी ब्रेक आवश्यक ठानेदेखि हात-खुट्टा वास्तवमै चल्न थाल्दासम्मको समय हो।",
   "e": "खतरा महसुस गरी ब्रेक चाहिन्छ भन्ने निर्णयदेखि हात-खुट्टा चल्न थाल्दासम्मको समय हो। (पृष्ठ 182)"
  },
  "en": {
   "q": "Reaction time is the time from when the driver senses danger and judges braking necessary until the hands and feet actually begin to move.",
   "e": "It is the time from sensing danger and judging braking necessary until the hands/feet start moving. (P.182)"
  },
  "idn": {
   "q": "Waktu refleks adalah waktu sejak pengemudi merasakan bahaya dan menilai perlu mengerem hingga tangan dan kaki benar-benar mulai bergerak.",
   "e": "Yaitu waktu dari merasakan bahaya dan menilai perlu rem hingga tangan/kaki mulai bergerak. (Hal.182)"
  }
 },
 {
  "id": "17-6",
  "cat": "学科17",
  "q": "運転（うんてん）は「認知（にんち）・判断（はんだん）・操作（そうさ）」の繰り返し（くりかえし）であるが、その中（なか）で最も（もっとも）重要（じゅうよう）なのは操作（そうさ）であり、操作（そうさ）ミスが交通事故（こうつうじこ）の主な（おもな）原因（げんいん）である。",
  "a": false,
  "exp": "事故（じこ）の大半（たいはん）は、認知（にんち）の遅れ（おくれ）や誤り（あやまり）で起きて（おきて）います。（182P）",
  "img": null,
  "vi": {
   "q": "Lái xe là sự lặp lại của \"nhận biết – phán đoán – thao tác\", trong đó quan trọng nhất là thao tác, và lỗi thao tác là nguyên nhân chính của tai nạn giao thông.",
   "e": "Phần lớn tai nạn xảy ra do nhận biết chậm hoặc sai. (Trang 182)"
  },
  "ne": {
   "q": "ड्राइभिङ 「पहिचान–निर्णय–सञ्चालन」 को दोहोराइ हो, जसमा सबैभन्दा महत्त्वपूर्ण सञ्चालन हो र सञ्चालन गल्ती नै दुर्घटनाको मुख्य कारण हो।",
   "e": "अधिकांश दुर्घटना पहिचान ढिलो वा गलत भएर हुन्छन्। (पृष्ठ 182)"
  },
  "en": {
   "q": "Driving is a repetition of \"recognition, judgment, operation\"; the most important is operation, and operation errors are the main cause of accidents.",
   "e": "Most accidents occur from delayed or mistaken RECOGNITION. (P.182)"
  },
  "idn": {
   "q": "Mengemudi adalah pengulangan \"pengenalan–penilaian–pengoperasian\"; yang terpenting adalah pengoperasian, dan kesalahan operasi adalah penyebab utama kecelakaan.",
   "e": "Sebagian besar kecelakaan terjadi karena PENGENALAN yang terlambat atau keliru. (Hal.182)"
  }
 },
 {
  "id": "17-7",
  "cat": "学科17",
  "q": "自動車（じどうしゃ）の速度（そくど）が速く（はやく）なるにつれて視野（しや）は狭く（せまく）なり、遠方（えんぽう）は見えにくく（みえにくく）なるが、近く（ちかく）は見やすく（みやすく）なる。",
  "a": false,
  "exp": "速度（そくど）が速く（はやく）なるにつれて、見える（みえる）範囲（はんい）は狭く（せまく）なり、近く（ちかく）のものも確認（かくにん）しにくくなります。（184P）",
  "img": null,
  "vi": {
   "q": "Khi tốc độ ô tô tăng lên, tầm nhìn hẹp lại và khó thấy nơi xa, nhưng nơi gần lại dễ thấy hơn.",
   "e": "Khi tốc độ tăng, phạm vi nhìn thấy hẹp lại và cả vật ở gần cũng khó xác nhận hơn. (Trang 184)"
  },
  "ne": {
   "q": "गाडीको गति बढ्दै जाँदा दृष्टिक्षेत्र साँघुरिन्छ र टाढा देख्न गाह्रो हुन्छ, तर नजिक भने देख्न सजिलो हुन्छ।",
   "e": "गति बढ्दा देखिने दायरा साँघुरिन्छ र नजिकका वस्तु पनि हेर्न गाह्रो हुन्छ। (पृष्ठ 184)"
  },
  "en": {
   "q": "As vehicle speed increases, the field of view narrows and distant objects become harder to see, but nearby objects become easier to see.",
   "e": "As speed increases, the visible range narrows and even nearby objects become harder to confirm. (P.184)"
  },
  "idn": {
   "q": "Saat kecepatan bertambah, bidang pandang menyempit dan yang jauh sulit terlihat, tetapi yang dekat jadi lebih mudah terlihat.",
   "e": "Saat kecepatan naik, jangkauan pandang menyempit dan benda dekat pun sulit dipastikan. (Hal.184)"
  }
 },
 {
  "id": "17-8",
  "cat": "学科17",
  "q": "明順応（めいじゅんのう）のほうが、暗順応（あんじゅんのう）よりも時間（じかん）がかかる。",
  "a": false,
  "exp": "明るい（あかるい）場所（ばしょ）から暗い（くらい）場所（ばしょ）に入った（はいった）ときに目（め）が慣れる（なれる）暗順応（あんじゅんのう）は、時間（じかん）がかかります。（185P）",
  "img": null,
  "vi": {
   "q": "Thích ứng sáng (khi ra chỗ sáng) mất nhiều thời gian hơn thích ứng tối.",
   "e": "Thích ứng tối — khi từ chỗ sáng vào chỗ tối mắt cần làm quen — mất nhiều thời gian hơn. (Trang 185)"
  },
  "ne": {
   "q": "उज्यालो अनुकूलनलाई अँध्यारो अनुकूलनभन्दा बढी समय लाग्छ।",
   "e": "उज्यालोबाट अँध्यारोमा पस्दा आँखा बानी पर्ने अँध्यारो अनुकूलनलाई बढी समय लाग्छ। (पृष्ठ 185)"
  },
  "en": {
   "q": "Light adaptation takes longer than dark adaptation.",
   "e": "Dark adaptation — the eyes adjusting when entering a dark place from a bright one — takes longer. (P.185)"
  },
  "idn": {
   "q": "Adaptasi terang butuh waktu lebih lama daripada adaptasi gelap.",
   "e": "Adaptasi gelap — mata menyesuaikan saat masuk tempat gelap dari terang — butuh waktu lebih lama. (Hal.185)"
  }
 },
 {
  "id": "17-9",
  "cat": "学科17",
  "q": "夜間（やかん）や高速道路（こうそくどうろ）では、実際（じっさい）の速度（そくど）より遅く（おそく）感じ（かんじ）やすい。",
  "a": true,
  "exp": "夜間（やかん）や高速道路（こうそくどうろ）では、実際（じっさい）の速度（そくど）より遅く（おそく）感じ（かんじ）やすいので、注意（ちゅうい）が必要（ひつよう）です。（186P）",
  "img": null,
  "vi": {
   "q": "Ban đêm và trên đường cao tốc, dễ cảm thấy tốc độ chậm hơn thực tế.",
   "e": "Ban đêm và trên cao tốc dễ cảm thấy chậm hơn tốc độ thực tế, nên cần chú ý. (Trang 186)"
  },
  "ne": {
   "q": "राति र हाइवेमा वास्तविक गतिभन्दा ढिलो चलेको जस्तो महसुस हुन्छ।",
   "e": "राति र हाइवेमा वास्तविक गतिभन्दा ढिलो महसुस हुने भएकाले ध्यान आवश्यक छ। (पृष्ठ 186)"
  },
  "en": {
   "q": "At night and on expressways, it is easy to feel you are going slower than your actual speed.",
   "e": "At night and on expressways you tend to feel slower than actual speed, so be careful. (P.186)"
  },
  "idn": {
   "q": "Pada malam hari dan di jalan tol, kecepatan cenderung terasa lebih lambat dari yang sebenarnya.",
   "e": "Malam hari dan di tol terasa lebih lambat dari kecepatan sebenarnya, jadi hati-hati. (Hal.186)"
  }
 },
 {
  "id": "17-10",
  "cat": "学科17",
  "q": "同じ（おなじ）距離（きょり）にいても、大型（おおがた）の車両（しゃりょう）は遠く（とおく）に感じ（かんじ）、二輪車（にりんしゃ）など小型（こがた）の車両（しゃりょう）は近く（ちかく）に感じ（かんじ）る。",
  "a": false,
  "exp": "同じ（おなじ）距離（きょり）にいても、大型（おおがた）の車両（しゃりょう）は近く（ちかく）に感じ（かんじ）、二輪車（にりんしゃ）など小型（こがた）の車両（しゃりょう）は遠く（とおく）に感じ（かんじ）ます。（186P）",
  "img": null,
  "vi": {
   "q": "Dù ở cùng khoảng cách, xe cỡ lớn có cảm giác ở xa, còn xe nhỏ như xe hai bánh có cảm giác ở gần.",
   "e": "Dù cùng khoảng cách, xe lớn có cảm giác ở gần, xe nhỏ như xe hai bánh có cảm giác ở xa. (Trang 186)"
  },
  "ne": {
   "q": "एउटै दूरीमा भए पनि ठूलो गाडी टाढा र दुईपाङ्ग्रे जस्ता साना गाडी नजिक महसुस हुन्छन्।",
   "e": "एउटै दूरीमा ठूलो गाडी नजिक र साना गाडी टाढा महसुस हुन्छन्। (पृष्ठ 186)"
  },
  "en": {
   "q": "At the same distance, large vehicles feel farther away and small vehicles such as motorcycles feel closer.",
   "e": "At the same distance, large vehicles feel CLOSER and small ones such as motorcycles feel FARTHER. (P.186)"
  },
  "idn": {
   "q": "Pada jarak yang sama, kendaraan besar terasa lebih jauh dan kendaraan kecil seperti sepeda motor terasa lebih dekat.",
   "e": "Pada jarak sama, kendaraan besar terasa LEBIH DEKAT dan yang kecil terasa LEBIH JAUH. (Hal.186)"
  }
 },
 {
  "id": "18-1",
  "cat": "学科18",
  "q": "二輪車（にりんしゃ）の正しい（ただしい）乗車姿勢（じょうしゃしせい）は、手首（てくび）を下げ（さげ）、ハンドルを前（まえ）に押す（おす）ような気持ち（きもち）で、グリップを軽く（かるく）握ります（にぎります）。",
  "a": true,
  "exp": "二輪車（にりんしゃ）の正しい（ただしい）乗車姿勢（じょうしゃしせい）は、手首（てくび）を下げ（さげ）、ハンドルを前（まえ）に押す（おす）ような気持ち（きもち）で、グリップを軽く（かるく）握ります（にぎります）。（202P）",
  "img": null,
  "vi": {
   "q": "Tư thế ngồi đúng trên xe hai bánh là hạ cổ tay xuống, nắm nhẹ tay lái với cảm giác như đẩy ghi-đông về phía trước.",
   "e": "Tư thế đúng: hạ cổ tay, nắm nhẹ tay nắm với cảm giác đẩy ghi-đông về phía trước. (Trang 202)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रेको सही सवारी आसन: नाडी झुकाएर, ह्यान्डल अगाडि धकेल्ने भावले ग्रिप हलुका समात्ने हो।",
   "e": "सही आसन: नाडी झुकाएर ह्यान्डल अगाडि धकेल्ने भावले ग्रिप हलुका समात्ने। (पृष्ठ 202)"
  },
  "en": {
   "q": "The correct riding posture on a motorcycle is to lower your wrists and grip the handles lightly, as if pushing the handlebars forward.",
   "e": "Correct posture: lower the wrists, grip lightly as if pushing the handlebars forward. (P.202)"
  },
  "idn": {
   "q": "Postur berkendara motor yang benar: turunkan pergelangan tangan dan genggam grip dengan ringan seperti mendorong setang ke depan.",
   "e": "Postur benar: pergelangan turun, genggam ringan seolah mendorong setang ke depan. (Hal.202)"
  }
 },
 {
  "id": "18-2",
  "cat": "学科18",
  "q": "フェード現象（ふぇーどげんしょう）とは、長い（ながい）下り坂（くだりざか）などでブレーキを使いすぎ（つかいすぎ）たときに、ブレーキが過熱（かねつ）して効かなく（きかなく）なる現象（げんしょう）のことです。",
  "a": true,
  "exp": "フェード現象（ふぇーどげんしょう）とは、長い（ながい）下り坂（くだりざか）などでブレーキを使いすぎ（つかいすぎ）たときに、ブレーキが過熱（かねつ）して効かなく（きかなく）なる現象（げんしょう）のことです。（196P）",
  "img": null,
  "vi": {
   "q": "Hiện tượng fade là hiện tượng phanh bị quá nhiệt và mất tác dụng khi dùng phanh quá nhiều trên dốc xuống dài.",
   "e": "Hiện tượng fade: khi dùng phanh quá nhiều trên dốc xuống dài, phanh quá nhiệt và mất tác dụng. (Trang 196)"
  },
  "ne": {
   "q": "फेड घटना भनेको लामो ओरालोमा ब्रेक धेरै प्रयोग गर्दा ब्रेक तातिएर काम नगर्ने घटना हो।",
   "e": "फेड घटना: लामो ओरालोमा ब्रेक धेरै चलाउँदा तातिएर ब्रेक नलाग्ने हुन्छ। (पृष्ठ 196)"
  },
  "en": {
   "q": "Brake fade is a phenomenon in which the brakes overheat and stop working when used too much on long downhill slopes.",
   "e": "Fade: overusing the brakes on long descents overheats them and they stop working. (P.196)"
  },
  "idn": {
   "q": "Fenomena fade adalah rem yang terlalu panas dan tidak pakem karena terlalu sering dipakai di turunan panjang.",
   "e": "Fade: rem terlalu sering dipakai di turunan panjang menjadi panas dan tidak pakem. (Hal.196)"
  }
 },
 {
  "id": "18-3",
  "cat": "学科18",
  "q": "AT二輪車（えーてぃーにりんしゃ）の運転（うんてん）は、操作（そうさ）の負担（ふたん）が軽減（けいげん）されるので、安易（あんい）な気持ち（きもち）で取り扱う（とりあつかう）ことができる。",
  "a": false,
  "exp": "AT二輪車（えーてぃーにりんしゃ）は、クラッチ操作（そうさ）が不要（ふよう）なため操作（そうさ）の負担（ふたん）は軽減（けいげん）されますが、安易（あんい）な気持ち（きもち）で取り扱って（とりあつかって）はいけません。（201P）",
  "img": null,
  "vi": {
   "q": "Xe hai bánh số tự động (AT) giảm gánh nặng thao tác, nên có thể sử dụng với tâm thế dễ dãi.",
   "e": "Xe hai bánh AT không cần thao tác côn nên nhẹ gánh hơn, nhưng không được sử dụng với tâm thế dễ dãi. (Trang 201)"
  },
  "ne": {
   "q": "AT दुईपाङ्ग्रे चलाउन सजिलो हुने भएकाले हल्का मनले चलाउन सकिन्छ।",
   "e": "AT दुईपाङ्ग्रेमा क्लच नचाहिने भए पनि हल्का मनले चलाउनु हुँदैन। (पृष्ठ 201)"
  },
  "en": {
   "q": "AT motorcycles reduce the operating burden, so they can be handled casually.",
   "e": "AT motorcycles need no clutch operation, but must not be handled casually. (P.201)"
  },
  "idn": {
   "q": "Motor AT mengurangi beban pengoperasian sehingga boleh diperlakukan dengan santai.",
   "e": "Motor AT tanpa kopling memang lebih ringan, tetapi tidak boleh dianggap enteng. (Hal.201)"
  }
 },
 {
  "id": "18-4",
  "cat": "学科18",
  "q": "長い（ながい）下り坂（くだりざか）や急な（きゅうな）下り坂（くだりざか）を通行（つうこう）するときは、エンジンブレーキを多用（たよう）すると、フェード現象（ふぇーどげんしょう）やベーパーロック現象（べーぱーろっくげんしょう）が起こる（おこる）おそれがある。",
  "a": false,
  "exp": "長い（ながい）下り坂（くだりざか）や急な（きゅうな）下り坂（くだりざか）では、フットブレーキを使いすぎ（つかいすぎ）るとブレーキが過熱（かねつ）し、フェード現象（ふぇーどげんしょう）やベーパーロック現象（べーぱーろっくげんしょう）が起こる（おこる）おそれがあります。（196P）",
  "img": null,
  "vi": {
   "q": "Khi đi dốc xuống dài hoặc dốc gấp, dùng nhiều phanh động cơ (engine brake) có thể gây hiện tượng fade hay vapor lock.",
   "e": "Trên dốc xuống dài/gấp, dùng quá nhiều phanh chân (foot brake) làm phanh quá nhiệt, có thể gây hiện tượng fade hay vapor lock. (Trang 196)"
  },
  "ne": {
   "q": "लामो वा ठाडो ओरालोमा इन्जिन ब्रेक धेरै प्रयोग गर्दा फेड वा भेपर लक घटना हुनसक्छ।",
   "e": "लामो/ठाडो ओरालोमा फुट ब्रेक धेरै चलाउँदा ब्रेक तातिएर फेड वा भेपर लक घटना हुनसक्छ। (पृष्ठ 196)"
  },
  "en": {
   "q": "On long or steep downhill slopes, heavy use of the ENGINE brake may cause fade or vapor lock.",
   "e": "On long/steep descents, overusing the FOOT brake overheats it and may cause fade or vapor lock. (P.196)"
  },
  "idn": {
   "q": "Di turunan panjang atau curam, terlalu sering memakai engine brake dapat menyebabkan fade atau vapor lock.",
   "e": "Di turunan panjang/curam, terlalu sering memakai REM KAKI membuatnya panas dan dapat menyebabkan fade atau vapor lock. (Hal.196)"
  }
 },
 {
  "id": "18-5",
  "cat": "学科18",
  "q": "AT二輪車（えーてぃーにりんしゃ）の正しい（ただしい）乗車姿勢（じょうしゃしせい）は、ステップボードから足先（あしさき）が外（そと）に出ない（でない）ように、足先（あしさき）を外（そと）に向ける（むける）とよい。",
  "a": false,
  "exp": "AT二輪車（えーてぃーにりんしゃ）の正しい（ただしい）乗車姿勢（じょうしゃしせい）は、ステップボードから足先（あしさき）が外（そと）に出ない（でない）ように、足先（あしさき）をまっすぐ前（まえ）に向けます。（202P）",
  "img": null,
  "vi": {
   "q": "Tư thế đúng trên xe hai bánh AT là hướng mũi bàn chân ra ngoài để chân không thò ra khỏi bàn để chân.",
   "e": "Tư thế đúng trên xe AT: hướng mũi bàn chân thẳng về phía trước, không để thò ra ngoài bàn để chân. (Trang 202)"
  },
  "ne": {
   "q": "AT दुईपाङ्ग्रेको सही आसन: खुट्टाको पन्जा स्टेप बोर्डबाट बाहिर ननिस्कने गरी बाहिरतिर फर्काउने हो।",
   "e": "सही आसन: पन्जा बोर्डबाट बाहिर ननिस्कने गरी सीधा अगाडि फर्काउने हो। (पृष्ठ 202)"
  },
  "en": {
   "q": "The correct posture on an AT motorcycle is to point your toes outward so they do not stick out from the step board.",
   "e": "Correct posture: point the toes STRAIGHT AHEAD so they do not stick out from the step board. (P.202)"
  },
  "idn": {
   "q": "Postur benar di motor AT: arahkan ujung kaki ke luar agar tidak keluar dari papan pijakan.",
   "e": "Postur benar: ujung kaki diarahkan LURUS KE DEPAN agar tidak keluar dari pijakan. (Hal.202)"
  }
 },
 {
  "id": "18-6",
  "cat": "学科18",
  "q": "高速道路（こうそくどうろ）で大型自動二輪車（おおがたじどうにりんしゃ）を二人乗り（ふたりのり）で通行（つうこう）するときは、20歳以上（さいいじょう）で、普通二輪免許（ふつうにりんめんきょ）を受けて（うけて）3年（ねん）を経過（けいか）している場合（ばあい）は二人乗り（ふたりのり）をすることができる。",
  "a": true,
  "exp": "高速道路（こうそくどうろ）で大型自動二輪車（おおがたじどうにりんしゃ）を二人乗り（ふたりのり）で通行（つうこう）するときは、20歳以上（さいいじょう）で、大型自動二輪免許（おおがたじどうにりんめんきょ）または普通二輪免許（ふつうにりんめんきょ）を受けて（うけて）3年（ねん）を経過（けいか）している場合（ばあい）は二人乗り（ふたりのり）をすることができます。（208P）",
  "img": null,
  "vi": {
   "q": "Khi chở 2 người bằng mô tô cỡ lớn trên đường cao tốc, người từ 20 tuổi trở lên và đã có bằng mô tô phổ thông từ 3 năm trở lên thì được phép chở 2 người.",
   "e": "Trên cao tốc, được chở 2 người nếu từ 20 tuổi trở lên và đã có bằng mô tô cỡ lớn hoặc mô tô phổ thông từ 3 năm trở lên. (Trang 208)"
  },
  "ne": {
   "q": "हाइवेमा ठूलो मोटरसाइकलमा दुई जना चढ्न २० वर्ष माथि र साधारण दुईपाङ्ग्रे लाइसेन्स लिएको ३ वर्ष पुगेको भए मिल्छ।",
   "e": "हाइवेमा दुई जना चढ्न २० वर्ष माथि र ठूलो वा साधारण दुईपाङ्ग्रे लाइसेन्स ३ वर्ष पुगेको हुनुपर्छ। (पृष्ठ 208)"
  },
  "en": {
   "q": "To ride two-up on a large motorcycle on an expressway, you may do so if you are 20 or older and have held a standard motorcycle license for 3 years or more.",
   "e": "Two-up on expressways: allowed if 20 or older and holding a large or standard motorcycle license for 3+ years. (P.208)"
  },
  "idn": {
   "q": "Berboncengan dengan motor besar di jalan tol boleh jika berusia 20 tahun ke atas dan memegang SIM motor standar 3 tahun atau lebih.",
   "e": "Boncengan di tol: boleh jika 20 tahun ke atas dan memegang SIM motor besar atau standar 3 tahun lebih. (Hal.208)"
  }
 },
 {
  "id": "18-7",
  "cat": "学科18",
  "q": "二輪車（にりんしゃ）でカーブを曲がる（まがる）ときは、車体（しゃたい）を傾ける（かたむける）と危険（きけん）なので、車体（しゃたい）を傾けない（かたむけない）でハンドルを切って（きって）曲がる（まがる）とよい。",
  "a": false,
  "exp": "二輪車（にりんしゃ）でカーブを曲がる（まがる）ときは、ハンドルを大きく（おおきく）切って（きって）曲がる（まがる）のではなく、車体（しゃたい）を適度（てきど）に傾けて（かたむけて）曲がります（まがります）。（204P）",
  "img": null,
  "vi": {
   "q": "Khi vào cua bằng xe hai bánh, nghiêng xe là nguy hiểm, nên giữ xe thẳng và bẻ lái để vào cua.",
   "e": "Khi vào cua, không bẻ lái nhiều mà nghiêng xe vừa phải để vào cua. (Trang 204)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रेले घुम्तीमा गाडी ढल्काउनु खतरनाक भएकाले नढल्काई ह्यान्डल घुमाएर मोड्नु राम्रो हो।",
   "e": "घुम्तीमा ह्यान्डल धेरै नघुमाई गाडी उपयुक्त मात्रामा ढल्काएर मोड्ने हो। (पृष्ठ 204)"
  },
  "en": {
   "q": "When cornering on a motorcycle, leaning the bike is dangerous, so corner by turning the handlebars without leaning.",
   "e": "Corner by leaning the bike moderately, not by turning the handlebars sharply. (P.204)"
  },
  "idn": {
   "q": "Saat menikung dengan motor, memiringkan bodi berbahaya, jadi menikunglah dengan memutar setang tanpa memiringkan bodi.",
   "e": "Menikung dengan memiringkan bodi secukupnya, bukan memutar setang tajam. (Hal.204)"
  }
 },
 {
  "id": "18-8",
  "cat": "学科18",
  "q": "二輪車（にりんしゃ）は、体（からだ）で安定（あんてい）を保ち（たもち）ながら走り（はしり）、停止（ていし）すれば安定（あんてい）を失う（うしなう）という構造上（こうぞうじょう）の特性（とくせい）がある。",
  "a": true,
  "exp": "二輪車（にりんしゃ）は、体（からだ）で安定（あんてい）を保ち（たもち）ながら走り（はしり）、停止（ていし）すれば安定（あんてい）を失う（うしなう）という構造上（こうぞうじょう）の特性（とくせい）があります。（200P）",
  "img": null,
  "vi": {
   "q": "Xe hai bánh có đặc tính cấu trúc: giữ thăng bằng bằng cơ thể khi chạy, và mất thăng bằng khi dừng lại.",
   "e": "Xe hai bánh giữ thăng bằng bằng cơ thể khi chạy và mất thăng bằng khi dừng — đó là đặc tính cấu trúc. (Trang 200)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रे चल्दा शरीरले सन्तुलन राख्ने र रोकिँदा सन्तुलन गुम्ने संरचनागत विशेषता हुन्छ।",
   "e": "चल्दा शरीरले सन्तुलन राख्ने, रोकिँदा सन्तुलन गुम्ने यसको संरचनागत विशेषता हो। (पृष्ठ 200)"
  },
  "en": {
   "q": "Motorcycles have the structural characteristic of maintaining balance with the body while moving and losing balance when stopped.",
   "e": "Motorcycles keep balance via the body while moving and lose it when stopped — a structural characteristic. (P.200)"
  },
  "idn": {
   "q": "Motor punya karakteristik struktural: menjaga keseimbangan dengan tubuh saat berjalan dan kehilangan keseimbangan saat berhenti.",
   "e": "Motor seimbang lewat tubuh saat berjalan dan kehilangan keseimbangan saat berhenti — karakteristik strukturalnya. (Hal.200)"
  }
 },
 {
  "id": "18-9",
  "cat": "学科18",
  "q": "二輪車（にりんしゃ）でブレーキをかけるときは、乾燥（かんそう）した路面（ろめん）では前輪（ぜんりん）ブレーキをやや強く（つよく）、路面（ろめん）がすべりやすいときは後輪（こうりん）ブレーキをやや強く（つよく）かけるとよい。",
  "a": true,
  "exp": "二輪車（にりんしゃ）でブレーキをかけるときは、乾燥（かんそう）した路面（ろめん）では前輪（ぜんりん）ブレーキをやや強く（つよく）、路面（ろめん）がすべりやすいときは後輪（こうりん）ブレーキをやや強く（つよく）かけましょう。（205P）",
  "img": null,
  "vi": {
   "q": "Khi phanh xe hai bánh: trên mặt đường khô thì phanh trước hơi mạnh hơn, trên mặt đường trơn thì phanh sau hơi mạnh hơn.",
   "e": "Mặt đường khô: phanh trước hơi mạnh hơn. Mặt đường trơn: phanh sau hơi mạnh hơn. (Trang 205)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रेमा ब्रेक: सुक्खा सडकमा अगाडिको ब्रेक अलि बलियो, चिप्लो सडकमा पछाडिको ब्रेक अलि बलियो लगाउने हो।",
   "e": "सुक्खामा अगाडिको, चिप्लोमा पछाडिको ब्रेक अलि बलियो लगाउनुहोस्। (पृष्ठ 205)"
  },
  "en": {
   "q": "When braking on a motorcycle, apply the front brake slightly harder on dry roads and the rear brake slightly harder on slippery roads.",
   "e": "Dry roads: front brake slightly harder. Slippery roads: rear brake slightly harder. (P.205)"
  },
  "idn": {
   "q": "Saat mengerem motor: di jalan kering rem depan sedikit lebih kuat, di jalan licin rem belakang sedikit lebih kuat.",
   "e": "Jalan kering: rem depan lebih kuat. Jalan licin: rem belakang lebih kuat. (Hal.205)"
  }
 },
 {
  "id": "18-10",
  "cat": "学科18",
  "q": "速度（そくど）が2倍（ばい）になれば衝撃力（しょうげきりょく）も2倍（ばい）になる。",
  "a": false,
  "exp": "衝撃力（しょうげきりょく）は速度（そくど）に比例（ひれい）して大きく（おおきく）なるのではなく、速度（そくど）の2乗（じょう）に比例（ひれい）して大きく（おおきく）なります。そのため、速度（そくど）が2倍（ばい）になると、衝撃力（しょうげきりょく）は2倍（ばい）ではなく約（やく）4倍（ばい）になります。（198P）",
  "img": null,
  "vi": {
   "q": "Nếu tốc độ tăng gấp 2 lần thì lực va chạm cũng tăng gấp 2 lần.",
   "e": "Lực va chạm tỷ lệ với bình phương tốc độ, không phải tỷ lệ thuận. Tốc độ gấp 2 thì lực va chạm khoảng gấp 4. (Trang 198)"
  },
  "ne": {
   "q": "गति २ गुणा भए ठक्करको बल पनि २ गुणा हुन्छ।",
   "e": "ठक्करको बल गतिको वर्गसँग समानुपातिक हुन्छ। गति २ गुणा हुँदा बल करिब ४ गुणा हुन्छ। (पृष्ठ 198)"
  },
  "en": {
   "q": "If speed doubles, impact force also doubles.",
   "e": "Impact force is proportional to the SQUARE of speed. Double the speed means about 4 times the impact. (P.198)"
  },
  "idn": {
   "q": "Jika kecepatan 2 kali lipat, gaya benturan juga 2 kali lipat.",
   "e": "Gaya benturan sebanding dengan KUADRAT kecepatan. Kecepatan 2 kali berarti benturan sekitar 4 kali. (Hal.198)"
  }
 },
 {
  "id": "19-1",
  "cat": "学科19",
  "q": "夜間（やかん）、道路（どうろ）に駐停車（ちゅうていしゃ）する場合（ばあい）、道路照明（どうろしょうめい）などにより50メートル後方（こうほう）から確認（かくにん）できる場所（ばしょ）であっても、非常点滅表示灯（ひじょうてんめつひょうじとう）、駐車灯（ちゅうしゃとう）または尾灯（びとう）などをつけなければならない。",
  "a": false,
  "exp": "道路照明（どうろしょうめい）などにより50メートル後方（こうほう）から駐停車（ちゅうていしゃ）している車（くるま）が確認（かくにん）できる場所（ばしょ）では、これらの灯火（とうか）をつけなくてもよいとされています。（213P）",
  "img": null,
  "vi": {
   "q": "Ban đêm khi dừng/đỗ xe trên đường, dù ở nơi có đèn chiếu sáng giúp nhìn thấy xe từ 50m phía sau, vẫn phải bật đèn khẩn cấp, đèn đỗ xe hoặc đèn hậu.",
   "e": "Nơi có đèn đường giúp xác nhận xe đang dừng/đỗ từ 50m phía sau thì không cần bật các đèn này. (Trang 213)"
  },
  "ne": {
   "q": "राति सडकमा गाडी रोक्दा/पार्क गर्दा, बत्तीले ५० मिटर पछाडिबाट देखिने ठाउँमा पनि हजार्ड बत्ती, पार्किङ बत्ती वा टेल बत्ती बाल्नैपर्छ।",
   "e": "सडक बत्ती आदिले ५० मिटर पछाडिबाट देखिने ठाउँमा यी बत्ती नबाले पनि हुन्छ। (पृष्ठ 213)"
  },
  "en": {
   "q": "When stopping or parking on a road at night, even where street lighting makes the vehicle visible from 50 m behind, you must turn on the hazard, parking, or tail lights.",
   "e": "Where lighting makes the vehicle visible from 50 m behind, these lights are not required. (P.213)"
  },
  "idn": {
   "q": "Saat berhenti/parkir di jalan pada malam hari, meski penerangan jalan membuat kendaraan terlihat dari 50 m di belakang, lampu hazard, lampu parkir, atau lampu belakang tetap harus dinyalakan.",
   "e": "Di tempat yang penerangannya membuat kendaraan terlihat dari 50 m, lampu-lampu itu tidak wajib. (Hal.213)"
  }
 },
 {
  "id": "19-2",
  "cat": "学科19",
  "q": "昼間（ひるま）、運転中（うんてんちゅう）に霧（きり）が濃く（こく）なってきたため、前照灯（ぜんしょうとう）と霧灯（むとう）を点灯（てんとう）し、危険防止（きけんぼうし）のため警音器（けいおんき）を鳴らした（ならした）。",
  "a": true,
  "exp": "霧（きり）が濃い（こい）ときは、昼間（ひるま）でも前照灯（ぜんしょうとう）や霧灯（むとう）を点灯（てんとう）して、自車（じしゃ）の存在（そんざい）を知らせます（しらせます）。警音器（けいおんき）は原則（げんそく）としてむやみに鳴らして（ならして）はいけませんが、危険防止（きけんぼうし）のためやむを得ない（やむをえない）場合（ばあい）は使用（しよう）できるため、この問題（もんだい）は正しい（ただしい）です。（218P）",
  "img": null,
  "vi": {
   "q": "Ban ngày, khi sương mù dày lên trong lúc lái xe, đã bật đèn pha và đèn sương mù, và bấm còi để phòng ngừa nguy hiểm.",
   "e": "Khi sương mù dày, dù ban ngày cũng bật đèn pha/đèn sương mù để báo hiệu sự hiện diện. Còi về nguyên tắc không được bấm tùy tiện, nhưng được dùng khi bất khả kháng để phòng nguy hiểm, nên câu này đúng. (Trang 218)"
  },
  "ne": {
   "q": "दिउँसो हुस्सु बाक्लो भएकोले हेडलाइट र फग लाइट बालेर, खतरा रोक्न हर्न बजायो।",
   "e": "हुस्सु बाक्लो हुँदा दिउँसै पनि बत्ती बालेर आफ्नो उपस्थिति जनाउने। हर्न सामान्यतया जथाभावी बजाउनु हुँदैन तर खतरा रोक्न बाध्यताको अवस्थामा प्रयोग गर्न मिल्छ, त्यसैले यो सही हो। (पृष्ठ 218)"
  },
  "en": {
   "q": "In the daytime, as fog grew thick while driving, I turned on the headlights and fog lights and sounded the horn to prevent danger.",
   "e": "In thick fog, turn on headlights/fog lights even in daytime. The horn must not be used carelessly, but may be used when unavoidable to prevent danger — so this is correct. (P.218)"
  },
  "idn": {
   "q": "Siang hari, karena kabut menebal saat berkendara, saya menyalakan lampu depan dan lampu kabut serta membunyikan klakson untuk mencegah bahaya.",
   "e": "Saat kabut tebal, nyalakan lampu meski siang. Klakson pada dasarnya tak boleh sembarangan, tetapi boleh dipakai bila terpaksa demi mencegah bahaya — jadi ini benar. (Hal.218)"
  }
 },
 {
  "id": "19-3",
  "cat": "学科19",
  "q": "夜間（やかん）、室内灯（しつないとう）をつけて運転（うんてん）すると、車内（しゃない）が明るく（あかるく）なり、前方（ぜんぽう）の確認（かくにん）がしやすくなるので安全（あんぜん）である。",
  "a": false,
  "exp": "室内灯（しつないとう）は、バスを除き（のぞき）、走行中（そうこうちゅう）はつけないようにします。（214P）",
  "img": null,
  "vi": {
   "q": "Ban đêm, bật đèn trong xe khi lái sẽ làm trong xe sáng hơn, dễ xác nhận phía trước hơn nên an toàn.",
   "e": "Trừ xe buýt, không bật đèn trong xe khi đang chạy. (Trang 214)"
  },
  "ne": {
   "q": "राति भित्री बत्ती बालेर चलाउँदा गाडीभित्र उज्यालो भई अगाडि हेर्न सजिलो हुने भएकाले सुरक्षित हुन्छ।",
   "e": "बस बाहेक, चल्दै गर्दा भित्री बत्ती नबाल्नुहोस्। (पृष्ठ 214)"
  },
  "en": {
   "q": "At night, driving with the interior light on makes the inside brighter and the road ahead easier to see, so it is safe.",
   "e": "Except in buses, do not keep the interior light on while driving. (P.214)"
  },
  "idn": {
   "q": "Malam hari, mengemudi dengan lampu kabin menyala membuat interior terang dan jalan di depan lebih mudah terlihat, jadi aman.",
   "e": "Kecuali bus, jangan menyalakan lampu kabin saat berkendara. (Hal.214)"
  }
 },
 {
  "id": "19-4",
  "cat": "学科19",
  "q": "深い（ふかい）水たまり（みずたまり）を通った（とおった）あとは、ブレーキの効き（きき）が悪く（わるく）なることがあるため、低速（ていそく）で走行（そうこう）しながらブレーキを数回（すうかい）かけ、効き（きき）具合（ぐあい）を確認（かくにん）するとよい。",
  "a": true,
  "exp": "水たまり（みずたまり）を通過（つうか）したあとは、安全（あんぜん）な場所（ばしょ）で低速（ていそく）走行（そうこう）しながらブレーキを数回（すうかい）軽く（かるく）かけ、ブレーキの効き（きき）具合（ぐあい）を確認（かくにん）しましょう。ブレーキをかけることでドラムが乾いて（かわいて）効き（きき）が回復（かいふく）しやすくなります。（217P）",
  "img": null,
  "vi": {
   "q": "Sau khi đi qua vũng nước sâu, phanh có thể kém đi, nên vừa chạy chậm vừa đạp phanh vài lần để kiểm tra độ ăn của phanh.",
   "e": "Sau khi qua vũng nước, ở nơi an toàn hãy chạy chậm và đạp phanh nhẹ vài lần để kiểm tra. Phanh giúp tang trống khô và phục hồi độ ăn. (Trang 217)"
  },
  "ne": {
   "q": "गहिरो पानीको खोल्सो पार गरेपछि ब्रेक कम लाग्न सक्ने भएकाले ढिलो गतिमा चल्दै ब्रेक केही पटक लगाएर जाँच्नु राम्रो हो।",
   "e": "पानी पार गरेपछि सुरक्षित ठाउँमा ढिलो गतिमा ब्रेक हलुका केही पटक लगाएर जाँच्नुहोस्। ब्रेक सुकेर फेरि राम्रो लाग्छ। (पृष्ठ 217)"
  },
  "en": {
   "q": "After passing through a deep puddle, the brakes may work poorly, so drive slowly and apply the brakes several times to check them.",
   "e": "After a puddle, in a safe place drive slowly and apply the brakes lightly several times to check; braking dries the drums and restores effectiveness. (P.217)"
  },
  "idn": {
   "q": "Setelah melewati genangan dalam, rem bisa kurang pakem, jadi jalankan pelan sambil menginjak rem beberapa kali untuk memeriksa.",
   "e": "Setelah genangan, di tempat aman jalankan pelan dan rem ringan beberapa kali; pengereman mengeringkan tromol dan memulihkan daya rem. (Hal.217)"
  }
 },
 {
  "id": "19-5",
  "cat": "学科19",
  "q": "積雪（せきせつ）のある道路（どうろ）では、できるだけ、わだちを走行（そうこう）するとよい。",
  "a": true,
  "exp": "積雪（せきせつ）のある道路（どうろ）では、道路（どうろ）の端（はし）が分かり（わかり）にくく、ハンドル操作（そうさ）を誤る（あやまる）と横滑り（よこすべり）を起こし（おこし）やすくなります。また、雪（ゆき）の下（した）に見えない（みえない）危険（きけん）が隠れて（かくれて）いることもあるため、できるだけ他（ほか）の車（くるま）が通った（とおった）わだちを走行（そうこう）しましょう。（220P）",
  "img": null,
  "vi": {
   "q": "Trên đường có tuyết, nên chạy theo vết bánh xe (wadachi) càng nhiều càng tốt.",
   "e": "Trên đường tuyết, mép đường khó nhận biết, sai thao tác lái dễ trượt ngang, và dưới tuyết có thể ẩn nguy hiểm; nên chạy theo vết bánh xe của xe khác. (Trang 220)"
  },
  "ne": {
   "q": "हिउँ जमेको सडकमा सकेसम्म अरू गाडीको पाङ्ग्राको डोबमा चल्नु राम्रो हो।",
   "e": "हिउँको सडकमा किनारा छुट्याउन गाह्रो र चिप्लिने खतरा हुने भएकाले अरू गाडीको डोबमा चल्नुहोस्। (पृष्ठ 220)"
  },
  "en": {
   "q": "On snowy roads, you should drive in the wheel tracks (ruts) as much as possible.",
   "e": "On snow, road edges are unclear and steering errors cause skids; dangers may hide under snow, so follow other vehicles' tracks. (P.220)"
  },
  "idn": {
   "q": "Di jalan bersalju, sebaiknya melaju di bekas jejak roda kendaraan lain sebisa mungkin.",
   "e": "Di salju, tepi jalan tak jelas dan salah kemudi bisa selip; bahaya bisa tersembunyi di bawah salju, jadi ikuti jejak roda kendaraan lain. (Hal.220)"
  }
 },
 {
  "id": "19-6",
  "cat": "学科19",
  "q": "ハイドロプレーニング現象（げんしょう）とは、フットブレーキを使い過ぎる（つかいすぎる）ことにより、ブレーキパッドやディスクなどが過熱（かねつ）し、ブレーキ液内（えきない）に気泡（きほう）が発生（はっせい）する現象（げんしょう）をいう。",
  "a": false,
  "exp": "ハイドロプレーニング現象（げんしょう）とは、雨（あめ）の日などに高速走行（こうそくそうこう）すると、タイヤと路面（ろめん）の間（あいだ）に水（みず）の膜（まく）ができ、ハンドルやブレーキが効きにくく（ききにくく）なる現象（げんしょう）のことです。（217P）",
  "img": null,
  "vi": {
   "q": "Hiện tượng hydroplaning là hiện tượng do dùng phanh chân quá nhiều khiến má phanh, đĩa phanh quá nhiệt, sinh bọt khí trong dầu phanh.",
   "e": "Hydroplaning là hiện tượng khi chạy nhanh trời mưa, giữa lốp và mặt đường hình thành màng nước làm tay lái và phanh mất tác dụng. (Trang 217)"
  },
  "ne": {
   "q": "हाइड्रोप्लेनिङ भनेको फुट ब्रेक धेरै चलाउँदा ब्रेक प्याड तातिएर ब्रेक फ्लुइडमा हावाका फोका बन्ने घटना हो।",
   "e": "हाइड्रोप्लेनिङ: वर्षामा तीव्र गतिमा चल्दा टायर र सडकबीच पानीको पत्र बनी ह्यान्डल/ब्रेकले काम नगर्ने घटना हो। (पृष्ठ 217)"
  },
  "en": {
   "q": "Hydroplaning is a phenomenon in which overusing the foot brake overheats the pads and discs, producing air bubbles in the brake fluid.",
   "e": "Hydroplaning: at high speed in rain, a film of water forms between tires and road, making steering and braking ineffective. (P.217)"
  },
  "idn": {
   "q": "Hydroplaning adalah fenomena rem kaki yang terlalu sering dipakai membuat kampas dan cakram panas sehingga timbul gelembung udara dalam minyak rem.",
   "e": "Hydroplaning: melaju cepat saat hujan membentuk lapisan air antara ban dan jalan, setir dan rem tak berfungsi. (Hal.217)"
  }
 },
 {
  "id": "19-7",
  "cat": "学科19",
  "q": "走行中（そうこうちゅう）にエンジン（えんじん）のオーバーヒート（過熱（かねつ））に気づいた（きづいた）ときは、すぐにエンジン（えんじん）を停止（ていし）し、エンジン（えんじん）に水（みず）をかけて冷やす（ひやす）とよい。",
  "a": false,
  "exp": "エンジン（えんじん）がオーバーヒートしたときは、エンジン（えんじん）を止めず（とめず）に低速（ていそく）回転（かいてん）させて冷却（れいきゃく）させます。（222P）",
  "img": null,
  "vi": {
   "q": "Khi phát hiện động cơ quá nhiệt (overheat) lúc đang chạy, nên tắt máy ngay và dội nước lên động cơ để làm mát.",
   "e": "Khi overheat, không tắt máy mà để động cơ chạy không tải (vòng tua thấp) để làm mát. (Trang 222)"
  },
  "ne": {
   "q": "चल्दै गर्दा इन्जिन ओभरहिट भएको थाहा पाए तुरुन्तै इन्जिन बन्द गरी पानी हालेर चिस्याउनु राम्रो हो।",
   "e": "ओभरहिट हुँदा इन्जिन बन्द नगरी कम गतिमा घुमाएर चिस्याउने हो। (पृष्ठ 222)"
  },
  "en": {
   "q": "If you notice the engine overheating while driving, stop the engine at once and pour water on it to cool it.",
   "e": "When overheating, do not stop the engine; let it idle at low rpm to cool down. (P.222)"
  },
  "idn": {
   "q": "Jika menyadari mesin overheat saat berkendara, segera matikan mesin dan siram air untuk mendinginkannya.",
   "e": "Saat overheat, jangan matikan mesin; biarkan berputar pelan agar mendingin. (Hal.222)"
  }
 },
 {
  "id": "19-8",
  "cat": "学科19",
  "q": "夜間（やかん）、対向車（たいこうしゃ）のライトがまぶしいときは、ライトをよく見て（みて）、対向車（たいこうしゃ）の位置（いち）を確認（かくにん）するとよい。",
  "a": false,
  "exp": "対向車（たいこうしゃ）のライトがまぶしいときは、ライトを直接（ちょくせつ）見ない（みない）ようにし、視点（してん）をやや左前方（ひだりぜんぽう）に移して（うつして）、げん惑（げんわく）を避けます（さけます）。（211P）",
  "img": null,
  "vi": {
   "q": "Ban đêm khi đèn xe ngược chiều chói mắt, nên nhìn kỹ vào đèn để xác nhận vị trí xe đối diện.",
   "e": "Khi đèn xe ngược chiều chói, không nhìn thẳng vào đèn mà chuyển ánh mắt hơi về phía trước bên trái để tránh bị lóa. (Trang 211)"
  },
  "ne": {
   "q": "राति विपरीत गाडीको लाइट तिरमिर लाग्दा लाइटलाई राम्ररी हेरेर गाडीको स्थिति यकिन गर्नु राम्रो हो।",
   "e": "लाइट सीधै नहेरी नजर अलि बायाँ-अगाडि सारेर तिरमिरबाट जोगिनुहोस्। (पृष्ठ 211)"
  },
  "en": {
   "q": "At night when oncoming headlights are dazzling, look carefully at the lights to confirm the oncoming car's position.",
   "e": "Do not look directly at the lights; shift your gaze slightly to the left front to avoid dazzle. (P.211)"
  },
  "idn": {
   "q": "Malam hari saat lampu mobil dari arah berlawanan menyilaukan, pandanglah lampu itu baik-baik untuk memastikan posisinya.",
   "e": "Jangan menatap lampunya langsung; alihkan pandangan agak ke kiri depan untuk menghindari silau. (Hal.211)"
  }
 },
 {
  "id": "19-9",
  "cat": "学科19",
  "q": "蒸発現象（じょうはつげんしょう）とは、夜間（やかん）に自分（じぶん）の車（くるま）のライトと対向車（たいこうしゃ）のライトで、道路（どうろ）の中央付近（ちゅうおうふきん）にいる歩行者（ほこうしゃ）などが見えにくく（みえにくく）なることをいう。",
  "a": true,
  "exp": "蒸発現象（じょうはつげんしょう）とは、夜間（やかん）に自分（じぶん）の車（くるま）のライトと対向車（たいこうしゃ）のライトで、道路（どうろ）の中央付近（ちゅうおうふきん）にいる歩行者（ほこうしゃ）などが見えにくく（みえにくく）なることをいいます。（211P）",
  "img": null,
  "vi": {
   "q": "Hiện tượng bốc hơi (蒸発現象) là hiện tượng ban đêm, do đèn xe mình và đèn xe ngược chiều, người đi bộ ở giữa đường trở nên khó nhìn thấy.",
   "e": "Hiện tượng bốc hơi: ban đêm, đèn xe mình và xe ngược chiều làm người đi bộ gần giữa đường trở nên khó thấy. (Trang 211)"
  },
  "ne": {
   "q": "वाष्पीकरण घटना भनेको राति आफ्नो र विपरीत गाडीको लाइटले सडकको बीचतिरका पैदल यात्री देख्न गाह्रो हुने घटना हो।",
   "e": "राति दुवै गाडीको लाइट मिलेर बीच सडकका पैदल यात्री नदेखिने घटनालाई वाष्पीकरण घटना भनिन्छ। (पृष्ठ 211)"
  },
  "en": {
   "q": "The evaporation phenomenon is when, at night, your headlights and oncoming headlights make pedestrians near the road center hard to see.",
   "e": "The evaporation phenomenon: at night, your lights and oncoming lights make pedestrians near the center hard to see. (P.211)"
  },
  "idn": {
   "q": "Fenomena evaporasi adalah pejalan kaki di sekitar tengah jalan menjadi sulit terlihat pada malam hari akibat lampu mobil sendiri dan lampu mobil dari arah berlawanan.",
   "e": "Fenomena evaporasi: malam hari, lampu sendiri dan lampu lawan membuat pejalan kaki di tengah jalan sulit terlihat. (Hal.211)"
  }
 },
 {
  "id": "19-10",
  "cat": "学科19",
  "q": "後輪（こうりん）が右（みぎ）に横すべり（よこすべり）したので、アクセルをゆるめて、左（ひだり）にハンドルを切り（きり）、向き（むき）を立て直し（たてなおし）、ゆるやかにアクセルペダルを踏みこんだ（ふみこんだ）。",
  "a": false,
  "exp": "後輪（こうりん）が右（みぎ）に横すべり（よこすべり）したときは、後輪（こうりん）がすべった方向（ほうこう）である右（みぎ）にハンドルを切って（きって）、車（くるま）の向き（むき）を立て直し（たてなおし）ます。（223P）",
  "img": null,
  "vi": {
   "q": "Bánh sau trượt ngang sang phải, nên đã nhả ga, bẻ lái sang trái để chỉnh lại hướng xe, rồi đạp ga từ từ.",
   "e": "Khi bánh sau trượt sang phải, bẻ lái sang phải — hướng bánh sau bị trượt — để chỉnh lại hướng xe. (Trang 223)"
  },
  "ne": {
   "q": "पछाडिको पाङ्ग्रा दायाँ चिप्लिएकोले एक्सेल छोडेर बायाँ ह्यान्डल घुमाई दिशा मिलाएर बिस्तारै एक्सेल थिच्यो।",
   "e": "पछाडिको पाङ्ग्रा दायाँ चिप्लिए, चिप्लिएकै दिशा अर्थात् दायाँ ह्यान्डल घुमाएर दिशा मिलाउने हो। (पृष्ठ 223)"
  },
  "en": {
   "q": "The rear wheels skidded to the right, so I eased off the accelerator, steered left to straighten the car, and then gently pressed the accelerator.",
   "e": "When the rear skids right, steer RIGHT — the direction of the skid — to straighten the car. (P.223)"
  },
  "idn": {
   "q": "Roda belakang selip ke kanan, jadi saya melepas gas, memutar setir ke kiri untuk meluruskan arah, lalu menekan gas perlahan.",
   "e": "Saat roda belakang selip ke kanan, putar setir ke KANAN — searah selip — untuk meluruskan mobil. (Hal.223)"
  }
 },
 {
  "id": "20-1",
  "cat": "学科20",
  "q": "二輪車（にりんしゃ）を運転（うんてん）するときは、体（からだ）の露出（ろしゅつ）ができるだけ少ない（すくない）服装（ふくそう）を選ぶ（えらぶ）とよい。",
  "a": true,
  "exp": "二輪車（にりんしゃ）を運転（うんてん）するときは、体（からだ）の露出（ろしゅつ）ができるだけ少ない（すくない）服装（ふくそう）を選び（えらび）ます。（236P）",
  "img": null,
  "vi": {
   "q": "Khi lái xe hai bánh, nên chọn trang phục để lộ cơ thể càng ít càng tốt.",
   "e": "Khi lái xe hai bánh, chọn trang phục để lộ cơ thể càng ít càng tốt. (Trang 236)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रे चलाउँदा शरीर सकेसम्म कम खुल्ने लुगा छान्नु राम्रो हो।",
   "e": "शरीर कम खुल्ने लुगा छान्नुहोस्। (पृष्ठ 236)"
  },
  "en": {
   "q": "When riding a motorcycle, choose clothing that exposes as little skin as possible.",
   "e": "Choose clothing that exposes as little of the body as possible. (P.236)"
  },
  "idn": {
   "q": "Saat mengendarai motor, pilih pakaian yang seminimal mungkin memperlihatkan kulit.",
   "e": "Pilih pakaian yang menutupi tubuh sebanyak mungkin. (Hal.236)"
  }
 },
 {
  "id": "20-2",
  "cat": "学科20",
  "q": "交通事故（こうつうじこ）を起こして（おこして）損害賠償（そんがいばいしょう）の責任（せきにん）を負った（おった）場合（ばあい）は、刑事上（けいじじょう）の責任（せきにん）や行政処分（ぎょうせいしょぶん）は問われない（とわれない）。",
  "a": false,
  "exp": "交通事故（こうつうじこ）を起こす（おこす）と、損害賠償（そんがいばいしょう）の責任（せきにん）だけでなく、刑事上（けいじじょう）の責任（せきにん）や行政処分（ぎょうせいしょぶん）を受ける（うける）ことがあります。損害賠償（そんがいばいしょう）をすれば、ほかの責任（せきにん）がなくなるわけではありません。交通事故（こうつうじこ）では、刑事上（けいじじょう）・行政上（ぎょうせいじょう）・民事上（みんじじょう）の責任（せきにん）が問われます（とわれます）。（237P）",
  "img": null,
  "vi": {
   "q": "Khi gây tai nạn và chịu trách nhiệm bồi thường thiệt hại, thì không bị truy cứu trách nhiệm hình sự hay xử phạt hành chính.",
   "e": "Khi gây tai nạn, ngoài trách nhiệm bồi thường còn có thể chịu trách nhiệm hình sự và xử phạt hành chính. Tai nạn giao thông bị truy cứu 3 loại trách nhiệm: hình sự, hành chính, dân sự. (Trang 237)"
  },
  "ne": {
   "q": "दुर्घटना गराई क्षतिपूर्तिको जिम्मेवारी लिएपछि फौजदारी जिम्मेवारी वा प्रशासनिक कारबाही हुँदैन।",
   "e": "क्षतिपूर्तिका अलावा फौजदारी र प्रशासनिक जिम्मेवारी पनि हुनसक्छ। दुर्घटनामा फौजदारी, प्रशासनिक र देवानी तीनै जिम्मेवारी सोधिन्छ। (पृष्ठ 237)"
  },
  "en": {
   "q": "If you bear liability for damages after causing an accident, you will not face criminal liability or administrative punishment.",
   "e": "An accident can bring criminal liability and administrative punishment in addition to damages. Traffic accidents involve criminal, administrative, and civil liability. (P.237)"
  },
  "idn": {
   "q": "Jika sudah menanggung ganti rugi setelah menyebabkan kecelakaan, tidak akan dikenai tanggung jawab pidana atau sanksi administratif.",
   "e": "Kecelakaan bisa membawa tanggung jawab pidana dan sanksi administratif selain ganti rugi. Kecelakaan menyangkut tanggung jawab pidana, administratif, dan perdata. (Hal.237)"
  }
 },
 {
  "id": "20-3",
  "cat": "学科20",
  "q": "交通事故（こうつうじこ）による死者（ししゃ）の中（なか）では、高齢者（こうれいしゃ）が占める（しめる）割合（わりあい）が高い（たかい）。",
  "a": true,
  "exp": "交通事故死者数（こうつうじこししゃすう）の中（なか）では、高齢者（こうれいしゃ）の割合（わりあい）が高く（たかく）なっています。高齢者（こうれいしゃ）は事故（じこ）にあうと重大（じゅうだい）なけがにつながりやすいため、運転者（うんてんしゃ）は特に（とくに）注意（ちゅうい）して運転（うんてん）する必要（ひつよう）があります。（231P）",
  "img": null,
  "vi": {
   "q": "Trong số người chết vì tai nạn giao thông, tỷ lệ người cao tuổi chiếm phần cao.",
   "e": "Tỷ lệ người cao tuổi trong số tử vong do tai nạn cao. Người cao tuổi dễ bị thương nặng, nên người lái phải đặc biệt chú ý. (Trang 231)"
  },
  "ne": {
   "q": "सडक दुर्घटनामा मृत्यु हुनेहरूमा वृद्धवृद्धाको अनुपात उच्च छ।",
   "e": "मृतकमध्ये वृद्धवृद्धाको अनुपात उच्च छ। उनीहरूलाई गम्भीर चोट लाग्ने भएकाले विशेष ध्यान दिनुहोस्। (पृष्ठ 231)"
  },
  "en": {
   "q": "Among traffic accident fatalities, the elderly account for a high proportion.",
   "e": "The elderly account for a high share of fatalities and are prone to serious injury, so drivers must take special care. (P.231)"
  },
  "idn": {
   "q": "Di antara korban tewas kecelakaan lalu lintas, proporsi lansia tinggi.",
   "e": "Proporsi lansia di antara korban tewas tinggi dan mereka rentan cedera berat, jadi pengemudi harus ekstra hati-hati. (Hal.231)"
  }
 },
 {
  "id": "20-4",
  "cat": "学科20",
  "q": "カーブでは、事故件数（じこけんすう）は交差点（こうさてん）に比べて（くらべて）少ない（すくない）ものの、死亡事故（しぼうじこ）につながる割合（わりあい）は高い（たかい）。",
  "a": true,
  "exp": "カーブでは事故件数（じこけんすう）は少なくても、速度超過（そくどちょうか）や車線（しゃせん）はみ出し（はみだし）により、重大（じゅうだい）事故（じこ）につながりやすくなります。カーブの手前（てまえ）で十分（じゅうぶん）に速度（そくど）を落とし（おとし）、安全（あんぜん）な速度（そくど）で通行（つうこう）することが大切（たいせつ）です。（231P）",
  "img": null,
  "vi": {
   "q": "Tại khúc cua, số vụ tai nạn ít hơn so với giao lộ, nhưng tỷ lệ dẫn đến tai nạn chết người cao.",
   "e": "Tại khúc cua, tuy số vụ ít nhưng do quá tốc độ và lấn làn nên dễ thành tai nạn nghiêm trọng. Hãy giảm tốc đầy đủ trước khúc cua. (Trang 231)"
  },
  "ne": {
   "q": "घुम्तीमा दुर्घटना संख्या चोकभन्दा कम भए पनि मृत्यु हुने दुर्घटनाको अनुपात उच्च छ।",
   "e": "घुम्तीमा संख्या कम भए पनि तीव्र गति र लेन काट्नाले गम्भीर दुर्घटना हुन्छ। घुम्तीअघि गति घटाउनुहोस्। (पृष्ठ 231)"
  },
  "en": {
   "q": "On curves, the number of accidents is smaller than at intersections, but the proportion leading to fatal accidents is high.",
   "e": "On curves, though fewer, speeding and lane departure make accidents severe. Slow down sufficiently before the curve. (P.231)"
  },
  "idn": {
   "q": "Di tikungan, jumlah kecelakaan lebih sedikit daripada di persimpangan, tetapi proporsi yang berujung kematian tinggi.",
   "e": "Di tikungan, meski sedikit, ngebut dan keluar jalur membuat kecelakaan fatal. Kurangi kecepatan sebelum tikungan. (Hal.231)"
  }
 },
 {
  "id": "20-5",
  "cat": "学科20",
  "q": "交通事故（こうつうじこ）を起こした場合（ばあい）、被害者（ひがいしゃ）本人（ほんにん）だけでなく、その家族（かぞく）にも大きな（おおきな）苦痛（くつう）を与える（あたえる）ことになる。",
  "a": true,
  "exp": "交通事故（こうつうじこ）は、被害者（ひがいしゃ）やその家族（かぞく）に大きな（おおきな）苦痛（くつう）を与える（あたえる）だけでなく、事故（じこ）を起こした（おこした）運転者（うんてんしゃ）やその家族（かぞく）にも大きな（おおきな）負担（ふたん）や苦しみ（くるしみ）をもたらします。（237P）",
  "img": null,
  "vi": {
   "q": "Khi gây tai nạn giao thông, không chỉ nạn nhân mà cả gia đình họ cũng phải chịu nỗi đau lớn.",
   "e": "Tai nạn gây đau khổ lớn cho nạn nhân và gia đình họ, đồng thời cũng mang gánh nặng và khổ đau cho người gây tai nạn và gia đình. (Trang 237)"
  },
  "ne": {
   "q": "दुर्घटना गराएमा पीडित मात्र नभई उनको परिवारलाई पनि ठूलो पीडा पुग्छ।",
   "e": "दुर्घटनाले पीडित र परिवारलाई पीडा दिनुका साथै चालक र उसको परिवारलाई पनि ठूलो बोझ र दुःख दिन्छ। (पृष्ठ 237)"
  },
  "en": {
   "q": "Causing a traffic accident brings great suffering not only to the victim but also to the victim's family.",
   "e": "Accidents bring suffering to victims and their families, and heavy burdens to the driver and the driver's family as well. (P.237)"
  },
  "idn": {
   "q": "Menyebabkan kecelakaan memberi penderitaan besar bukan hanya pada korban tetapi juga keluarganya.",
   "e": "Kecelakaan menyengsarakan korban dan keluarganya, serta membebani pengemudi dan keluarganya juga. (Hal.237)"
  }
 },
 {
  "id": "20-6",
  "cat": "学科20",
  "q": "夜間（やかん）は昼間（ちゅうかん）に比べて（くらべて）、交通事故（こうつうじこ）が死亡事故（しぼうじこ）につながる割合（わりあい）が高い（たかい）。",
  "a": true,
  "exp": "夜間（やかん）は視界（しかい）が悪く（わるく）、歩行者（ほこうしゃ）や自転車（じてんしゃ）などの発見（はっけん）が遅れ（おくれ）やすいため、事故（じこ）が死亡事故（しぼうじこ）につながりやすくなります。速度（そくど）を落とし（おとし）、ライトを活用（かつよう）して安全確認（あんぜんかくにん）を徹底（てってい）しましょう。（232P）",
  "img": null,
  "vi": {
   "q": "Ban đêm so với ban ngày, tỷ lệ tai nạn giao thông dẫn đến chết người cao hơn.",
   "e": "Ban đêm tầm nhìn kém, phát hiện người đi bộ, xe đạp chậm nên dễ thành tai nạn chết người. Giảm tốc độ và tận dụng đèn. (Trang 232)"
  },
  "ne": {
   "q": "रातिका दुर्घटना दिउँसोका तुलनामा मृत्युमा पुग्ने अनुपात उच्च छ।",
   "e": "राति दृश्यता कम भई पैदल यात्री देख्न ढिलो हुने भएकाले मृत्यु हुने दुर्घटना बढी हुन्छ। गति घटाई लाइट प्रयोग गर्नुहोस्। (पृष्ठ 232)"
  },
  "en": {
   "q": "At night, the proportion of accidents that become fatal is higher than in the daytime.",
   "e": "At night, visibility is poor and pedestrians are noticed late, so accidents easily turn fatal. Slow down and use your lights well. (P.232)"
  },
  "idn": {
   "q": "Pada malam hari, proporsi kecelakaan yang berujung kematian lebih tinggi daripada siang hari.",
   "e": "Malam hari pandangan buruk dan pejalan kaki terlambat terlihat, kecelakaan mudah menjadi fatal. Pelankan laju dan manfaatkan lampu. (Hal.232)"
  }
 },
 {
  "id": "20-7",
  "cat": "学科20",
  "q": "二輪車（にりんしゃ）に乗車（じょうしゃ）する際（さい）は、工事用（こうじよう）ヘルメットを使用（しよう）してはならない。",
  "a": true,
  "exp": "工事用（こうじよう）ヘルメットは、二輪車（にりんしゃ）で転倒（てんとう）・衝突（しょうとつ）したときの衝撃（しょうげき）から頭（あたま）を守る（まもる）ためのものではありません。二輪車（にりんしゃ）に乗る（のる）ときは、乗車用（じょうしゃよう）ヘルメットを正しく（ただしく）着用（ちゃくよう）する必要（ひつよう）があります。（236P）",
  "img": null,
  "vi": {
   "q": "Khi đi xe hai bánh, không được sử dụng mũ bảo hộ công trường.",
   "e": "Mũ công trường không được thiết kế để bảo vệ đầu khi ngã/va chạm xe hai bánh. Phải đội đúng mũ bảo hiểm dành cho người đi xe. (Trang 236)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रेमा चढ्दा निर्माण-स्थलको हेलमेट प्रयोग गर्नु हुँदैन।",
   "e": "निर्माण हेलमेट दुईपाङ्ग्रेको ठक्कर/लडाइको लागि बनेको होइन। सवारी हेलमेट नै सही तरिकाले लगाउनुपर्छ। (पृष्ठ 236)"
  },
  "en": {
   "q": "You must not use a construction helmet when riding a motorcycle.",
   "e": "Construction helmets are not designed to protect the head in motorcycle falls or crashes. Wear a proper riding helmet correctly. (P.236)"
  },
  "idn": {
   "q": "Saat naik motor, tidak boleh menggunakan helm proyek (konstruksi).",
   "e": "Helm proyek tidak dirancang melindungi kepala saat jatuh/tabrakan motor. Pakailah helm berkendara dengan benar. (Hal.236)"
  }
 },
 {
  "id": "20-8",
  "cat": "学科20",
  "q": "二輪車（にりんしゃ）を運転（うんてん）するときは、強い（つよい）衝撃（しょうげき）を受けた（うけた）ヘルメットや、使用期限（しようきげん）を過ぎた（すぎた）ヘルメットは使用（しよう）しない。",
  "a": true,
  "exp": "一度（いちど）強い（つよい）衝撃（しょうげき）を受けた（うけた）ヘルメットは、外見（がいけん）に異常（いじょう）がなくても内部（ないぶ）が傷んで（いたんで）いることがあります。また、長期間（ちょうきかん）使用（しよう）したヘルメットは、素材（そざい）が劣化（れっか）して十分（じゅうぶん）な保護性能（ほごせいのう）を発揮（はっき）できない場合（ばあい）があります。（236P）",
  "img": null,
  "vi": {
   "q": "Khi lái xe hai bánh, không dùng mũ bảo hiểm đã chịu va đập mạnh hoặc đã quá hạn sử dụng.",
   "e": "Mũ từng chịu va đập mạnh có thể hỏng bên trong dù bên ngoài bình thường. Mũ dùng lâu, chất liệu lão hóa, không còn bảo vệ đầy đủ. (Trang 236)"
  },
  "ne": {
   "q": "बलियो धक्का लागेको वा म्याद सकिएको हेलमेट प्रयोग गर्नु हुँदैन।",
   "e": "धक्का लागेको हेलमेट बाहिर ठिक देखिए पनि भित्र बिग्रिएको हुनसक्छ। पुरानो हेलमेटको सामग्री कमजोर भई सुरक्षा दिन सक्दैन। (पृष्ठ 236)"
  },
  "en": {
   "q": "When riding a motorcycle, do not use a helmet that has taken a strong impact or is past its expiration.",
   "e": "A helmet that took a strong impact may be damaged inside even if it looks fine; old helmets deteriorate and lose protection. (P.236)"
  },
  "idn": {
   "q": "Saat naik motor, jangan memakai helm yang pernah terbentur keras atau sudah lewat masa pakainya.",
   "e": "Helm yang pernah terbentur bisa rusak di dalam meski tampak baik; helm lama bahannya menua dan kehilangan daya lindung. (Hal.236)"
  }
 },
 {
  "id": "20-9",
  "cat": "学科20",
  "q": "チャイルドシートは、交通事故（こうつうじこ）の被害（ひがい）を軽く（かるく）するだけでなく、子ども（こども）が運転（うんてん）の妨げ（さまたげ）になることを防ぐ（ふせぐ）効果（こうか）もある。",
  "a": true,
  "exp": "チャイルドシートは、事故（じこ）の被害（ひがい）を軽く（かるく）するだけでなく、子ども（こども）が車内（しゃない）で動き回って（うごきまわって）運転（うんてん）の妨げ（さまたげ）になることを防ぐ（ふせぐ）役割（やくわり）もあります。子ども（こども）の体格（たいかく）に合った（あった）ものを正しく（ただしく）使用（しよう）しましょう。（240P）",
  "img": null,
  "vi": {
   "q": "Ghế trẻ em không chỉ giảm nhẹ thiệt hại khi tai nạn mà còn có tác dụng ngăn trẻ gây cản trở việc lái xe.",
   "e": "Ghế trẻ em giảm thiệt hại khi tai nạn và ngăn trẻ di chuyển trong xe gây cản trở lái xe. Dùng loại phù hợp với thể hình của trẻ. (Trang 240)"
  },
  "ne": {
   "q": "चाइल्ड सिटले दुर्घटनाको क्षति घटाउनुका साथै बच्चाले ड्राइभिङमा बाधा पुर्‍याउन नदिने काम पनि गर्छ।",
   "e": "चाइल्ड सिटले क्षति घटाउँछ र बच्चा गाडीभित्र हलचल गरी बाधा दिनबाट रोक्छ। शरीर सुहाउँदो प्रयोग गर्नुहोस्। (पृष्ठ 240)"
  },
  "en": {
   "q": "Child seats not only reduce injury in accidents but also prevent children from interfering with driving.",
   "e": "Child seats reduce injury and keep children from moving around and interfering with driving. Use one that fits the child. (P.240)"
  },
  "idn": {
   "q": "Kursi anak bukan hanya meringankan cedera saat kecelakaan tetapi juga mencegah anak mengganggu pengemudian.",
   "e": "Kursi anak meringankan cedera dan mencegah anak bergerak mengganggu pengemudian. Pakai yang sesuai postur anak. (Hal.240)"
  }
 },
 {
  "id": "20-10",
  "cat": "学科20",
  "q": "妊娠中（にんしんちゅう）は、腰ベルト（こしべると）だけを使用（しよう）し、肩ベルト（かたべると）は使わない（つかわない）ほうがよい。",
  "a": false,
  "exp": "妊娠中（にんしんちゅう）でも、腰ベルト（こしべると）と肩ベルト（かたべると）を併用（へいよう）して正しく（ただしく）着用（ちゃくよう）することで、母体（ぼたい）と胎児（たいじ）を守る（まもる）ことができます。腰ベルト（こしべると）だけを使用（しよう）するのは適切（てきせつ）ではありません。（239P）",
  "img": null,
  "vi": {
   "q": "Khi mang thai, nên chỉ dùng dây an toàn phần hông, không dùng dây phần vai.",
   "e": "Khi mang thai, dùng cả dây hông lẫn dây vai đúng cách sẽ bảo vệ được mẹ và thai nhi. Chỉ dùng dây hông là không phù hợp. (Trang 239)"
  },
  "ne": {
   "q": "गर्भवती अवस्थामा कम्मरको बेल्ट मात्र लगाई काँधको बेल्ट नलगाउनु राम्रो हो।",
   "e": "कम्मर र काँध दुवै बेल्ट सही लगाउँदा आमा र गर्भको शिशु दुवै जोगिन्छन्। कम्मरको मात्र लगाउनु उपयुक्त होइन। (पृष्ठ 239)"
  },
  "en": {
   "q": "During pregnancy, it is better to use only the lap belt and not the shoulder belt.",
   "e": "Use both lap and shoulder belts correctly to protect mother and baby. Lap belt alone is not appropriate. (P.239)"
  },
  "idn": {
   "q": "Saat hamil, lebih baik memakai sabuk pinggang saja tanpa sabuk bahu.",
   "e": "Pakailah sabuk pinggang dan bahu dengan benar untuk melindungi ibu dan janin. Sabuk pinggang saja tidak tepat. (Hal.239)"
  }
 },
 {
  "id": "21-1",
  "cat": "学科21",
  "q": "自家用（じかよう）の普通乗用自動車（ふつうじょうようじどうしゃ）の日常点検（にちじょうてんけん）は、走行距離（そうこうきょり）や使用状況（しようじょうきょう）などを考えて（かんがえて）適切（てきせつ）な時期（じき）に行い（おこない）、事業用自動車（じぎょうようじどうしゃ）やレンタカーなどは、1日（いちにち）1回（いっかい）、運行前（うんこうまえ）に点検（てんけん）しなければならない。",
  "a": true,
  "exp": "自家用（じかよう）の普通乗用自動車（ふつうじょうようじどうしゃ）の日常点検（にちじょうてんけん）は、走行距離（そうこうきょり）や使用状況（しようじょうきょう）に応じて（おうじて）適切（てきせつ）な時期（じき）に行います（おこないます）。事業用自動車（じぎょうようじどうしゃ）やレンタカーなどは、安全確保（あんぜんかくほ）のため、1日（いちにち）1回（いっかい）、運行前（うんこうまえ）に点検（てんけん）する必要（ひつよう）があります。（249P）",
  "img": null,
  "vi": {
   "q": "Kiểm tra hàng ngày với xe con tự dùng được thực hiện vào thời điểm thích hợp tùy quãng đường và tình trạng sử dụng; xe kinh doanh và xe cho thuê phải kiểm tra mỗi ngày 1 lần trước khi vận hành.",
   "e": "Xe con tự dùng: kiểm tra hàng ngày vào thời điểm thích hợp theo quãng đường/tình trạng sử dụng. Xe kinh doanh, xe cho thuê: phải kiểm tra 1 lần/ngày trước khi vận hành. (Trang 249)"
  },
  "ne": {
   "q": "निजी कारको दैनिक जाँच दूरी र प्रयोग हेरी उपयुक्त समयमा गर्ने; व्यावसायिक गाडी र भाडाका गाडी दिनको १ पटक, चलाउनुअघि जाँच्नुपर्छ।",
   "e": "निजी कार: उपयुक्त समयमा। व्यावसायिक/भाडाका गाडी: सुरक्षाका लागि दिनको १ पटक चलाउनुअघि जाँच अनिवार्य। (पृष्ठ 249)"
  },
  "en": {
   "q": "Daily inspection of a private passenger car is done at appropriate times considering mileage and usage; commercial vehicles and rental cars must be inspected once a day before operation.",
   "e": "Private cars: inspect at appropriate times based on mileage/usage. Commercial vehicles and rental cars: once a day before operation. (P.249)"
  },
  "idn": {
   "q": "Pemeriksaan harian mobil pribadi dilakukan pada waktu yang tepat sesuai jarak tempuh dan pemakaian; kendaraan niaga dan mobil sewa wajib diperiksa sekali sehari sebelum dioperasikan.",
   "e": "Mobil pribadi: pada waktu yang tepat sesuai pemakaian. Kendaraan niaga/sewa: wajib sekali sehari sebelum operasi. (Hal.249)"
  }
 },
 {
  "id": "21-2",
  "cat": "学科21",
  "q": "バッテリー液（バッテリーえき）が不足（ふそく）したときは、水道水（すいどうすい）やエンジンオイルを補充（ほじゅう）するとよい。",
  "a": false,
  "exp": "バッテリー液（バッテリーえき）が不足（ふそく）したときは、水道水（すいどうすい）やエンジンオイルではなく、蒸留水（じょうりゅうすい）を補充（ほじゅう）します。液量（えきりょう）は上限（じょうげん）と下限（かげん）の間（あいだ）に保つ（たもつ）ことが大切（たいせつ）です。（243P）",
  "img": null,
  "vi": {
   "q": "Khi nước bình ắc-quy thiếu, nên bổ sung nước máy hoặc dầu động cơ.",
   "e": "Khi thiếu, bổ sung nước cất chứ không phải nước máy hay dầu máy. Giữ mực nước giữa vạch trên và vạch dưới. (Trang 243)"
  },
  "ne": {
   "q": "ब्याट्रीको पानी कम भए धाराको पानी वा इन्जिन आयल थप्नु राम्रो हो।",
   "e": "धाराको पानी वा आयल होइन, डिस्टिल्ड वाटर (आसुत पानी) थप्ने हो। मात्रा माथिल्लो र तल्लो रेखाबीच राख्नुहोस्। (पृष्ठ 243)"
  },
  "en": {
   "q": "When battery fluid is low, top it up with tap water or engine oil.",
   "e": "Top up with distilled water, not tap water or engine oil. Keep the level between the upper and lower limits. (P.243)"
  },
  "idn": {
   "q": "Saat cairan aki berkurang, tambahkan air keran atau oli mesin.",
   "e": "Tambahkan air suling, bukan air keran atau oli. Jaga level antara batas atas dan bawah. (Hal.243)"
  }
 },
 {
  "id": "21-3",
  "cat": "学科21",
  "q": "二輪車（にりんしゃ）のチェーンは、切断（せつだん）を防ぐ（ふせぐ）ために、できるだけ強く（つよく）張って（はって）おくとよい。",
  "a": false,
  "exp": "二輪車（にりんしゃ）のチェーンは、張り過ぎ（はりすぎ）てもゆる過ぎ（ゆるすぎ）ても危険（きけん）です。切断（せつだん）を防ぐ（ふせぐ）ためには、できるだけ強く（つよく）張るのではなく、適切（てきせつ）なたるみに調整（ちょうせい）する必要（ひつよう）があります。（254P）",
  "img": null,
  "vi": {
   "q": "Xích xe hai bánh nên căng càng chặt càng tốt để tránh bị đứt.",
   "e": "Xích quá căng hay quá chùng đều nguy hiểm. Cần điều chỉnh độ chùng phù hợp chứ không phải căng hết mức. (Trang 254)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रेको चेन चुँडिन नदिन सकेसम्म कसेर राख्नु राम्रो हो।",
   "e": "धेरै कसिए वा धेरै खुकुलिए दुवै खतरनाक। उपयुक्त खुकुलोपनमा मिलाउने हो। (पृष्ठ 254)"
  },
  "en": {
   "q": "A motorcycle chain should be tightened as much as possible to prevent it from snapping.",
   "e": "A chain too tight or too loose is dangerous. Adjust it to the proper slack, not maximum tension. (P.254)"
  },
  "idn": {
   "q": "Rantai motor sebaiknya dikencangkan sekencang mungkin agar tidak putus.",
   "e": "Rantai terlalu kencang atau terlalu kendur sama-sama berbahaya. Atur kekenduran yang tepat, bukan sekencang mungkin. (Hal.254)"
  }
 },
 {
  "id": "21-4",
  "cat": "学科21",
  "q": "タイヤを取り付ける（とりつける）ときは、ナットを対角線（たいかくせん）の順（じゅん）に均等（きんとう）に締め付ける（しめつける）。",
  "a": true,
  "exp": "タイヤを取り付ける（とりつける）ときは、ナットを対角線（たいかくせん）の順（じゅん）に均等（きんとう）に締め付け（しめつけ）ます。（247P）",
  "img": null,
  "vi": {
   "q": "Khi lắp lốp xe, siết các đai ốc đều nhau theo thứ tự đường chéo.",
   "e": "Khi lắp lốp, siết đai ốc đều nhau theo thứ tự đường chéo. (Trang 247)"
  },
  "ne": {
   "q": "टायर जडान गर्दा नटहरू विकर्ण (क्रस) क्रममा बराबर कस्ने हो।",
   "e": "नटहरू विकर्ण क्रममा बराबर कस्नुहोस्। (पृष्ठ 247)"
  },
  "en": {
   "q": "When mounting a tire, tighten the nuts evenly in a diagonal (criss-cross) order.",
   "e": "Tighten the nuts evenly in diagonal order. (P.247)"
  },
  "idn": {
   "q": "Saat memasang ban, kencangkan mur secara merata dengan urutan diagonal (silang).",
   "e": "Kencangkan mur merata dengan urutan diagonal. (Hal.247)"
  }
 },
 {
  "id": "21-5",
  "cat": "学科21",
  "q": "タイヤチェーンは、駆動方式（くどうほうしき）にかかわらず、後輪（こうりん）に装着（そうちゃく）しなければならない。",
  "a": false,
  "exp": "タイヤチェーンは、原則（げんそく）として駆動輪（くどうりん）に装着（そうちゃく）します。前輪駆動車（ぜんりんくどうしゃ）は前輪（ぜんりん）、後輪駆動車（こうりんくどうしゃ）は後輪（こうりん）に装着（そうちゃく）するため、この文章（ぶんしょう）は誤り（あやまり）です。（248P）",
  "img": null,
  "vi": {
   "q": "Xích chống trượt (tire chain) phải lắp vào bánh sau bất kể phương thức dẫn động.",
   "e": "Xích lắp vào bánh dẫn động (nguyên tắc). Xe dẫn động bánh trước lắp bánh trước, xe dẫn động bánh sau lắp bánh sau — nên câu này sai. (Trang 248)"
  },
  "ne": {
   "q": "टायर चेन ड्राइभ प्रणाली जे भए पनि पछाडिको पाङ्ग्रामा लगाउनुपर्छ।",
   "e": "चेन ड्राइभ पाङ्ग्रामा लगाउने हो। अगाडि-ड्राइभ गाडीमा अगाडि, पछाडि-ड्राइभमा पछाडि — त्यसैले यो गलत हो। (पृष्ठ 248)"
  },
  "en": {
   "q": "Tire chains must be fitted to the rear wheels regardless of the drive system.",
   "e": "Chains go on the DRIVE wheels: front wheels for FWD, rear wheels for RWD — so this is wrong. (P.248)"
  },
  "idn": {
   "q": "Rantai ban harus dipasang di roda belakang apa pun sistem penggeraknya.",
   "e": "Rantai dipasang di roda PENGGERAK: FWD di depan, RWD di belakang — jadi ini salah. (Hal.248)"
  }
 },
 {
  "id": "21-6",
  "cat": "学科21",
  "q": "ブレーキペダルを踏んだ（ふんだ）とき、踏みごたえ（ふみごたえ）がやわらかいほど、ブレーキのききはよい。",
  "a": false,
  "exp": "踏みごたえ（ふみごたえ）がやわらかい場合は、ブレーキ液（ブレーキえき）の漏れ（もれ）や空気（くうき）の混入（こんにゅう）によるブレーキのきき不良（ふりょう）のおそれがあります。（250P）",
  "img": null,
  "vi": {
   "q": "Khi đạp phanh, cảm giác bàn đạp càng mềm thì phanh càng ăn.",
   "e": "Bàn đạp mềm có thể do rò rỉ dầu phanh hay lọt khí, dẫn đến phanh kém. (Trang 250)"
  },
  "ne": {
   "q": "ब्रेक पेडल थिच्दा जति नरम महसुस भयो त्यति ब्रेक राम्रो लाग्छ।",
   "e": "नरम महसुस भए ब्रेक फ्लुइड चुहिएको वा हावा पसेको हुनसक्छ, ब्रेक कम लाग्ने खतरा हुन्छ। (पृष्ठ 250)"
  },
  "en": {
   "q": "The softer the brake pedal feels when pressed, the better the brakes are working.",
   "e": "A soft pedal may mean fluid leakage or air in the lines — poor braking. (P.250)"
  },
  "idn": {
   "q": "Semakin empuk injakan pedal rem, semakin pakem remnya.",
   "e": "Pedal empuk bisa berarti kebocoran minyak rem atau udara masuk — rem kurang pakem. (Hal.250)"
  }
 },
 {
  "id": "21-7",
  "cat": "学科21",
  "q": "ブレーキ液（ブレーキえき）は減りやすい（へりやすい）ので、不足（ふそく）したときはこまめに補充（ほじゅう）すればよい。",
  "a": false,
  "exp": "ブレーキ液（ブレーキえき）は、通常（つうじょう）は頻繁（ひんぱん）に補充（ほじゅう）するものではありません。液量（えきりょう）の減りが激しいときは、液漏れ（えきもれ）のおそれがあります。不足（ふそく）している場合は、原因（げんいん）を点検（てんけん）する必要（ひつよう）があります。（251P）",
  "img": null,
  "vi": {
   "q": "Dầu phanh dễ hao, nên khi thiếu chỉ cần bổ sung thường xuyên là được.",
   "e": "Dầu phanh thường không phải bổ sung thường xuyên. Hao nhanh là dấu hiệu rò rỉ; khi thiếu cần kiểm tra nguyên nhân. (Trang 251)"
  },
  "ne": {
   "q": "ब्रेक फ्लुइड चाँडै घट्ने भएकाले कम भएपिच्छे थपे पुग्छ।",
   "e": "सामान्यतया बारम्बार थप्ने चीज होइन। छिटो घटे चुहावटको शङ्का हुन्छ; कारण जाँच्नुपर्छ। (पृष्ठ 251)"
  },
  "en": {
   "q": "Brake fluid decreases easily, so when it is low, just topping it up frequently is fine.",
   "e": "Brake fluid normally does not need frequent topping up. Rapid loss suggests a leak; check the cause. (P.251)"
  },
  "idn": {
   "q": "Minyak rem mudah berkurang, jadi jika kurang cukup sering ditambah saja.",
   "e": "Minyak rem biasanya tak perlu sering ditambah. Berkurang cepat berarti bocor; periksa penyebabnya. (Hal.251)"
  }
 },
 {
  "id": "21-8",
  "cat": "学科21",
  "q": "ファンベルトは、中央部（ちゅうおうぶ）を手（て）で押して（おして）も、まったくたわまないほど張って（はって）いるのがよい。",
  "a": false,
  "exp": "ファンベルトは、少し（すこし）たわむ程度（ていど）であるかを点検（てんけん）します。（252P）",
  "img": null,
  "vi": {
   "q": "Dây đai quạt (fan belt) căng đến mức ấn tay vào giữa cũng hoàn toàn không võng là tốt.",
   "e": "Kiểm tra dây đai sao cho có độ võng nhẹ khi ấn. (Trang 252)"
  },
  "ne": {
   "q": "फ्यान बेल्ट बीचमा हातले थिच्दा पटक्कै नझुक्ने गरी कसिएको राम्रो हो।",
   "e": "अलिकति झुक्ने गरी कसिएको छ कि भनी जाँच्ने हो। (पृष्ठ 252)"
  },
  "en": {
   "q": "A fan belt should be so tight that it does not flex at all when pressed by hand at its center.",
   "e": "Check that the belt flexes slightly when pressed. (P.252)"
  },
  "idn": {
   "q": "Fan belt sebaiknya begitu kencang hingga sama sekali tidak melentur saat ditekan tangan di tengahnya.",
   "e": "Periksa bahwa belt sedikit melentur saat ditekan. (Hal.252)"
  }
 },
 {
  "id": "21-9",
  "cat": "学科21",
  "q": "自動車（じどうしゃ）のエンジンオイルの点検（てんけん）は、エンジンをかけたまま行う（おこなう）。",
  "a": false,
  "exp": "エンジンをかける前（まえ）に行います（おこないます）。（252P）",
  "img": null,
  "vi": {
   "q": "Kiểm tra dầu động cơ được thực hiện khi động cơ đang nổ.",
   "e": "Kiểm tra trước khi khởi động động cơ. (Trang 252)"
  },
  "ne": {
   "q": "इन्जिन आयलको जाँच इन्जिन चालु राखेर गर्ने हो।",
   "e": "इन्जिन स्टार्ट गर्नुअघि जाँच्ने हो। (पृष्ठ 252)"
  },
  "en": {
   "q": "Engine oil is checked with the engine running.",
   "e": "Check before starting the engine. (P.252)"
  },
  "idn": {
   "q": "Pemeriksaan oli mesin dilakukan dengan mesin menyala.",
   "e": "Periksalah sebelum mesin dinyalakan. (Hal.252)"
  }
 },
 {
  "id": "21-10",
  "cat": "学科21",
  "q": "タイヤの溝（みぞ）の深さ（ふかさ）は、ウェアインジケータ（スリップサイン）などで点検（てんけん）する。",
  "a": true,
  "exp": "タイヤの溝（みぞ）が十分（じゅうぶん）に残って（のこって）いるかは、ウェアインジケータなどを目安（めやす）に確認（かくにん）します。（253P）",
  "img": null,
  "vi": {
   "q": "Độ sâu rãnh lốp được kiểm tra bằng chỉ báo mòn (slip sign) v.v.",
   "e": "Kiểm tra rãnh lốp còn đủ hay không dựa vào chỉ báo mòn (wear indicator). (Trang 253)"
  },
  "ne": {
   "q": "टायरको खाँचको गहिराइ वेयर इन्डिकेटर (स्लिप साइन) आदिले जाँचिन्छ।",
   "e": "खाँच पर्याप्त छ कि छैन वेयर इन्डिकेटर आदि हेरेर जाँच्नुहोस्। (पृष्ठ 253)"
  },
  "en": {
   "q": "Tire groove depth is checked using wear indicators (slip signs), etc.",
   "e": "Check remaining tread using wear indicators as a guide. (P.253)"
  },
  "idn": {
   "q": "Kedalaman alur ban diperiksa dengan indikator keausan (slip sign) dll.",
   "e": "Periksa sisa alur ban dengan patokan indikator keausan. (Hal.253)"
  }
 },
 {
  "id": "22-1",
  "cat": "学科22",
  "q": "人（ひと）の乗り降り（のりおり）のために、10分間車（くるま）を止める（とめる）ことは、停車（ていしゃ）にあたる。",
  "a": true,
  "exp": "人（ひと）の乗り降り（のりおり）のために車（くるま）を止める（とめる）ことは、時間（じかん）に関係（かんけい）なく「停車（ていしゃ）」にあたります。そのため、乗り降り（のりおり）に10分かかった場合（ばあい）でも、目的（もくてき）が人（ひと）の乗降（じょうこう）であれば停車（ていしゃ）です。（259P）",
  "img": null,
  "vi": {
   "q": "Dừng xe 10 phút để người lên xuống được tính là dừng xe (teisha).",
   "e": "Dừng xe cho người lên xuống là \"dừng xe\" bất kể thời gian. Dù mất 10 phút, nếu mục đích là đưa đón người thì vẫn là dừng xe. (Trang 259)"
  },
  "ne": {
   "q": "मानिस चढाउन-ओराल्न १० मिनेट गाडी रोक्नु 「停車 (छोटो रोकाइ)」 हो।",
   "e": "मानिस चढाउन-ओराल्न रोक्नु समय जति भए पनि 「छोटो रोकाइ」 हो। १० मिनेट लागे पनि उद्देश्य यात्रु ओसार्ने भए रोकाइ नै हो। (पृष्ठ 259)"
  },
  "en": {
   "q": "Stopping the car for 10 minutes for passengers to get on and off counts as stopping (teisha).",
   "e": "Stopping for passengers is \"stopping\" regardless of time. Even 10 minutes counts as stopping if the purpose is boarding/alighting. (P.259)"
  },
  "idn": {
   "q": "Menghentikan mobil 10 menit untuk naik-turun penumpang termasuk berhenti sebentar (teisha).",
   "e": "Berhenti untuk naik-turun penumpang adalah \"berhenti\" berapa pun lamanya. 10 menit pun tetap berhenti jika tujuannya naik-turun orang. (Hal.259)"
  }
 },
 {
  "id": "22-2",
  "cat": "学科22",
  "q": "荷待ち（にまち）のために、3分間車（くるま）を止める（とめる）ことは、駐車（ちゅうしゃ）にあたる。",
  "a": true,
  "exp": "荷待ち（にまち）のために車（くるま）を止める（とめる）ことは、時間（じかん）の長さ（ながさ）に関係（かんけい）なく駐車（ちゅうしゃ）にあたります。「5分以内（いない）なら停車（ていしゃ）」となるのは、荷物（にもつ）の積みおろし（つみおろし）の場合（ばあい）です。（258P）",
  "img": null,
  "vi": {
   "q": "Dừng xe 3 phút để chờ hàng được tính là đỗ xe (chusha).",
   "e": "Dừng để chờ hàng là \"đỗ xe\" bất kể thời gian dài ngắn. \"Trong vòng 5 phút là dừng xe\" chỉ áp dụng cho việc bốc dỡ hàng. (Trang 258)"
  },
  "ne": {
   "q": "सामान पर्खन ३ मिनेट गाडी रोक्नु 「駐車 (पार्किङ)」 हो।",
   "e": "सामान पर्खन रोक्नु समय जति भए पनि पार्किङ हो। 「५ मिनेटभित्र छोटो रोकाइ」 भनेको सामान लोड-अनलोडको अवस्था हो। (पृष्ठ 258)"
  },
  "en": {
   "q": "Stopping the car for 3 minutes to wait for cargo counts as parking (chusha).",
   "e": "Waiting for cargo is \"parking\" regardless of duration. \"Within 5 minutes = stopping\" applies to loading/unloading. (P.258)"
  },
  "idn": {
   "q": "Menghentikan mobil 3 menit untuk menunggu muatan termasuk parkir (chusha).",
   "e": "Menunggu muatan adalah \"parkir\" berapa pun lamanya. \"Dalam 5 menit = berhenti\" berlaku untuk bongkar-muat. (Hal.258)"
  }
 },
 {
  "id": "22-3",
  "cat": "学科22",
  "q": "バス停（バスてい）の標示板（ひょうじばん）から10メートル以内（いない）の場所（ばしょ）は、運行時間中（うんこうじかんちゅう）に限り（かぎり）駐停車禁止（ちゅうていしゃきんし）である。",
  "a": true,
  "exp": "バスや路面電車（ろめんでんしゃ）の停留所付近（ていりゅうじょふきん）に車（くるま）を止める（とめる）と、乗り降り（のりおり）や運行（うんこう）の妨げ（さまたげ）になります。そのため、標示板（ひょうじばん）から10メートル以内（いない）の場所（ばしょ）は、運行時間中（うんこうじかんちゅう）に限り（かぎり）駐停車禁止（ちゅうていしゃきんし）です。（260P）",
  "img": null,
  "vi": {
   "q": "Trong phạm vi 10m từ biển báo bến xe buýt, cấm dừng và đỗ xe chỉ trong thời gian xe buýt hoạt động.",
   "e": "Đỗ xe gần bến xe buýt/tàu điện cản trở việc lên xuống và vận hành. Phạm vi 10m từ biển báo bị cấm dừng đỗ trong thời gian hoạt động. (Trang 260)"
  },
  "ne": {
   "q": "बस स्टपको साइनबोर्डबाट १० मिटरभित्र, बस चल्ने समयमा मात्र रोक्न र पार्क गर्न निषेध छ।",
   "e": "बस स्टप नजिक रोक्दा चढ्ने-ओर्लने र सञ्चालनमा बाधा पुग्छ। १० मिटरभित्र सञ्चालन समयमा रोकाइ-पार्किङ निषेध छ। (पृष्ठ 260)"
  },
  "en": {
   "q": "Within 10 meters of a bus stop sign, stopping and parking are prohibited only during operating hours.",
   "e": "Stopping near bus/streetcar stops obstructs boarding and operations. Within 10 m of the sign, stopping/parking is prohibited during operating hours. (P.260)"
  },
  "idn": {
   "q": "Dalam 10 meter dari papan halte bus, berhenti dan parkir dilarang hanya selama jam operasional.",
   "e": "Berhenti dekat halte mengganggu naik-turun dan operasional. Dalam 10 m dari papan, larangan berlaku selama jam operasional. (Hal.260)"
  }
 },
 {
  "id": "22-4",
  "cat": "学科22",
  "q": "道路工事（どうろこうじ）の区域（くいき）の端（はし）から5メートル以内（いない）の場所（ばしょ）では、人（ひと）の乗り降り（のりおり）のために車（くるま）を止める（とめる）ことはできない。",
  "a": false,
  "exp": "道路工事（どうろこうじ）の区域（くいき）の端（はし）から5メートル以内（いない）の場所（ばしょ）は、駐車禁止（ちゅうしゃきんし）の場所（ばしょ）です。しかし、人（ひと）の乗り降り（のりおり）のために車（くるま）を止める（とめる）ことは停車（ていしゃ）にあたるため、駐車禁止場所（ちゅうしゃきんしばしょ）でも行う（おこなう）ことができます。（261P）",
  "img": null,
  "vi": {
   "q": "Trong phạm vi 5m từ mép khu vực công trình đường bộ, không thể dừng xe để người lên xuống.",
   "e": "Phạm vi 5m từ mép công trình là nơi cấm đỗ xe. Nhưng dừng cho người lên xuống là \"dừng xe\", nên vẫn được thực hiện tại nơi cấm đỗ. (Trang 261)"
  },
  "ne": {
   "q": "सडक निर्माण क्षेत्रको छेउबाट ५ मिटरभित्र मानिस चढाउन-ओराल्न गाडी रोक्न मिल्दैन।",
   "e": "५ मिटरभित्र पार्किङ निषेध हो। तर यात्रु चढाउने-ओराल्ने काम छोटो रोकाइ भएकाले पार्किङ निषेध ठाउँमा पनि गर्न मिल्छ। (पृष्ठ 261)"
  },
  "en": {
   "q": "Within 5 meters of the edge of a road construction zone, you cannot stop the car for passengers to get on and off.",
   "e": "Within 5 m of construction is a NO-PARKING area, but stopping for passengers is \"stopping\", which is allowed in no-parking areas. (P.261)"
  },
  "idn": {
   "q": "Dalam 5 meter dari tepi zona pekerjaan jalan, tidak boleh menghentikan mobil untuk naik-turun penumpang.",
   "e": "Dalam 5 m dari zona pekerjaan adalah larangan PARKIR, tetapi berhenti untuk penumpang termasuk \"berhenti\" yang boleh dilakukan di sana. (Hal.261)"
  }
 },
 {
  "id": "22-5",
  "cat": "学科22",
  "q": "この標識（ひょうしき）がある場所（ばしょ）では、道路（どうろ）の幅（はば）が6メートルあれば駐車（ちゅうしゃ）してもよい。",
  "a": false,
  "exp": "標識（ひょうしき）により駐車余地（ちゅうしゃよち）が6メートルと指定（してい）されている場所（ばしょ）では、車（くるま）を駐車（ちゅうしゃ）したあと、車（くるま）の右側（みぎがわ）に6メートル以上（いじょう）の余地（よち）が必要（ひつよう）です。（262P）",
  "img": "g22_q5.jpg",
  "vi": {
   "q": "Ở nơi có biển báo này, nếu chiều rộng đường là 6m thì có thể đỗ xe.",
   "e": "Biển chỉ định khoảng trống đỗ xe 6m: sau khi đỗ, phía bên phải xe phải còn khoảng trống từ 6m trở lên. (Trang 262)"
  },
  "ne": {
   "q": "यो चिन्ह भएको ठाउँमा सडकको चौडाइ ६ मिटर छ भने पार्क गर्न मिल्छ।",
   "e": "चिन्हले पार्किङ खाली ठाउँ ६ मिटर तोकेको ठाउँमा, पार्क गरेपछि गाडीको दायाँतिर ६ मिटर वा बढी खाली ठाउँ चाहिन्छ। (पृष्ठ 262)"
  },
  "en": {
   "q": "Where this sign is posted, you may park if the road is 6 meters wide.",
   "e": "With a 6 m parking-space sign, after parking there must be at least 6 m of space to the RIGHT of your car. (P.262)"
  },
  "idn": {
   "q": "Di tempat dengan rambu ini, boleh parkir jika lebar jalan 6 meter.",
   "e": "Dengan rambu ruang parkir 6 m, setelah parkir harus tersisa ruang 6 m atau lebih di sisi KANAN mobil. (Hal.262)"
  }
 },
 {
  "id": "22-6",
  "cat": "学科22",
  "q": "駐車（ちゅうしゃ）や停車（ていしゃ）が禁止（きんし）されている場所（ばしょ）でも、標識（ひょうしき）により特に（とくに）認められて（みとめられて）いる場合（ばあい）は、駐車（ちゅうしゃ）や停車（ていしゃ）ができる。",
  "a": true,
  "exp": "駐車禁止（ちゅうしゃきんし）や駐停車禁止（ちゅうていしゃきんし）の場所（ばしょ）であっても、「駐車（ちゅうしゃ）可（か）」や「停車（ていしゃ）可（か）」の標識（ひょうしき）により特に（とくに）認められて（みとめられて）いる場合（ばあい）は、その標識（ひょうしき）に従って（したがって）駐車（ちゅうしゃ）や停車（ていしゃ）をすることができます。（262P）",
  "img": null,
  "vi": {
   "q": "Ngay tại nơi cấm dừng/đỗ xe, nếu được biển báo đặc biệt cho phép thì có thể dừng hay đỗ xe.",
   "e": "Tại nơi cấm, nếu có biển \"được phép đỗ\" hay \"được phép dừng\" thì có thể dừng/đỗ theo biển đó. (Trang 262)"
  },
  "ne": {
   "q": "रोकाइ-पार्किङ निषेध ठाउँमा पनि चिन्हले विशेष अनुमति दिएको अवस्थामा रोक्न वा पार्क गर्न मिल्छ।",
   "e": "निषेध ठाउँमा पनि 「पार्किङ मिल्ने」「रोकाइ मिल्ने」 चिन्ह भए त्यही अनुसार गर्न मिल्छ। (पृष्ठ 262)"
  },
  "en": {
   "q": "Even where stopping or parking is prohibited, you may stop or park if specially permitted by signs.",
   "e": "Where \"parking permitted\" or \"stopping permitted\" signs exist, you may stop/park accordingly. (P.262)"
  },
  "idn": {
   "q": "Meski di tempat larangan berhenti/parkir, boleh berhenti atau parkir jika diizinkan khusus oleh rambu.",
   "e": "Jika ada rambu \"boleh parkir\" atau \"boleh berhenti\", boleh mengikuti rambu itu. (Hal.262)"
  }
 },
 {
  "id": "22-7",
  "cat": "学科22",
  "q": "歩道（ほどう）や路側帯（ろそくたい）のない道路（どうろ）で駐車（ちゅうしゃ）や停車（ていしゃ）をするときは、歩行者等（ほこうしゃとう）のために左側（ひだりがわ）に0.75メートル以上（いじょう）の余地（よち）をあけて止める（とめる）。",
  "a": false,
  "exp": "歩道（ほどう）や路側帯（ろそくたい）のない道路（どうろ）で駐車（ちゅうしゃ）や停車（ていしゃ）をするときは、道路（どうろ）の左端（ひだりはし）に沿って（そって）止めます（とめます）。（263P）",
  "img": null,
  "vi": {
   "q": "Khi dừng/đỗ xe trên đường không có vỉa hè hay dải lề đường, phải chừa khoảng trống từ 0,75m trở lên bên trái cho người đi bộ.",
   "e": "Trên đường không có vỉa hè/dải lề, dừng đỗ xe sát mép trái đường. (Trang 263)"
  },
  "ne": {
   "q": "फुटपाथ वा किनारा पट्टी नभएको सडकमा रोक्दा/पार्क गर्दा पैदल यात्रीका लागि बायाँ ०.७५ मिटर वा बढी ठाउँ छोडेर रोक्ने हो।",
   "e": "फुटपाथ/पट्टी नभएको सडकमा सडकको बायाँ किनारामा टाँसेर रोक्ने हो। (पृष्ठ 263)"
  },
  "en": {
   "q": "When stopping or parking on a road without sidewalks or roadside strips, leave at least 0.75 m of space on the left for pedestrians.",
   "e": "On roads without sidewalks/strips, stop along the LEFT EDGE of the road. (P.263)"
  },
  "idn": {
   "q": "Saat berhenti/parkir di jalan tanpa trotoar atau lajur tepi, sisakan ruang 0,75 m atau lebih di sisi kiri untuk pejalan kaki.",
   "e": "Di jalan tanpa trotoar/lajur tepi, berhentilah merapat ke TEPI KIRI jalan. (Hal.263)"
  }
 },
 {
  "id": "22-8",
  "cat": "学科22",
  "q": "駐停車禁止路側帯（ちゅうていしゃきんしろそくたい）や歩行者用路側帯（ほこうしゃようろそくたい）では、路側帯（ろそくたい）の幅（はば）が広い（ひろい）場合（ばあい）でも、路側帯（ろそくたい）に入って（はいって）駐車（ちゅうしゃ）や停車（ていしゃ）をしてはいけない。",
  "a": true,
  "exp": "駐停車禁止路側帯（ちゅうていしゃきんしろそくたい）や歩行者用路側帯（ほこうしゃようろそくたい）では、路側帯（ろそくたい）の幅（はば）に関係（かんけい）なく、路側帯（ろそくたい）に入って（はいって）駐車（ちゅうしゃ）や停車（ていしゃ）をしてはいけません。（263P）",
  "img": null,
  "vi": {
   "q": "Tại dải lề đường cấm dừng đỗ hay dải lề dành cho người đi bộ, dù dải lề rộng cũng không được vào trong để dừng hay đỗ xe.",
   "e": "Tại các dải lề này, bất kể chiều rộng, không được vào trong để dừng/đỗ xe. (Trang 263)"
  },
  "ne": {
   "q": "रोकाइ-पार्किङ निषेध पट्टी वा पैदल यात्री पट्टीमा, पट्टी चौडा भए पनि भित्र पसेर रोक्न वा पार्क गर्न हुँदैन।",
   "e": "यी पट्टीमा चौडाइ जति भए पनि भित्र पसेर रोक्न/पार्क गर्न हुँदैन। (पृष्ठ 263)"
  },
  "en": {
   "q": "In no-stopping roadside strips and pedestrian roadside strips, you must not enter the strip to stop or park, no matter how wide it is.",
   "e": "In these strips, regardless of width, do not enter to stop or park. (P.263)"
  },
  "idn": {
   "q": "Di lajur tepi larangan berhenti dan lajur tepi khusus pejalan kaki, tidak boleh masuk untuk berhenti atau parkir meskipun lajurnya lebar.",
   "e": "Di lajur-lajur itu, berapa pun lebarnya, jangan masuk untuk berhenti/parkir. (Hal.263)"
  }
 },
 {
  "id": "22-9",
  "cat": "学科22",
  "q": "道路（どうろ）を車庫（しゃこ）がわりに使用（しよう）しても、12時間（じかん）（夜間（やかん）は8時間（じかん））以内（いない）であればよい。",
  "a": false,
  "exp": "道路（どうろ）を車庫（しゃこ）がわりに使用（しよう）することは禁止（きんし）されています。（264P）",
  "img": null,
  "vi": {
   "q": "Dùng đường làm chỗ để xe (thay ga-ra) thì được phép nếu trong vòng 12 tiếng (ban đêm 8 tiếng).",
   "e": "Cấm dùng đường làm chỗ để xe thay ga-ra. (Trang 264)"
  },
  "ne": {
   "q": "सडकलाई ग्यारेजको सट्टामा प्रयोग गर्नु १२ घण्टा (राति ८ घण्टा) भित्र भए हुन्छ।",
   "e": "सडकलाई ग्यारेजको रूपमा प्रयोग गर्न निषेध छ। (पृष्ठ 264)"
  },
  "en": {
   "q": "Using the road as a garage substitute is fine if within 12 hours (8 hours at night).",
   "e": "Using the road as a garage substitute is prohibited. (P.264)"
  },
  "idn": {
   "q": "Menggunakan jalan sebagai pengganti garasi boleh saja asalkan dalam 12 jam (malam hari 8 jam).",
   "e": "Menggunakan jalan sebagai pengganti garasi dilarang. (Hal.264)"
  }
 },
 {
  "id": "22-10",
  "cat": "学科22",
  "q": "縁石（えんせき）や溝（みぞ）のある下り坂（くだりざか）で駐車（ちゅうしゃ）するときは、ハンドルを右（みぎ）に切って（きって）おくとよい。",
  "a": false,
  "exp": "下り坂（くだりざか）では、ハンドルを左（ひだり）に切って（きって）おきます。車（くるま）が前（まえ）に動き出した（うごきだした）場合（ばあい）でも、タイヤが縁石（えんせき）や溝（みぞ）に当たり（あたり）、車（くるま）が大きく（おおきく）動く（うごく）のを防ぐ（ふせぐ）ためです。（267P）",
  "img": null,
  "vi": {
   "q": "Khi đỗ xe trên dốc xuống có bó vỉa hay rãnh, nên bẻ lái sang phải trước khi rời xe.",
   "e": "Trên dốc xuống, bẻ lái sang trái. Nếu xe trôi về phía trước, lốp sẽ chạm bó vỉa/rãnh, ngăn xe di chuyển mạnh. (Trang 267)"
  },
  "ne": {
   "q": "ढुङ्गे किनारा (कर्ब) वा नाली भएको ओरालोमा पार्क गर्दा ह्यान्डल दायाँ घुमाएर राख्नु राम्रो हो।",
   "e": "ओरालोमा ह्यान्डल बायाँ घुमाएर राख्ने हो। गाडी अगाडि गुड्न थाले टायर कर्ब/नालीमा अड्किएर ठूलो चाल रोकिन्छ। (पृष्ठ 267)"
  },
  "en": {
   "q": "When parking on a downhill slope with curbs or ditches, turn the steering wheel to the right before leaving.",
   "e": "On a downhill, turn the wheel LEFT so that if the car rolls, the tires catch on the curb or ditch. (P.267)"
  },
  "idn": {
   "q": "Saat parkir di turunan yang ada tepian batu atau selokan, sebaiknya putar setir ke kanan.",
   "e": "Di turunan, putar setir ke KIRI agar bila mobil bergerak, ban tertahan tepian/selokan. (Hal.267)"
  }
 },
 {
  "id": "23-1",
  "cat": "学科23",
  "q": "荷物（にもつ）の積みおろし（つみおろし）のためであれば、貨物自動車（かもつじどうしゃ）の荷台（にだい）に必要最小限（ひつようさいしょうげん）の人（ひと）を乗せる（のせる）ことができる。",
  "a": false,
  "exp": "貨物自動車（かもつじどうしゃ）の荷台（にだい）には、荷物（にもつ）の見張り（みはり）のため特に必要（ひつよう）がある場合（ばあい）、必要最小限（ひつようさいしょうげん）の人（ひと）を乗せる（のせる）ことができます。（272P）",
  "img": null,
  "vi": {
   "q": "Nếu vì mục đích bốc dỡ hàng thì có thể cho số người tối thiểu cần thiết ngồi trên thùng xe tải.",
   "e": "Chỉ khi đặc biệt cần trông coi hàng hóa mới được cho số người tối thiểu cần thiết ngồi trên thùng xe. (Trang 272)"
  },
  "ne": {
   "q": "सामान लोड-अनलोडका लागि भए ट्रकको क्यारियरमा आवश्यक न्यूनतम मानिस राख्न मिल्छ।",
   "e": "सामानको निगरानीका लागि विशेष आवश्यक परेको अवस्थामा मात्र न्यूनतम मानिस राख्न मिल्छ। (पृष्ठ 272)"
  },
  "en": {
   "q": "If it is for loading or unloading cargo, the minimum necessary number of people may ride on the bed of a truck.",
   "e": "Only when specially needed to WATCH the cargo may the minimum necessary number of people ride on the bed. (P.272)"
  },
  "idn": {
   "q": "Jika untuk bongkar-muat barang, sejumlah minimum orang yang diperlukan boleh naik di bak truk.",
   "e": "Hanya bila khusus diperlukan untuk MENJAGA muatan, sejumlah minimum orang boleh naik di bak. (Hal.272)"
  }
 },
 {
  "id": "23-2",
  "cat": "学科23",
  "q": "到着地（とうちゃくち）の警察署長（けいさつしょちょう）の許可（きょか）を受ければ（うければ）、貨物自動車（かもつじどうしゃ）の荷台（にだい）に人（ひと）を乗せる（のせる）ことができる。",
  "a": false,
  "exp": "貨物自動車（かもつじどうしゃ）の荷台（にだい）に人（ひと）を乗せる（のせる）場合（ばあい）、必要（ひつよう）なのは到着地（とうちゃくち）ではなく、出発地（しゅっぱつち）の警察署長（けいさつしょちょう）の許可（きょか）です。（272P）",
  "img": null,
  "vi": {
   "q": "Nếu được cảnh sát trưởng nơi đến cho phép, có thể cho người ngồi trên thùng xe tải.",
   "e": "Cần giấy phép của cảnh sát trưởng nơi xuất phát, không phải nơi đến. (Trang 272)"
  },
  "ne": {
   "q": "गन्तव्य स्थानको प्रहरी प्रमुखको अनुमति लिए ट्रकको क्यारियरमा मानिस राख्न मिल्छ।",
   "e": "गन्तव्य होइन, प्रस्थान स्थानको प्रहरी प्रमुखको अनुमति चाहिन्छ। (पृष्ठ 272)"
  },
  "en": {
   "q": "With permission from the police chief of the DESTINATION, people may ride on the bed of a truck.",
   "e": "The required permission is from the police chief of the DEPARTURE point, not the destination. (P.272)"
  },
  "idn": {
   "q": "Dengan izin kepala polisi TEMPAT TUJUAN, orang boleh naik di bak truk.",
   "e": "Izin yang diperlukan adalah dari kepala polisi TEMPAT KEBERANGKATAN, bukan tujuan. (Hal.272)"
  }
 },
 {
  "id": "23-3",
  "cat": "学科23",
  "q": "分割（ぶんかつ）できない荷物（にもつ）の長さ（ながさ）または幅（はば）が制限（せいげん）を超える（こえる）ときは、夜間（やかん）、その荷物（にもつ）の見（み）やすい箇所（かしょ）に赤色（せきしょく）の灯火（とうか）または反射器（はんしゃき）をつける。",
  "a": true,
  "exp": "夜間（やかん）は、他の車（くるま）から見（み）やすいように、赤色（せきしょく）の灯火（とうか）または反射器（はんしゃき）をつける必要（ひつよう）があります。（273P）",
  "img": null,
  "vi": {
   "q": "Khi chiều dài hay chiều rộng của hàng không thể chia nhỏ vượt quá giới hạn, ban đêm phải gắn đèn đỏ hoặc tấm phản quang ở chỗ dễ thấy của hàng.",
   "e": "Ban đêm phải gắn đèn đỏ hoặc tấm phản quang để xe khác dễ nhìn thấy. (Trang 273)"
  },
  "ne": {
   "q": "टुक्रा गर्न नमिल्ने सामानको लम्बाइ वा चौडाइ सीमा नाघेमा, राति सामानको देखिने ठाउँमा रातो बत्ती वा रिफ्लेक्टर लगाउने हो।",
   "e": "राति अरू गाडीले देखून् भनी रातो बत्ती वा रिफ्लेक्टर लगाउनुपर्छ। (पृष्ठ 273)"
  },
  "en": {
   "q": "When the length or width of an indivisible load exceeds the limit, at night attach a red light or reflector at a visible point on the load.",
   "e": "At night, attach a red light or reflector so other vehicles can see it easily. (P.273)"
  },
  "idn": {
   "q": "Jika panjang atau lebar muatan yang tak dapat dibagi melebihi batas, pada malam hari pasang lampu merah atau reflektor di bagian muatan yang mudah terlihat.",
   "e": "Malam hari, pasang lampu merah atau reflektor agar mudah terlihat kendaraan lain. (Hal.273)"
  }
 },
 {
  "id": "23-4",
  "cat": "学科23",
  "q": "普通自動二輪車（ふつうじどうにりんしゃ）に荷物（にもつ）を積む（つむ）場合（ばあい）、積載物（せきさいぶつ）の高さ（たかさ）は荷台（にだい）から2.5メートル以下（いか）でなければならない。",
  "a": false,
  "exp": "積載物（せきさいぶつ）の高さ（たかさ）は、荷台（にだい）からではなく、地上（ちじょう）から測ります（はかります）。また、普通自動二輪車（ふつうじどうにりんしゃ）に荷物（にもつ）を積む（つむ）場合（ばあい）の高さ（たかさ）は、地上（ちじょう）から2.0メートル以下（いか）です。（273P）",
  "img": null,
  "vi": {
   "q": "Khi chở hàng trên mô tô phổ thông, chiều cao hàng hóa phải từ 2,5m trở xuống tính từ thùng chở hàng.",
   "e": "Chiều cao hàng tính từ mặt đất, không phải từ thùng hàng. Với mô tô phổ thông là từ 2,0m trở xuống tính từ mặt đất. (Trang 273)"
  },
  "ne": {
   "q": "साधारण मोटरसाइकलमा सामान राख्दा सामानको उचाइ क्यारियरबाट २.५ मिटरभित्र हुनुपर्छ।",
   "e": "उचाइ क्यारियरबाट होइन, जमिनबाट नाप्ने हो। साधारण मोटरसाइकलमा जमिनबाट २.० मिटरभित्र हो। (पृष्ठ 273)"
  },
  "en": {
   "q": "When loading cargo on a standard motorcycle, the height of the load must be 2.5 meters or less from the carrier rack.",
   "e": "Height is measured from the GROUND, not the rack. For standard motorcycles: 2.0 meters or less from the ground. (P.273)"
  },
  "idn": {
   "q": "Saat memuat barang di sepeda motor standar, tinggi muatan harus 2,5 meter atau kurang dari rak muatan.",
   "e": "Tinggi diukur dari TANAH, bukan dari rak. Untuk motor standar: 2,0 meter atau kurang dari tanah. (Hal.273)"
  }
 },
 {
  "id": "23-5",
  "cat": "学科23",
  "q": "乗車定員（じょうしゃていいん）8人（はちにん）の自動車（じどうしゃ）には、運転者（うんてんしゃ）のほかに大人（おとな）5人（ごにん）と12歳未満（じゅうにさいみまん）の子ども（こども）4人（よにん）を乗せる（のせる）ことができる。",
  "a": false,
  "exp": "この場合（ばあい）、運転者（うんてんしゃ）を含めて（ふくめて）大人（おとな）は6人（ろくにん）です。乗車定員（じょうしゃていいん）8人（はちにん）なので、残り（のこり）は大人（おとな）2人分（ふたりぶん）です。大人（おとな）2人分（ふたりぶん）に乗れる（のれる）子ども（こども）は、2 × 1.5 ＝ 3人（さんにん）です。（273P）",
  "img": null,
  "vi": {
   "q": "Xe có sức chở 8 người có thể chở, ngoài người lái, 5 người lớn và 4 trẻ em dưới 12 tuổi.",
   "e": "Người lớn gồm cả người lái là 6. Sức chở 8 nên còn chỗ cho 2 người lớn. 2 chỗ người lớn tương đương 2×1,5 = 3 trẻ em. (Trang 273)"
  },
  "ne": {
   "q": "८ सिट क्षमताको गाडीमा चालक बाहेक वयस्क ५ जना र १२ वर्षमुनिका बालबालिका ४ जना राख्न मिल्छ।",
   "e": "चालकसहित वयस्क ६ जना। क्षमता ८ भएकाले बाँकी वयस्क २ जनाको ठाउँ। वयस्क २ जनाको ठाउँमा बालबालिका 2×1.5 = ३ जना मात्र मिल्छ। (पृष्ठ 273)"
  },
  "en": {
   "q": "A car with a seating capacity of 8 can carry, besides the driver, 5 adults and 4 children under 12.",
   "e": "Adults including the driver: 6. Capacity 8 leaves room for 2 adults. 2 adult seats allow 2 × 1.5 = 3 children. (P.273)"
  },
  "idn": {
   "q": "Mobil berkapasitas 8 orang dapat memuat, selain pengemudi, 5 orang dewasa dan 4 anak di bawah 12 tahun.",
   "e": "Dewasa termasuk pengemudi: 6 orang. Kapasitas 8 menyisakan 2 kursi dewasa. 2 kursi dewasa = 2 × 1,5 = 3 anak. (Hal.273)"
  }
 },
 {
  "id": "23-6",
  "cat": "学科23",
  "q": "普通二輪免許（ふつうにりんめんきょ）を受けて（うけて）1年以上（ねんいじょう）経過（けいか）している人（ひと）が、新たに（あらたに）大型二輪免許（おおがたにりんめんきょ）を受けた場合（ばあい）、大型自動二輪車（おおがたじどうにりんしゃ）で二人乗り（ふたりのり）をすることができる。",
  "a": true,
  "exp": "普通二輪免許（ふつうにりんめんきょ）を受けて（うけて）から1年以上（ねんいじょう）経過（けいか）している人（ひと）が大型二輪免許（おおがたにりんめんきょ）を受けた（うけた）場合（ばあい）は、二人乗り（ふたりのり）禁止（きんし）の対象（たいしょう）から除かれます（のぞかれます）。（274P）",
  "img": null,
  "vi": {
   "q": "Người đã có bằng mô tô phổ thông từ 1 năm trở lên, khi mới lấy bằng mô tô cỡ lớn, có thể chở 2 người bằng mô tô cỡ lớn.",
   "e": "Người có bằng mô tô phổ thông từ 1 năm trở lên khi lấy bằng mô tô cỡ lớn thì không thuộc diện cấm chở 2 người. (Trang 274)"
  },
  "ne": {
   "q": "साधारण दुईपाङ्ग्रे लाइसेन्स १ वर्ष नाघेको व्यक्तिले भर्खरै ठूलो दुईपाङ्ग्रे लाइसेन्स लिएमा ठूलो मोटरसाइकलमा दुई जना चढ्न मिल्छ।",
   "e": "साधारण लाइसेन्स १ वर्ष नाघेको व्यक्तिले ठूलो लाइसेन्स लिए दुई जना चढ्ने निषेधबाट छुट हुन्छ। (पृष्ठ 274)"
  },
  "en": {
   "q": "A person who has held a standard motorcycle license for 1 year or more and newly obtains a large motorcycle license may ride two-up on a large motorcycle.",
   "e": "Holding a standard motorcycle license for 1+ years exempts one from the two-up prohibition after getting a large license. (P.274)"
  },
  "idn": {
   "q": "Orang yang sudah memegang SIM motor standar 1 tahun lebih dan baru memperoleh SIM motor besar boleh berboncengan dengan motor besar.",
   "e": "Pemegang SIM motor standar 1 tahun lebih yang mengambil SIM besar dikecualikan dari larangan berboncengan. (Hal.274)"
  }
 },
 {
  "id": "23-7",
  "cat": "学科23",
  "q": "ロープ（ロープ）で故障車（こしょうしゃ）をけん引（けんいん）するときは、運転技能（うんてんぎのう）が優れた（すぐれた）人（ひと）を故障車（こしょうしゃ）の運転者（うんてんしゃ）にするとよい。",
  "a": true,
  "exp": "故障車（こしょうしゃ）は、パワーステアリング（パワーステアリング）やブレーキ倍力装置（ブレーキばいりょくそうち）が故障（こしょう）していることがあり、ハンドル操作（そうさ）やブレーキ操作（そうさ）が重く（おもく）なることがあります。また、けん引（けんいん）車（しゃ）との車間（しゃかん）が近い（ちかい）ため死角（しかく）も多く（おおく）なります。そのため、運転技能（うんてんぎのう）が優れた（すぐれた）人（ひと）が故障車（こしょうしゃ）を運転（うんてん）するのが望ましい（のぞましい）です。（277P）",
  "img": null,
  "vi": {
   "q": "Khi kéo xe hỏng bằng dây, nên để người có kỹ năng lái giỏi làm người lái xe hỏng.",
   "e": "Xe hỏng có thể mất trợ lực lái và trợ lực phanh, thao tác nặng hơn; khoảng cách với xe kéo gần nên nhiều điểm mù. Người lái giỏi nên ngồi xe hỏng. (Trang 277)"
  },
  "ne": {
   "q": "डोरीले बिग्रेको गाडी तान्दा ड्राइभिङ सीप राम्रो भएको व्यक्तिलाई बिग्रेको गाडीको चालक बनाउनु राम्रो हो।",
   "e": "बिग्रेको गाडीमा पावर स्टेरिङ/ब्रेक बुस्टर काम नगरी सञ्चालन गह्रौँ हुनसक्छ, दूरी नजिक भई मृत कोण बढी हुन्छ। सिपालु व्यक्तिले बिग्रेको गाडी चलाउनु उपयुक्त हुन्छ। (पृष्ठ 277)"
  },
  "en": {
   "q": "When towing a broken-down car with a rope, it is good to have a highly skilled driver operate the broken-down car.",
   "e": "A broken car may have lost power steering and brake booster, making operation heavy, with many blind spots due to the short gap. A skilled driver should operate it. (P.277)"
  },
  "idn": {
   "q": "Saat menderek mobil mogok dengan tali, sebaiknya pengemudi yang sangat terampil mengemudikan mobil yang mogok.",
   "e": "Mobil mogok bisa kehilangan power steering dan booster rem sehingga berat dikendalikan, dan jaraknya dekat sehingga banyak titik buta. Pengemudi terampil sebaiknya di mobil mogok. (Hal.277)"
  }
 },
 {
  "id": "23-8",
  "cat": "学科23",
  "q": "故障車（こしょうしゃ）をけん引（けんいん）するとき、けん引（けんいん）する車（くるま）と故障車（こしょうしゃ）の間隔（かんかく）は5メートル以内（いない）であればよいが、ロープ（ロープ）につける布（ぬの）の色（いろ）は赤（あか）がよい。",
  "a": false,
  "exp": "ロープ（ロープ）には周囲（しゅうい）からけん引（けんいん）していることが分かる（わかる）ように、赤い（あかい）布（ぬの）ではなく、白い（しろい）布（ぬの）をつけなければなりません。（277P）",
  "img": null,
  "vi": {
   "q": "Khi kéo xe hỏng, khoảng cách giữa xe kéo và xe hỏng trong vòng 5m là được, nhưng vải buộc trên dây nên màu đỏ.",
   "e": "Phải buộc vải màu trắng, không phải màu đỏ, để xung quanh nhận biết đang kéo xe. (Trang 277)"
  },
  "ne": {
   "q": "बिग्रेको गाडी तान्दा दुई गाडीबीचको दूरी ५ मिटरभित्र भए पुग्छ, तर डोरीमा बाँध्ने कपडा रातो राम्रो हो।",
   "e": "तानिरहेको थाहा होस् भनी रातो होइन, सेतो कपडा बाँध्नुपर्छ। (पृष्ठ 277)"
  },
  "en": {
   "q": "When towing a broken-down car, the gap between the cars may be within 5 meters, but the cloth on the rope should be red.",
   "e": "Attach a WHITE cloth, not red, so others can tell the car is being towed. (P.277)"
  },
  "idn": {
   "q": "Saat menderek mobil mogok, jarak antar mobil boleh dalam 5 meter, tetapi kain pada tali sebaiknya berwarna merah.",
   "e": "Pasang kain PUTIH, bukan merah, agar sekitar tahu sedang menderek. (Hal.277)"
  }
 },
 {
  "id": "23-9",
  "cat": "学科23",
  "q": "故障車（こしょうしゃ）をロープ（ロープ）でけん引（けんいん）するときは、けん引（けんいん）される車（くるま）が750kgを超える（こえる）と、けん引（けんいん）免許（めんきょ）が必要（ひつよう）になる。",
  "a": false,
  "exp": "故障車（こしょうしゃ）をロープ（ロープ）でけん引（けんいん）する場合（ばあい）は、けん引（けんいん）免許（めんきょ）は不要（ふよう）です。（130P）",
  "img": null,
  "vi": {
   "q": "Khi kéo xe hỏng bằng dây, nếu xe được kéo nặng hơn 750kg thì cần bằng kéo xe.",
   "e": "Kéo xe hỏng bằng dây không cần bằng kéo xe. (Trang 130)"
  },
  "ne": {
   "q": "डोरीले बिग्रेको गाडी तान्दा तानिने गाडी ७५० केजी नाघेमा तान्ने लाइसेन्स चाहिन्छ।",
   "e": "बिग्रेको गाडी डोरीले तान्दा तान्ने लाइसेन्स चाहिँदैन। (पृष्ठ 130)"
  },
  "en": {
   "q": "When towing a broken-down car with a rope, a towing license is needed if the towed car exceeds 750 kg.",
   "e": "Towing a broken-down car with a rope does not require a towing license. (P.130)"
  },
  "idn": {
   "q": "Saat menderek mobil mogok dengan tali, SIM derek diperlukan jika mobil yang diderek melebihi 750 kg.",
   "e": "Menderek mobil mogok dengan tali tidak memerlukan SIM derek. (Hal.130)"
  }
 },
 {
  "id": "23-10",
  "cat": "学科23",
  "q": "後輪（こうりん）を上（あ）げてけん引（けんいん）する場合（ばあい）は、前輪（ぜんりん）が故障車（こしょうしゃ）の中心線（ちゅうしんせん）に平行（へいこう）になるように、ハンドルを固定（こてい）しなければならない。",
  "a": true,
  "exp": "後輪（こうりん）を上（あ）げてけん引（けんいん）するときは、前輪（ぜんりん）の向き（むき）がずれないように、ハンドルを固定（こてい）する必要（ひつよう）があります。（276P）",
  "img": null,
  "vi": {
   "q": "Khi kéo xe với bánh sau được nâng lên, phải cố định vô-lăng sao cho bánh trước song song với đường trung tâm của xe hỏng.",
   "e": "Khi nâng bánh sau để kéo, phải cố định vô-lăng để hướng bánh trước không bị lệch. (Trang 276)"
  },
  "ne": {
   "q": "पछाडिको पाङ्ग्रा उठाएर तान्दा, अगाडिको पाङ्ग्रा गाडीको केन्द्र रेखासँग समानान्तर हुने गरी ह्यान्डल स्थिर गर्नुपर्छ।",
   "e": "पछाडि उठाएर तान्दा अगाडिको पाङ्ग्राको दिशा नबिग्रियोस् भनी ह्यान्डल स्थिर गर्नुपर्छ। (पृष्ठ 276)"
  },
  "en": {
   "q": "When towing with the rear wheels raised, the steering wheel must be fixed so the front wheels stay parallel to the broken-down car's center line.",
   "e": "When towing with the rear raised, fix the steering wheel so the front wheels do not turn. (P.276)"
  },
  "idn": {
   "q": "Saat menderek dengan roda belakang terangkat, setir harus dikunci agar roda depan sejajar dengan garis tengah mobil yang mogok.",
   "e": "Saat menderek dengan roda belakang terangkat, kunci setir agar arah roda depan tidak berubah. (Hal.276)"
  }
 },
 {
  "id": "24-1",
  "cat": "学科24",
  "q": "交通事故（こうつうじこ）で負傷者（ふしょうしゃ）がいる場合（ばあい）でも、救急車（きゅうきゅうしゃ）が来る（くる）まで何も（なにも）せず、その場（ば）を離れて（はなれて）よい。",
  "a": false,
  "exp": "運転者（うんてんしゃ）などには、負傷者（ふしょうしゃ）を救護（きゅうご）する義務（ぎむ）があります。救急車（きゅうきゅうしゃ）を呼び（よび）、到着（とうちゃく）するまで可能（かのう）な応急救護処置（おうきゅうきゅうごしょち）を行わ（おこなわ）なければなりません。（280P）",
  "img": null,
  "vi": {
   "q": "Khi có người bị thương trong tai nạn giao thông, có thể không làm gì và rời hiện trường cho đến khi xe cấp cứu đến.",
   "e": "Người lái có nghĩa vụ cứu hộ người bị thương: gọi cấp cứu và thực hiện sơ cứu có thể cho đến khi xe cấp cứu đến. (Trang 280)"
  },
  "ne": {
   "q": "दुर्घटनामा घाइते भए पनि एम्बुलेन्स नआउञ्जेल केही नगरी घटनास्थल छोड्न हुन्छ।",
   "e": "चालकको घाइते उद्धार गर्ने दायित्व हुन्छ। एम्बुलेन्स बोलाई नआउञ्जेल सम्भव प्राथमिक उपचार गर्नुपर्छ। (पृष्ठ 280)"
  },
  "en": {
   "q": "Even when someone is injured in a traffic accident, you may do nothing and leave the scene until the ambulance arrives.",
   "e": "Drivers have a duty to rescue the injured: call an ambulance and give what first aid you can until it arrives. (P.280)"
  },
  "idn": {
   "q": "Meski ada korban luka dalam kecelakaan, boleh tidak berbuat apa-apa dan meninggalkan lokasi sampai ambulans datang.",
   "e": "Pengemudi wajib menolong korban: panggil ambulans dan lakukan pertolongan pertama semampunya sampai ambulans tiba. (Hal.280)"
  }
 },
 {
  "id": "24-2",
  "cat": "学科24",
  "q": "交通事故（こうつうじこ）が起きても（おきても）、けが人（けがにん）がいなければ警察（けいさつ）への報告（ほうこく）は必要（ひつよう）ない。",
  "a": false,
  "exp": "けが人（にん）がいない物損事故（ぶっそんじこ）であっても、交通事故（こうつうじこ）が発生（はっせい）した場合（ばあい）は警察官（けいさつかん）に報告（ほうこく）する必要（ひつよう）があります。（280P）",
  "img": null,
  "vi": {
   "q": "Khi xảy ra tai nạn, nếu không có người bị thương thì không cần báo cảnh sát.",
   "e": "Dù là tai nạn chỉ hư hỏng tài sản không có người bị thương, vẫn phải báo cảnh sát. (Trang 280)"
  },
  "ne": {
   "q": "दुर्घटना भए पनि घाइते छैन भने प्रहरीलाई खबर गर्नु पर्दैन।",
   "e": "घाइते नभएको सम्पत्ति मात्र क्षति भएको दुर्घटनामा पनि प्रहरीलाई खबर गर्नुपर्छ। (पृष्ठ 280)"
  },
  "en": {
   "q": "If a traffic accident occurs but no one is injured, there is no need to report it to the police.",
   "e": "Even a property-damage-only accident must be reported to the police. (P.280)"
  },
  "idn": {
   "q": "Jika terjadi kecelakaan tetapi tidak ada yang terluka, tidak perlu lapor polisi.",
   "e": "Kecelakaan yang hanya merusak barang pun wajib dilaporkan ke polisi. (Hal.280)"
  }
 },
 {
  "id": "24-3",
  "cat": "学科24",
  "q": "事故現場（じこげんば）でガソリンが漏れて（もれて）いても、たばこを吸って（すって）もよい。",
  "a": false,
  "exp": "ガソリンに火（ひ）がつくと大変（たいへん）危険（きけん）です。事故現場（じこげんば）では火災防止（かさいぼうし）のため、たばこを吸ったり（すったり）火（ひ）を使ったり（つかったり）してはいけません。（281P）",
  "img": null,
  "vi": {
   "q": "Tại hiện trường tai nạn, dù xăng đang rò rỉ vẫn có thể hút thuốc.",
   "e": "Xăng bắt lửa rất nguy hiểm. Tại hiện trường, để phòng hỏa hoạn, không hút thuốc hay dùng lửa. (Trang 281)"
  },
  "ne": {
   "q": "घटनास्थलमा पेट्रोल चुहिइरहे पनि चुरोट पिउन हुन्छ।",
   "e": "पेट्रोलमा आगो लागे अत्यन्त खतरनाक हुन्छ। आगलागी रोक्न चुरोट वा आगो प्रयोग नगर्नुहोस्। (पृष्ठ 281)"
  },
  "en": {
   "q": "At an accident scene, you may smoke even if gasoline is leaking.",
   "e": "Gasoline igniting is extremely dangerous. To prevent fire, do not smoke or use flames at the scene. (P.281)"
  },
  "idn": {
   "q": "Di lokasi kecelakaan, boleh merokok meski bensin sedang bocor.",
   "e": "Bensin yang tersulut sangat berbahaya. Demi mencegah kebakaran, jangan merokok atau menggunakan api. (Hal.281)"
  }
 },
 {
  "id": "24-4",
  "cat": "学科24",
  "q": "ひき逃げ車（ひきにげしゃ）を見かけた（みかけた）ときは、車（くるま）のナンバー、車種（しゃしゅ）、色（いろ）などの特徴（とくちょう）を110番（ばん）などで警察官（けいさつかん）に届け出る（とどけでる）。",
  "a": true,
  "exp": "ひき逃げ車（ひきにげしゃ）を見かけた（みかけた）ときは、負傷者（ふしょうしゃ）の救護（きゅうご）とともに、車（くるま）のナンバー、車種（しゃしゅ）、色（いろ）などの特徴（とくちょう）を警察官（けいさつかん）に知らせます（しらせます）。（281P）",
  "img": null,
  "vi": {
   "q": "Khi thấy xe gây tai nạn bỏ chạy, hãy báo cho cảnh sát qua số 110 các đặc điểm như biển số, loại xe, màu xe.",
   "e": "Khi thấy xe bỏ chạy, cùng với cứu hộ người bị thương, báo cảnh sát biển số, loại xe, màu xe v.v. (Trang 281)"
  },
  "ne": {
   "q": "ठक्कर दिएर भाग्ने गाडी देखे नम्बर, मोडेल, रङ जस्ता विशेषता ११० नम्बरमा प्रहरीलाई खबर गर्ने हो।",
   "e": "भाग्ने गाडी देखे घाइतेको उद्धारसँगै नम्बर, मोडेल, रङ आदि प्रहरीलाई जनाउनुहोस्। (पृष्ठ 281)"
  },
  "en": {
   "q": "When you see a hit-and-run vehicle, report its plate number, model, color, and other features to the police via 110.",
   "e": "When you see a hit-and-run, along with rescuing the injured, report the plate, model, color, etc. to the police. (P.281)"
  },
  "idn": {
   "q": "Saat melihat kendaraan tabrak lari, laporkan nomor polisi, jenis, warna, dan ciri lainnya ke polisi lewat 110.",
   "e": "Saat melihat tabrak lari, selain menolong korban, laporkan nomor, jenis, warna kendaraan ke polisi. (Hal.281)"
  }
 },
 {
  "id": "24-5",
  "cat": "学科24",
  "q": "原動機付自転車（げんどうきつきじてんしゃ）は、自動車損害賠償責任保険（じどうしゃそんがいばいしょうせきにんほけん）または責任共済（せきにんきょうさい）に加入（かにゅう）しなくても運転（うんてん）することができる。",
  "a": false,
  "exp": "自動車損害賠償責任保険（じどうしゃそんがいばいしょうせきにんほけん）や責任共済（せきにんきょうさい）は、いわゆる強制保険（きょうせいほけん）です。 原動機付自転車（げんどうきつきじてんしゃ）も、これに加入（かにゅう）していなければ運転（うんてん）することはできません。（288P）",
  "img": null,
  "vi": {
   "q": "Xe gắn máy có thể lái mà không cần tham gia bảo hiểm trách nhiệm bồi thường thiệt hại ô tô (bảo hiểm bắt buộc) hay quỹ tương trợ trách nhiệm.",
   "e": "Bảo hiểm trách nhiệm (JIBAI) là bảo hiểm bắt buộc. Xe gắn máy cũng không được lái nếu chưa tham gia. (Trang 288)"
  },
  "ne": {
   "q": "मोपेड अनिवार्य बीमा (जिबाइसेकी बीमा) वा जिम्मेवारी सहकारीमा नबुझाई चलाउन मिल्छ।",
   "e": "जिबाइसेकी बीमा अनिवार्य बीमा हो। मोपेड पनि यसमा सामेल नभई चलाउन मिल्दैन। (पृष्ठ 288)"
  },
  "en": {
   "q": "Mopeds may be driven without joining compulsory automobile liability insurance (or mutual aid).",
   "e": "Compulsory liability insurance/mutual aid is mandatory. Mopeds also cannot be driven without it. (P.288)"
  },
  "idn": {
   "q": "Moped boleh dikendarai tanpa ikut asuransi tanggung jawab wajib kendaraan (atau koperasi tanggung jawab).",
   "e": "Asuransi wajib itu keharusan. Moped pun tidak boleh dikendarai tanpanya. (Hal.288)"
  }
 },
 {
  "id": "24-6",
  "cat": "学科24",
  "q": "検査標章（けんさひょうしょう）に表示（ひょうじ）されている数字（すうじ）は、車検（しゃけん）に合格（ごうかく）した年（とし）と月（つき）を示して（しめして）いる。",
  "a": false,
  "exp": "検査標章（けんさひょうしょう）に表示（ひょうじ）されている数字（すうじ）は、車検（しゃけん）に合格（ごうかく）した年（とし）と月（つき）ではなく、自動車検査証（じどうしゃけんさしょう）の有効期間（ゆうこうきかん）が満了（まんりょう）する年（とし）と月（つき）を示して（しめして）います。（285P）",
  "img": null,
  "vi": {
   "q": "Số hiển thị trên tem kiểm định (kensa-hyosho) thể hiện năm và tháng xe đã đỗ kiểm định (shaken).",
   "e": "Số trên tem kiểm định thể hiện năm/tháng hết hạn hiệu lực của giấy kiểm định, không phải năm/tháng đỗ kiểm định. (Trang 285)"
  },
  "ne": {
   "q": "निरीक्षण स्टिकरमा देखिने अङ्कले गाडी जाँच (शाकेन) पास भएको वर्ष र महिना जनाउँछ।",
   "e": "स्टिकरको अङ्कले पास भएको होइन, निरीक्षण प्रमाणपत्रको म्याद सकिने वर्ष र महिना जनाउँछ। (पृष्ठ 285)"
  },
  "en": {
   "q": "The numbers on the inspection sticker show the year and month the car passed inspection (shaken).",
   "e": "The numbers show the year and month the inspection certificate EXPIRES, not when it passed. (P.285)"
  },
  "idn": {
   "q": "Angka pada stiker inspeksi menunjukkan tahun dan bulan mobil lulus uji berkala (shaken).",
   "e": "Angka itu menunjukkan tahun-bulan BERAKHIRNYA masa berlaku sertifikat inspeksi, bukan saat lulus. (Hal.285)"
  }
 },
 {
  "id": "24-7",
  "cat": "学科24",
  "q": "自家用（じかよう）の普通乗用自動車（ふつうじょうようじどうしゃ）は、3か月（さんかげつ）ごとに定期点検（ていきてんけん）を受け（うけ）なければならない。",
  "a": false,
  "exp": "自家用（じかよう）の普通乗用自動車（ふつうじょうようじどうしゃ）（三輪（さんりん）を除く（のぞく））は、一般的（いっぱんてき）に12か月（じゅうにかげつ）ごとに定期点検（ていきてんけん）を受けます（うけます）。（286P）",
  "img": null,
  "vi": {
   "q": "Xe con tự dùng phải nhận kiểm tra định kỳ 3 tháng một lần.",
   "e": "Xe con tự dùng (trừ xe ba bánh) thông thường nhận kiểm tra định kỳ 12 tháng một lần. (Trang 286)"
  },
  "ne": {
   "q": "निजी कारले ३ महिनामा एक पटक नियमित जाँच गराउनुपर्छ।",
   "e": "निजी कार (तीनपाङ्ग्रे बाहेक) सामान्यतया १२ महिनामा एक पटक नियमित जाँच गराउने हो। (पृष्ठ 286)"
  },
  "en": {
   "q": "Private passenger cars must undergo periodic inspection every 3 months.",
   "e": "Private passenger cars (excluding three-wheelers) generally undergo periodic inspection every 12 months. (P.286)"
  },
  "idn": {
   "q": "Mobil penumpang pribadi wajib pemeriksaan berkala setiap 3 bulan.",
   "e": "Mobil pribadi (kecuali roda tiga) umumnya pemeriksaan berkala setiap 12 bulan. (Hal.286)"
  }
 },
 {
  "id": "24-8",
  "cat": "学科24",
  "q": "自動車（じどうしゃ）保険（ほけん）には、法律（ほうりつ）によって加入（かにゅう）が義務（ぎむ）づけられている強制保険（きょうせいほけん）（自賠責保険（じばいせきほけん））と、車（くるま）の所有者（しょゆうしゃ）や運転者（うんてんしゃ）が任意（にんい）で加入（かにゅう）する任意保険（にんいほけん）がある。",
  "a": true,
  "exp": "自動車（じどうしゃ）保険（ほけん）には、法律（ほうりつ）によって加入（かにゅう）が義務（ぎむ）づけられている強制保険（きょうせいほけん）（自賠責保険（じばいせきほけん））と、車（くるま）の所有者（しょゆうしゃ）や運転者（うんてんしゃ）が任意（にんい）で加入（かにゅう）する任意保険（にんいほけん）があります。（286P）",
  "img": null,
  "vi": {
   "q": "Bảo hiểm ô tô gồm bảo hiểm bắt buộc theo luật (bảo hiểm JIBAI) và bảo hiểm tự nguyện do chủ xe hay người lái tự tham gia.",
   "e": "Bảo hiểm ô tô gồm bảo hiểm bắt buộc (JIBAI) theo luật và bảo hiểm tự nguyện. (Trang 286)"
  },
  "ne": {
   "q": "गाडी बीमामा कानुनले अनिवार्य गरेको बीमा (जिबाइसेकी) र मालिक/चालकले स्वेच्छाले गर्ने ऐच्छिक बीमा हुन्छन्।",
   "e": "गाडी बीमामा अनिवार्य (जिबाइसेकी) र ऐच्छिक बीमा हुन्छन्। (पृष्ठ 286)"
  },
  "en": {
   "q": "Automobile insurance includes compulsory insurance required by law (JIBAI) and voluntary insurance that owners or drivers join by choice.",
   "e": "Automobile insurance consists of compulsory (JIBAI) and voluntary insurance. (P.286)"
  },
  "idn": {
   "q": "Asuransi mobil terdiri dari asuransi wajib menurut hukum (JIBAI) dan asuransi sukarela yang diikuti pemilik atau pengemudi atas pilihan sendiri.",
   "e": "Asuransi mobil terdiri dari asuransi wajib (JIBAI) dan asuransi sukarela. (Hal.286)"
  }
 },
 {
  "id": "24-9",
  "cat": "学科24",
  "q": "強制保険（きょうせいほけん）（自賠責保険（じばいせきほけん））は、人身事故（じんしんじこ）には適用（てきよう）されるが、物損事故（ぶっそんじこ）には適用（てきよう）されない。",
  "a": true,
  "exp": "強制保険（きょうせいほけん）（自賠責保険（じばいせきほけん））は、交通事故（こうつうじこ）の被害者（ひがいしゃ）を救済（きゅうさい）するための保険（ほけん）で、補償（ほしょう）の対象（たいしょう）は人身事故（じんしんじこ）に限られます。（289P）",
  "img": null,
  "vi": {
   "q": "Bảo hiểm bắt buộc (JIBAI) áp dụng cho tai nạn về người, nhưng không áp dụng cho tai nạn chỉ thiệt hại tài sản.",
   "e": "Bảo hiểm bắt buộc là để cứu trợ nạn nhân tai nạn; phạm vi bồi thường chỉ giới hạn ở tai nạn về người. (Trang 289)"
  },
  "ne": {
   "q": "अनिवार्य बीमा (जिबाइसेकी) मानिस घाइते हुने दुर्घटनामा लागू हुन्छ तर सम्पत्ति मात्र क्षति हुने दुर्घटनामा लागू हुँदैन।",
   "e": "अनिवार्य बीमा पीडित उद्धारका लागि हो; क्षतिपूर्ति मानवीय क्षतिमा मात्र सीमित छ। (पृष्ठ 289)"
  },
  "en": {
   "q": "Compulsory insurance (JIBAI) applies to personal injury accidents but not to property damage accidents.",
   "e": "Compulsory insurance exists to aid accident victims; coverage is limited to personal injury. (P.289)"
  },
  "idn": {
   "q": "Asuransi wajib (JIBAI) berlaku untuk kecelakaan korban jiwa/luka tetapi tidak untuk kecelakaan kerusakan barang.",
   "e": "Asuransi wajib untuk menolong korban; cakupannya terbatas pada cedera manusia. (Hal.289)"
  }
 },
 {
  "id": "24-10",
  "cat": "学科24",
  "q": "自家用（じかよう）の普通乗用自動車（ふつうじょうようじどうしゃ）は、初回（しょかい）（新車登録時（しんしゃとうろくじ））に限り（かぎり）、3年後（さんねんご）に自動車検査（じどうしゃけんさ）（車検（しゃけん））を受ければよい。",
  "a": true,
  "exp": "自家用（じかよう）の普通乗用自動車（ふつうじょうようじどうしゃ）は、通常（つうじょう）は2年（にねん）ごとに車検（しゃけん）を受けます（うけます）。 ただし、初回（しょかい）（新車登録時（しんしゃとうろくじ））だけは3年（さんねん）となっています。（285P）",
  "img": null,
  "vi": {
   "q": "Xe con tự dùng chỉ lần đầu (khi đăng ký xe mới) mới được nhận kiểm định sau 3 năm.",
   "e": "Xe con tự dùng thường nhận kiểm định 2 năm một lần, riêng lần đầu (đăng ký xe mới) là 3 năm. (Trang 285)"
  },
  "ne": {
   "q": "निजी कारको पहिलो पटक (नयाँ दर्ता) मा मात्र ३ वर्षपछि गाडी जाँच (शाकेन) गराए पुग्छ।",
   "e": "निजी कार सामान्यतया २ वर्षमा जाँच गराउने हो, तर पहिलो पटक (नयाँ दर्ता) मात्र ३ वर्ष हो। (पृष्ठ 285)"
  },
  "en": {
   "q": "For private passenger cars, only the first inspection (at new registration) may be taken 3 years later.",
   "e": "Private passenger cars are normally inspected every 2 years; only the first time (new registration) is 3 years. (P.285)"
  },
  "idn": {
   "q": "Untuk mobil pribadi, hanya yang pertama kali (saat registrasi baru) boleh menjalani uji berkala 3 tahun kemudian.",
   "e": "Mobil pribadi biasanya diuji tiap 2 tahun; hanya pertama kali (registrasi baru) 3 tahun. (Hal.285)"
  }
 },
 {
  "id": "25-1",
  "cat": "学科25",
  "q": "二輪車（にりんしゃ）で集団ツーリング（しゅうだんツーリング）をする場合（ばあい）、連続（れんぞく）した運転（うんてん）は2時間（じかん）を限度（げんど）とし、2時間（じかん）に1回（いっかい）は休憩（きゅうけい）をとるように計画（けいかく）する。",
  "a": true,
  "exp": "二輪車（にりんしゃ）のツーリングでは、天候（てんこう）や走行状況（そうこうじょうきょう）によって体力（たいりょく）を大きく（おおきく）消耗（しょうもう）することがあります。特に（とくに）長距離走行（ちょうきょりそうこう）では疲労（ひろう）がたまりやすいため、連続運転（れんぞくうんてん）は2時間（じかん）を限度（げんど）とし、あらかじめ休憩場所（きゅうけいばしょ）を決めて（きめて）、2時間（じかん）に1回（いっかい）は休憩（きゅうけい）をとるような無理（むり）のない運転（うんてん）計画（けいかく）を立てる（たてる）ことが大切（たいせつ）です。（300P）",
  "img": null,
  "vi": {
   "q": "Khi đi tour theo đoàn bằng xe hai bánh, lập kế hoạch lái liên tục tối đa 2 tiếng, cứ 2 tiếng nghỉ 1 lần.",
   "e": "Tour xe hai bánh tiêu hao thể lực lớn tùy thời tiết và tình trạng đường. Nhất là chạy đường dài dễ mệt, nên lái liên tục tối đa 2 tiếng, định trước chỗ nghỉ, cứ 2 tiếng nghỉ 1 lần — lập kế hoạch không gắng sức. (Trang 300)"
  },
  "ne": {
   "q": "दुईपाङ्ग्रेमा समूह टुरिङ गर्दा लगातार २ घण्टासम्म मात्र चलाउने र २ घण्टामा १ पटक आराम गर्ने योजना बनाउने हो।",
   "e": "टुरिङमा मौसम र सडक अवस्थाले शरीर थाक्छ। लामो दूरीमा थकाइ बढ्ने भएकाले लगातार २ घण्टा मात्र, आराम स्थान पहिल्यै तोकेर, नथाक्ने योजना बनाउनु महत्त्वपूर्ण छ। (पृष्ठ 300)"
  },
  "en": {
   "q": "For group touring on motorcycles, plan continuous riding of at most 2 hours, with a break once every 2 hours.",
   "e": "Touring drains stamina depending on weather and conditions. Especially on long rides, limit continuous riding to 2 hours, decide rest points in advance, and plan without overexertion. (P.300)"
  },
  "idn": {
   "q": "Untuk touring berkelompok dengan motor, rencanakan berkendara terus-menerus maksimal 2 jam, dengan istirahat sekali setiap 2 jam.",
   "e": "Touring menguras stamina tergantung cuaca dan kondisi. Terutama jarak jauh, batasi berkendara 2 jam, tentukan tempat istirahat lebih dulu, dan rencanakan tanpa memaksakan diri. (Hal.300)"
  }
 },
 {
  "id": "25-2",
  "cat": "学科25",
  "q": "集団ツーリング（しゅうだんツーリング）では、台数（だいすう）が多い（おおい）場合（ばあい）は小グループ（しょうグループ）に分け（わけ）、1グループ4～5人（よんからごにん）程度（ていど）で走行（そうこう）するようにする。",
  "a": true,
  "exp": "長い（ながい）列（れつ）を作って（つくって）走行（そうこう）すると、他の交通（こうつう）の迷惑（めいわく）になることがあります。台数（だいすう）が多い（おおい）場合（ばあい）は、小グループ（しょうグループ）に分け（わけ）、1グループ4～5人（よんからごにん）くらいまでで走行（そうこう）するようにします。（300P）",
  "img": null,
  "vi": {
   "q": "Khi tour theo đoàn, nếu số xe nhiều thì chia thành nhóm nhỏ, mỗi nhóm khoảng 4–5 người.",
   "e": "Chạy thành hàng dài gây phiền cho giao thông khác. Khi đông, chia thành nhóm nhỏ khoảng 4–5 người mỗi nhóm. (Trang 300)"
  },
  "ne": {
   "q": "समूह टुरिङमा गाडी धेरै भए साना समूहमा बाँडेर १ समूहमा ४–५ जनाजति भई चल्ने हो।",
   "e": "लामो लाइनले अरूलाई बाधा दिन्छ। धेरै भए ४–५ जनाका साना समूह बनाउनुहोस्। (पृष्ठ 300)"
  },
  "en": {
   "q": "In group touring, when there are many bikes, divide into small groups of about 4–5 riders each.",
   "e": "Long lines of bikes trouble other traffic. With many bikes, split into small groups of about 4–5. (P.300)"
  },
  "idn": {
   "q": "Dalam touring berkelompok, jika jumlah motor banyak, bagilah menjadi kelompok kecil sekitar 4–5 orang per kelompok.",
   "e": "Barisan panjang mengganggu lalu lintas lain. Jika banyak, bagi menjadi kelompok kecil 4–5 orang. (Hal.300)"
  }
 },
 {
  "id": "25-3",
  "cat": "学科25",
  "q": "集団ツーリング（しゅうだんツーリング）では、初心者（しょしんしゃ）は後ろからついて行きやすいように、最後尾（さいこうび）に配置（はいち）するのがよい。",
  "a": false,
  "exp": "初心者（しょしんしゃ）を最後尾（さいこうび）にすると、遅れたり（おくれたり）、グループから離れたり（はなれたり）するおそれがあります。初心者（しょしんしゃ）は中央（ちゅうおう）に配置（はいち）し、先頭（せんとう）にリーダー、最後尾（さいこうび）にベテランを配置（はいち）するのが基本（きほん）です。（301P）",
  "img": null,
  "vi": {
   "q": "Trong tour theo đoàn, nên xếp người mới lái ở cuối đoàn để dễ đi theo phía sau.",
   "e": "Xếp người mới ở cuối có nguy cơ bị tụt lại, tách khỏi nhóm. Cơ bản: người mới ở giữa, trưởng nhóm dẫn đầu, người kinh nghiệm ở cuối. (Trang 301)"
  },
  "ne": {
   "q": "समूह टुरिङमा नयाँ चालकलाई पछ्याउन सजिलो होस् भनी सबैभन्दा पछाडि राख्नु राम्रो हो।",
   "e": "नयाँलाई पछाडि राखे छुट्ने खतरा हुन्छ। नयाँ बीचमा, अगाडि लिडर, पछाडि अनुभवी राख्नु आधारभूत हो। (पृष्ठ 301)"
  },
  "en": {
   "q": "In group touring, beginners should be placed at the very rear so they can follow easily.",
   "e": "Beginners at the rear risk falling behind or getting separated. Basics: beginners in the middle, leader at the front, veteran at the rear. (P.301)"
  },
  "idn": {
   "q": "Dalam touring berkelompok, pemula sebaiknya ditempatkan paling belakang agar mudah mengikuti.",
   "e": "Pemula di belakang berisiko tertinggal atau terpisah. Dasarnya: pemula di tengah, pemimpin di depan, senior di belakang. (Hal.301)"
  }
 },
 {
  "id": "25-4",
  "cat": "学科25",
  "q": "目的地（もくてきち）までの経路（けいろ）を決める（きめる）ときは、いつも最短距離（さいたんきょり）や最短時間（さいたんじかん）になるようにし、幹線道路（かんせんどうろ）は避けて裏道（うらみち）を選ぶ（えらぶ）のがよい。",
  "a": false,
  "exp": "経路（けいろ）を選ぶ（えらぶ）ときは、最短距離（さいたんきょり）や最短時間（さいたんじかん）にこだわるより、わかりやすい道（みち）を選ぶ（えらぶ）ほうが無難（ぶなん）です。裏道（うらみち）は道幅（みちはば）が狭かったり（せまかったり）、わかりにくかったりすることがあるため、必ず（かならず）しも安全（あんぜん）で走り（はしり）やすいとは限りません（かぎりません）。（297P）",
  "img": null,
  "vi": {
   "q": "Khi quyết định lộ trình đến đích, luôn chọn quãng đường/thời gian ngắn nhất và tránh đường trục chính, chọn đường tắt phía sau.",
   "e": "Khi chọn lộ trình, thay vì cố chọn ngắn nhất, chọn đường dễ hiểu sẽ an toàn hơn. Đường tắt có thể hẹp và khó hiểu, không hẳn an toàn dễ đi. (Trang 297)"
  },
  "ne": {
   "q": "गन्तव्यको बाटो छान्दा सधैँ छोटो दूरी/समय हुने गरी, मुख्य सडक छोडेर भित्री बाटो रोज्नु राम्रो हो।",
   "e": "छोटोमा जिद्दी नगरी बुझ्न सजिलो बाटो रोज्नु उत्तम हो। भित्री बाटा साँघुरा र अलमलिने हुनसक्ने भएकाले सधैँ सुरक्षित हुँदैनन्। (पृष्ठ 297)"
  },
  "en": {
   "q": "When planning a route, always aim for the shortest distance or time, avoiding main roads in favor of back streets.",
   "e": "Rather than insisting on the shortest, choosing easy-to-follow roads is safer. Back streets can be narrow and confusing — not necessarily safe or easy. (P.297)"
  },
  "idn": {
   "q": "Saat menentukan rute tujuan, selalu pilih jarak/waktu terpendek dan hindari jalan utama demi jalan tikus.",
   "e": "Daripada memaksakan yang terpendek, memilih jalan yang mudah dipahami lebih aman. Jalan tikus bisa sempit dan membingungkan — belum tentu aman. (Hal.297)"
  }
 },
 {
  "id": "25-5",
  "cat": "学科25",
  "q": "走行中（そうこうちゅう）に経路（けいろ）をまちがえたときは、あわてず安全（あんぜん）な場所（ばしょ）に車（くるま）を止め、地図（ちず）を確認（かくにん）したり、周囲（しゅうい）の人（ひと）に尋ねたり（たずねたり）して、落ち着いて（おちついて）正しい（ただしい）経路（けいろ）を確認（かくにん）する。",
  "a": true,
  "exp": "走行中（そうこうちゅう）に経路（けいろ）をまちがえたときは、あわてず安全（あんぜん）な場所（ばしょ）に車（くるま）を止め、地図（ちず）を確認（かくにん）したり、周囲（しゅうい）の人（ひと）に尋ねたり（たずねたり）して、落ち着いて（おちついて）正しい（ただしい）経路（けいろ）を確認（かくにん）しましょう。（299P）",
  "img": null,
  "vi": {
   "q": "Khi đi nhầm đường lúc đang chạy, không hoảng hốt, dừng xe ở nơi an toàn, xem bản đồ hay hỏi người xung quanh để bình tĩnh xác nhận lại đường đúng.",
   "e": "Khi nhầm đường, không hoảng, dừng ở nơi an toàn, xem bản đồ hay hỏi người xung quanh, bình tĩnh xác nhận lộ trình đúng. (Trang 299)"
  },
  "ne": {
   "q": "चल्दै गर्दा बाटो बिराए नआत्तिई सुरक्षित ठाउँमा गाडी रोकी नक्सा हेरेर वा मानिसलाई सोधेर शान्त भई सही बाटो पत्ता लगाउने हो।",
   "e": "बाटो बिराए नआत्तिई सुरक्षित ठाउँमा रोकेर नक्सा वा सोधपुछबाट सही बाटो यकिन गर्नुहोस्। (पृष्ठ 299)"
  },
  "en": {
   "q": "If you take a wrong route while driving, do not panic; stop in a safe place, check a map or ask people nearby, and calmly confirm the correct route.",
   "e": "If you go the wrong way, stop safely, check a map or ask someone, and calmly confirm the right route. (P.299)"
  },
  "idn": {
   "q": "Jika salah rute saat berkendara, jangan panik; berhentilah di tempat aman, periksa peta atau tanya orang sekitar, lalu pastikan rute yang benar dengan tenang.",
   "e": "Jika salah jalan, berhenti di tempat aman, cek peta atau bertanya, dan pastikan rute dengan tenang. (Hal.299)"
  }
 },
 {
  "id": "26-1",
  "cat": "学科26",
  "q": "高速道路（こうそくどうろ）とは、「高速自動車国道（こうそくじどうしゃこくどう）」と「自動車専用道路（じどうしゃせんようどうろ）」を合わせた（あわせた）ものをいう。",
  "a": true,
  "exp": "高速道路（こうそくどうろ）とは、「高速自動車国道（こうそくじどうしゃこくどう）」と「自動車専用道路（じどうしゃせんようどうろ）」のことをいいます。（304P）",
  "img": null,
  "vi": {
   "q": "Đường cao tốc là tên gọi chung của \"quốc lộ cao tốc dành cho ô tô\" và \"đường chuyên dụng cho ô tô\".",
   "e": "Đường cao tốc gồm \"quốc lộ cao tốc\" và \"đường chuyên dụng cho ô tô\". (Trang 304)"
  },
  "ne": {
   "q": "हाइवे (高速道路) भनेको 「हाइस्पिड राष्ट्रिय सडक」 र 「अटोमोबाइल विशेष सडक」 दुवैलाई जोडेर भनिने नाम हो।",
   "e": "हाइवे भन्नाले हाइस्पिड राष्ट्रिय सडक र अटोमोबाइल विशेष सडक हुन्। (पृष्ठ 304)"
  },
  "en": {
   "q": "\"Expressways\" refers to national expressways and motor-vehicle-only roads combined.",
   "e": "Expressways = national expressways + motor-vehicle-only roads. (P.304)"
  },
  "idn": {
   "q": "\"Jalan tol/ekspres\" adalah gabungan dari \"jalan nasional berkecepatan tinggi\" dan \"jalan khusus mobil\".",
   "e": "Jalan ekspres = jalan nasional cepat + jalan khusus mobil. (Hal.304)"
  }
 },
 {
  "id": "26-2",
  "cat": "学科26",
  "q": "小型特殊自動車（こがたとくしゅじどうしゃ）は、高速自動車国道（こうそくじどうしゃこくどう）は通行（つうこう）できないが、自動車専用道路（じどうしゃせんようどうろ）は通行（つうこう）できる。",
  "a": true,
  "exp": "小型特殊自動車（こがたとくしゅじどうしゃ）は、高速自動車国道（こうそくじどうしゃこくどう）は通行（つうこう）できませんが、自動車専用道路（じどうしゃせんようどうろ）は通行（つうこう）できます。高速自動車国道（こうそくじどうしゃこくどう）と自動車専用道路（じどうしゃせんようどうろ）では、通行（つうこう）できる車（くるま）の範囲（はんい）が一部（いちぶ）異なります（ことなります）。（304P）",
  "img": null,
  "vi": {
   "q": "Xe đặc thù loại nhỏ không được đi trên quốc lộ cao tốc, nhưng được đi trên đường chuyên dụng cho ô tô.",
   "e": "Xe đặc thù loại nhỏ: không được đi quốc lộ cao tốc nhưng được đi đường chuyên dụng. Phạm vi xe được phép của hai loại đường có phần khác nhau. (Trang 304)"
  },
  "ne": {
   "q": "साना विशेष गाडी हाइस्पिड राष्ट्रिय सडकमा चल्न मिल्दैन, तर अटोमोबाइल विशेष सडकमा चल्न मिल्छ।",
   "e": "साना विशेष गाडी: हाइस्पिड राष्ट्रिय सडकमा निषेध तर विशेष सडकमा मिल्छ। दुई सडकमा चल्न मिल्ने गाडीको दायरा केही फरक छ। (पृष्ठ 304)"
  },
  "en": {
   "q": "Small special vehicles cannot use national expressways but can use motor-vehicle-only roads.",
   "e": "Small special vehicles: not allowed on national expressways but allowed on motor-vehicle-only roads. Permitted vehicles differ slightly between the two. (P.304)"
  },
  "idn": {
   "q": "Kendaraan khusus kecil tidak boleh melewati jalan nasional cepat, tetapi boleh melewati jalan khusus mobil.",
   "e": "Kendaraan khusus kecil: dilarang di jalan nasional cepat tetapi boleh di jalan khusus mobil. Cakupan kendaraan kedua jalan sedikit berbeda. (Hal.304)"
  }
 },
 {
  "id": "26-3",
  "cat": "学科26",
  "q": "高速自動車国道（こうそくじどうしゃこくどう）（本線車道（ほんせんしゃどう））における大型貨物自動車（おおがたかもつじどうしゃ）の最高速度（さいこうそくど）は100km/hである。",
  "a": false,
  "exp": "大型貨物自動車（おおがたかもつじどうしゃ）の最高速度（さいこうそくど）は90km/hです。最低速度（さいていそくど）は50km/hです。（305P）",
  "img": null,
  "vi": {
   "q": "Tốc độ tối đa của xe tải cỡ lớn trên làn chính quốc lộ cao tốc là 100 km/h.",
   "e": "Tốc độ tối đa của xe tải cỡ lớn là 90 km/h. Tốc độ tối thiểu là 50 km/h. (Trang 305)"
  },
  "ne": {
   "q": "हाइस्पिड राष्ट्रिय सडक (मुख्य लेन) मा ठूलो ट्रकको अधिकतम गति १०० किमी/घण्टा हो।",
   "e": "ठूलो ट्रकको अधिकतम गति ९० किमी/घण्टा हो। न्यूनतम गति ५० किमी/घण्टा हो। (पृष्ठ 305)"
  },
  "en": {
   "q": "The maximum speed for large trucks on the main lanes of national expressways is 100 km/h.",
   "e": "The maximum for large trucks is 90 km/h; the minimum is 50 km/h. (P.305)"
  },
  "idn": {
   "q": "Kecepatan maksimum truk besar di lajur utama jalan nasional cepat adalah 100 km/jam.",
   "e": "Maksimum truk besar 90 km/jam; minimum 50 km/jam. (Hal.305)"
  }
 },
 {
  "id": "26-4",
  "cat": "学科26",
  "q": "自動車専用道路（じどうしゃせんようどうろ）での最高速度（さいこうそくど）や最低速度（さいていそくど）は、一般道路（いっぱんどうろ）と同じである。",
  "a": true,
  "exp": "自動車専用道路（じどうしゃせんようどうろ）での最高速度（さいこうそくど）や最低速度（さいていそくど）は、高速自動車国道（こうそくじどうしゃこくどう）とは異なり（ことなり）、一般道路（いっぱんどうろ）と同じ（おなじ）です。（305P）",
  "img": null,
  "vi": {
   "q": "Tốc độ tối đa và tối thiểu trên đường chuyên dụng cho ô tô giống với đường thông thường.",
   "e": "Trên đường chuyên dụng, tốc độ tối đa/tối thiểu khác với quốc lộ cao tốc — giống đường thông thường. (Trang 305)"
  },
  "ne": {
   "q": "अटोमोबाइल विशेष सडकको अधिकतम र न्यूनतम गति सामान्य सडक सरह हो।",
   "e": "विशेष सडकमा गति सीमा हाइस्पिड राष्ट्रिय सडकभन्दा फरक — सामान्य सडक सरह हो। (पृष्ठ 305)"
  },
  "en": {
   "q": "Maximum and minimum speeds on motor-vehicle-only roads are the same as on ordinary roads.",
   "e": "On motor-vehicle-only roads, unlike national expressways, speed limits are the same as ordinary roads. (P.305)"
  },
  "idn": {
   "q": "Kecepatan maksimum dan minimum di jalan khusus mobil sama dengan jalan biasa.",
   "e": "Di jalan khusus mobil, berbeda dari jalan nasional cepat, batas kecepatannya sama dengan jalan biasa. (Hal.305)"
  }
 },
 {
  "id": "26-5",
  "cat": "学科26",
  "q": "高速自動車国道（こうそくじどうしゃこくどう）の本線車道（ほんせんしゃどう）とは、加速車線（かそくしゃせん）、減速車線（げんそくしゃせん）、登坂車線（とうはんしゃせん）、路側帯（ろそくたい）、路肩（ろかた）を除いた（のぞいた）高速走行（こうそくそうこう）する部分（ぶぶん）をいう。",
  "a": true,
  "exp": "本線車道（ほんせんしゃどう）とは、高速自動車国道（こうそくじどうしゃこくどう）で高速走行（こうそくそうこう）するための部分（ぶぶん）をいいます。 加速車線（かそくしゃせん）、減速車線（げんそくしゃせん）、登坂車線（とうはんしゃせん）、路側帯（ろそくたい）、路肩（ろかた）は本線車道（ほんせんしゃどう）に含まれません（ふくまれません）。（305P）",
  "img": null,
  "vi": {
   "q": "Làn chính của quốc lộ cao tốc là phần chạy tốc độ cao, không bao gồm làn tăng tốc, làn giảm tốc, làn leo dốc, dải lề đường và lề đường.",
   "e": "Làn chính là phần để chạy tốc độ cao. Làn tăng tốc, giảm tốc, leo dốc, dải lề và lề đường không thuộc làn chính. (Trang 305)"
  },
  "ne": {
   "q": "हाइस्पिड राष्ट्रिय सडकको मुख्य लेन भनेको एक्सेलेरेसन लेन, डिसेलेरेसन लेन, उकालो लेन, किनारा पट्टी र काँध बाहेकको हाइस्पिडमा चल्ने भाग हो।",
   "e": "मुख्य लेन हाइस्पिडमा चल्ने भाग हो। एक्सेलेरेसन, डिसेलेरेसन, उकालो लेन, पट्टी र काँध यसमा पर्दैनन्। (पृष्ठ 305)"
  },
  "en": {
   "q": "The main lanes of a national expressway are the parts for high-speed driving, excluding acceleration lanes, deceleration lanes, climbing lanes, roadside strips, and shoulders.",
   "e": "Main lanes are for high-speed travel. Acceleration, deceleration, climbing lanes, strips, and shoulders are not included. (P.305)"
  },
  "idn": {
   "q": "Lajur utama jalan nasional cepat adalah bagian untuk melaju cepat, tidak termasuk lajur percepatan, lajur perlambatan, lajur tanjakan, lajur tepi, dan bahu jalan.",
   "e": "Lajur utama untuk laju cepat. Lajur percepatan, perlambatan, tanjakan, lajur tepi, dan bahu tidak termasuk. (Hal.305)"
  }
 },
 {
  "id": "26-6",
  "cat": "学科26",
  "q": "高速道路（こうそくどうろ）を時速（じそく）100キロメートルで走行（そうこう）しているときは、100メートル以上（いじょう）の車間距離（しゃかんきょり）をとる必要（ひつよう）がある。",
  "a": true,
  "exp": "高速道路（こうそくどうろ）では、時速（じそく）の数字（すうじ）をメートルに読みかえた（よみかえた）距離（きょり）が車間距離（しゃかんきょり）の目安（めやす）になります。 したがって、時速（じそく）100キロメートルで走行（そうこう）しているときは、100メートル以上（いじょう）の車間距離（しゃかんきょり）をとる必要（ひつよう）があります。（305P）",
  "img": null,
  "vi": {
   "q": "Khi chạy 100 km/h trên đường cao tốc, cần giữ khoảng cách xe từ 100m trở lên.",
   "e": "Trên cao tốc, lấy con số tốc độ đổi sang mét làm mốc khoảng cách xe. Chạy 100 km/h thì cần khoảng cách từ 100m trở lên. (Trang 305)"
  },
  "ne": {
   "q": "हाइवेमा १०० किमी/घण्टामा चल्दा १०० मिटर वा बढी गाडीबीचको दूरी राख्नु आवश्यक छ।",
   "e": "हाइवेमा गतिको अङ्कलाई मिटरमा बदलेको दूरी मापदण्ड हो। १०० किमी/घण्टामा १०० मिटर वा बढी दूरी चाहिन्छ। (पृष्ठ 305)"
  },
  "en": {
   "q": "When driving at 100 km/h on an expressway, you need a following distance of 100 meters or more.",
   "e": "On expressways, use the speed figure converted to meters as the guide. At 100 km/h, keep 100 m or more. (P.305)"
  },
  "idn": {
   "q": "Saat melaju 100 km/jam di jalan tol, perlu jarak antar kendaraan 100 meter atau lebih.",
   "e": "Di tol, angka kecepatan diubah ke meter sebagai patokan jarak. Pada 100 km/jam, jaga 100 m atau lebih. (Hal.305)"
  }
 },
 {
  "id": "26-7",
  "cat": "学科26",
  "q": "高速道路（こうそくどうろ）を走行（そうこう）するときは、左側（ひだりがわ）の白線（はくせん）を目安（めやす）にして、車両通行帯（しゃりょうつうこうたい）のやや左寄り（ひだりより）を走行（そうこう）するとよい。",
  "a": true,
  "exp": "走行（そうこう）中（ちゅう）は、左側（ひだりがわ）の白線（はくせん）を目安（めやす）にして、車両通行帯（しゃりょうつうこうたい）のやや左寄り（ひだりより）を通行（つうこう）します。これにより、後方（こうほう）の車（くるま）が追い越す（おいこす）ときに十分（じゅうぶん）な間隔（かんかく）がとれ、接触事故（せっしょくじこ）の防止（ぼうし）に役立ちます（やくだちます）。（307P）",
  "img": null,
  "vi": {
   "q": "Khi chạy trên đường cao tốc, nên lấy vạch trắng bên trái làm mốc và chạy hơi lệch về bên trái của làn xe.",
   "e": "Lấy vạch trắng bên trái làm mốc, chạy hơi lệch trái trong làn. Nhờ đó xe sau khi vượt có đủ khoảng cách, giúp phòng tránh tai nạn va chạm. (Trang 307)"
  },
  "ne": {
   "q": "हाइवेमा चल्दा बायाँको सेतो रेखालाई मापदण्ड बनाई लेनको अलि बायाँतिर चल्नु राम्रो हो।",
   "e": "बायाँ सेतो रेखा हेरेर लेनको अलि बायाँ चल्ने। यसले उछिन्ने गाडीलाई पर्याप्त दूरी दिई ठक्कर रोक्न मद्दत गर्छ। (पृष्ठ 307)"
  },
  "en": {
   "q": "On expressways, use the white line on the left as a guide and drive slightly to the left within the lane.",
   "e": "Drive slightly left in the lane using the left white line as a guide. This gives overtaking vehicles enough clearance and helps prevent contact. (P.307)"
  },
  "idn": {
   "q": "Di jalan tol, gunakan garis putih kiri sebagai patokan dan melajulah agak ke kiri dalam lajur.",
   "e": "Melaju agak ke kiri dengan patokan garis putih kiri. Ini memberi ruang cukup bagi yang menyalip dan mencegah senggolan. (Hal.307)"
  }
 },
 {
  "id": "26-8",
  "cat": "学科26",
  "q": "スタンディングウェーブ現象（げんしょう）とは、タイヤの空気圧（くうきあつ）が高すぎる（たかすぎる）ときに必ず（かならず）起こる（おこる）現象（げんしょう）である。",
  "a": false,
  "exp": "スタンディングウェーブ現象（げんしょう）は、主（おも）にタイヤの空気圧（くうきあつ）が低い（ひくい）状態（じょうたい）で高速走行（こうそくそうこう）を続けた（つづけた）ときに起こり（おこり）やすい現象（げんしょう）です。（312P）",
  "img": null,
  "vi": {
   "q": "Hiện tượng standing wave là hiện tượng nhất định xảy ra khi áp suất lốp quá cao.",
   "e": "Standing wave chủ yếu xảy ra khi chạy tốc độ cao liên tục với áp suất lốp thấp. (Trang 312)"
  },
  "ne": {
   "q": "स्ट्यान्डिङ वेभ घटना टायरको हावाको चाप धेरै हुँदा पक्कै हुने घटना हो।",
   "e": "स्ट्यान्डिङ वेभ मुख्यतः हावाको चाप कम भएको अवस्थामा हाइस्पिडमा लगातार चल्दा हुन्छ। (पृष्ठ 312)"
  },
  "en": {
   "q": "The standing wave phenomenon always occurs when tire pressure is too HIGH.",
   "e": "Standing waves mainly occur during sustained high-speed driving with LOW tire pressure. (P.312)"
  },
  "idn": {
   "q": "Fenomena standing wave pasti terjadi saat tekanan angin ban terlalu TINGGI.",
   "e": "Standing wave terutama terjadi saat melaju cepat terus-menerus dengan tekanan ban RENDAH. (Hal.312)"
  }
 },
 {
  "id": "26-9",
  "cat": "学科26",
  "q": "高速道路（こうそくどうろ）上（じょう）で故障（こしょう）などにより停止（ていし）するときは、停止（ていし）していることを表示（ひょうじ）する停止表示器材（ていしひょうじきざい）を置かなければ（おかなければ）ならない。",
  "a": true,
  "exp": "高速道路（こうそくどうろ）上（じょう）で故障（こしょう）などにより停止（ていし）するときは、後続車（こうぞくしゃ）に停止（ていし）していることを知らせる（しらせる）ため、停止表示板（ていしひょうじばん）や停止表示灯（ていしひょうじとう）などの停止表示器材（ていしひょうじきざい）を置く（おく）必要（ひつよう）があります。（313P）",
  "img": null,
  "vi": {
   "q": "Khi dừng trên đường cao tốc do hỏng xe v.v., phải đặt thiết bị báo hiệu dừng xe.",
   "e": "Khi dừng do hỏng xe, phải đặt thiết bị báo hiệu dừng (biển báo dừng hay đèn báo dừng) để báo cho xe phía sau. (Trang 313)"
  },
  "ne": {
   "q": "हाइवेमा गाडी बिग्रेर रोकिँदा, रोकिएको जनाउने स्टप डिस्प्ले उपकरण राख्नुपर्छ।",
   "e": "बिग्रेर रोकिँदा पछाडिका गाडीलाई जनाउन स्टप बोर्ड वा स्टप बत्ती जस्ता उपकरण राख्नुपर्छ। (पृष्ठ 313)"
  },
  "en": {
   "q": "When stopping on an expressway due to breakdown etc., you must place a stop display device (warning triangle etc.).",
   "e": "When stopped due to breakdown, place a stop display device (warning triangle or light) to alert following vehicles. (P.313)"
  },
  "idn": {
   "q": "Saat berhenti di jalan tol karena mogok dsb., wajib memasang alat penanda berhenti (segitiga pengaman dll.).",
   "e": "Saat berhenti karena mogok, pasang alat penanda berhenti (segitiga atau lampu) untuk memperingatkan kendaraan belakang. (Hal.313)"
  }
 },
 {
  "id": "26-10",
  "cat": "学科26",
  "q": "高速道路（こうそくどうろ）の本線車道（ほんせんしゃどう）へ進入（しんにゅう）するときは、一時停止（いちじていし）または徐行（じょこう）して、本線車道（ほんせんしゃどう）を通行（つうこう）している車（くるま）の進行（しんこう）を妨げない（さまたげない）ようにしなければならない。",
  "a": false,
  "exp": "高速道路（こうそくどうろ）の本線車道（ほんせんしゃどう）へ進入（しんにゅう）するときは、一時停止（いちじていし）や徐行（じょこう）ではなく、加速車線（かそくしゃせん）を利用（りよう）して十分（じゅうぶん）に加速（かそく）し、本線車道（ほんせんしゃどう）を通行（つうこう）している車（くるま）の進行（しんこう）を妨げない（さまたげない）ようにしなければなりません。（316P）",
  "img": null,
  "vi": {
   "q": "Khi nhập vào làn chính đường cao tốc, phải dừng lại hoặc đi chậm để không cản trở xe đang chạy trên làn chính.",
   "e": "Khi nhập làn chính, không dừng hay đi chậm mà dùng làn tăng tốc để tăng tốc đầy đủ, nhập làn sao cho không cản trở xe trên làn chính. (Trang 316)"
  },
  "ne": {
   "q": "हाइवेको मुख्य लेनमा पस्दा एकपटक रोकिने वा ढिलो गतिमा गई मुख्य लेनका गाडीलाई बाधा नपुर्‍याउने गर्नुपर्छ।",
   "e": "मुख्य लेनमा पस्दा रोकिने/ढिलो होइन, एक्सेलेरेसन लेनमा राम्ररी गति बढाएर बाधा नपुर्‍याई पस्ने हो। (पृष्ठ 316)"
  },
  "en": {
   "q": "When entering the main lanes of an expressway, you must stop momentarily or slow down so as not to obstruct vehicles on the main lanes.",
   "e": "Do not stop or crawl; use the acceleration lane to gain enough speed and merge without obstructing traffic. (P.316)"
  },
  "idn": {
   "q": "Saat masuk lajur utama jalan tol, harus berhenti sejenak atau melambat agar tidak mengganggu kendaraan di lajur utama.",
   "e": "Jangan berhenti atau pelan; gunakan lajur percepatan untuk menambah kecepatan dan bergabung tanpa mengganggu. (Hal.316)"
  }
 }
];
