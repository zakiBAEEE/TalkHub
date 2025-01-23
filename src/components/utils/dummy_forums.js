const data = [
  {
    "id": 1,
    "nama": "Ruang Diskusi 1",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Isabella Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,1",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 1000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-09-15"
      },
      {
        "id": 1001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-07-02"
      },
      {
        "id": 1002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-10-20"
      },
      {
        "id": 1003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-03-16"
      }
    ]
  },
  {
    "id": 2,
    "nama": "Ruang Diskusi 2",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,2",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 2000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Young",
        "tanggal": "2025-07-21"
      },
      {
        "id": 2001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-01-04"
      },
      {
        "id": 2002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-03-03"
      },
      {
        "id": 2003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-06-28"
      }
    ]
  },
  {
    "id": 3,
    "nama": "Ruang Diskusi 3",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Harper Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,3",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 3000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-01-26"
      },
      {
        "id": 3001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-04-07"
      },
      {
        "id": 3002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-06-01"
      },
      {
        "id": 3003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-11-13"
      }
    ]
  },
  {
    "id": 4,
    "nama": "Ruang Diskusi 4",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Oliver Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,4",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 4000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-07-23"
      },
      {
        "id": 4001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-07-01"
      },
      {
        "id": 4002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-09-16"
      },
      {
        "id": 4003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-06-18"
      }
    ]
  },
  {
    "id": 5,
    "nama": "Ruang Diskusi 5",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Isabella Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,5",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 5000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-07-25"
      },
      {
        "id": 5001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-03-18"
      },
      {
        "id": 5002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-11-28"
      },
      {
        "id": 5003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-05-08"
      }
    ]
  },
  {
    "id": 6,
    "nama": "Ruang Diskusi 6",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,6",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 6000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-02-19"
      },
      {
        "id": 6001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-11-13"
      },
      {
        "id": 6002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-11-19"
      },
      {
        "id": 6003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-04-26"
      }
    ]
  },
  {
    "id": 7,
    "nama": "Ruang Diskusi 7",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Harper Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,7",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 7000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-11-07"
      },
      {
        "id": 7001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-02-11"
      },
      {
        "id": 7002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-06-28"
      },
      {
        "id": 7003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-03-20"
      }
    ]
  },
  {
    "id": 8,
    "nama": "Ruang Diskusi 8",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Oliver Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,8",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 8000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-06-25"
      },
      {
        "id": 8001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-08-12"
      },
      {
        "id": 8002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-10-18"
      },
      {
        "id": 8003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-06-02"
      }
    ]
  },
  {
    "id": 9,
    "nama": "Ruang Diskusi 9",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,9",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 9000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-12-09"
      },
      {
        "id": 9001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-07-11"
      },
      {
        "id": 9002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-01-09"
      },
      {
        "id": 9003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-07-26"
      }
    ]
  },
  {
    "id": 10,
    "nama": "Ruang Diskusi 10",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Sophia Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,10",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 10000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-05-17"
      },
      {
        "id": 10001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-08-25"
      },
      {
        "id": 10002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-09-23"
      },
      {
        "id": 10003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-12-19"
      }
    ]
  },
  {
    "id": 11,
    "nama": "Ruang Diskusi 11",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Mason Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,11",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 11000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-01-02"
      },
      {
        "id": 11001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-11-26"
      },
      {
        "id": 11002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-07-24"
      },
      {
        "id": 11003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-02-10"
      }
    ]
  },
  {
    "id": 12,
    "nama": "Ruang Diskusi 12",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Oliver Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,12",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 12000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-07-26"
      },
      {
        "id": 12001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-01-28"
      },
      {
        "id": 12002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-05-16"
      },
      {
        "id": 12003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-07-18"
      }
    ]
  },
  {
    "id": 13,
    "nama": "Ruang Diskusi 13",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Sophia Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,13",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 13000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-03-03"
      },
      {
        "id": 13001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-05-23"
      },
      {
        "id": 13002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-12-24"
      },
      {
        "id": 13003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-07-23"
      }
    ]
  },
  {
    "id": 14,
    "nama": "Ruang Diskusi 14",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Harper Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,14",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 14000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-09-13"
      },
      {
        "id": 14001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-10-18"
      },
      {
        "id": 14002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-09-25"
      },
      {
        "id": 14003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-02-24"
      }
    ]
  },
  {
    "id": 15,
    "nama": "Ruang Diskusi 15",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,15",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 15000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-02-03"
      },
      {
        "id": 15001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-09-08"
      },
      {
        "id": 15002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-03-07"
      },
      {
        "id": 15003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-05-22"
      }
    ]
  },
  {
    "id": 16,
    "nama": "Ruang Diskusi 16",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Sophia Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,16",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 16000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-06-20"
      },
      {
        "id": 16001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-10-01"
      },
      {
        "id": 16002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-03-06"
      },
      {
        "id": 16003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-11-12"
      }
    ]
  },
  {
    "id": 17,
    "nama": "Ruang Diskusi 17",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,17",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 17000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-05-25"
      },
      {
        "id": 17001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-11-04"
      },
      {
        "id": 17002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-06-04"
      },
      {
        "id": 17003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-12-05"
      }
    ]
  },
  {
    "id": 18,
    "nama": "Ruang Diskusi 18",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Harper Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,18",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 18000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-08-22"
      },
      {
        "id": 18001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-03-26"
      },
      {
        "id": 18002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-06-26"
      },
      {
        "id": 18003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-09-12"
      }
    ]
  },
  {
    "id": 19,
    "nama": "Ruang Diskusi 19",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Sophia Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,19",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 19000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-11-08"
      },
      {
        "id": 19001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-03-14"
      },
      {
        "id": 19002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Young",
        "tanggal": "2025-04-03"
      },
      {
        "id": 19003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-08-13"
      }
    ]
  },
  {
    "id": 20,
    "nama": "Ruang Diskusi 20",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Sophia Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,20",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 20000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-07-18"
      },
      {
        "id": 20001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-12-24"
      },
      {
        "id": 20002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-12-06"
      },
      {
        "id": 20003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-01-05"
      }
    ]
  },
  {
    "id": 21,
    "nama": "Ruang Diskusi 21",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Oliver Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,21",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 21000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-07-01"
      },
      {
        "id": 21001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-03-16"
      },
      {
        "id": 21002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-10-05"
      },
      {
        "id": 21003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-11-15"
      }
    ]
  },
  {
    "id": 22,
    "nama": "Ruang Diskusi 22",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,22",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 22000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-10-21"
      },
      {
        "id": 22001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-12-17"
      },
      {
        "id": 22002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-03-24"
      },
      {
        "id": 22003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-12-16"
      }
    ]
  },
  {
    "id": 23,
    "nama": "Ruang Diskusi 23",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,23",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 23000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-05-18"
      },
      {
        "id": 23001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-12-09"
      },
      {
        "id": 23002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-10-15"
      },
      {
        "id": 23003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-10-12"
      }
    ]
  },
  {
    "id": 24,
    "nama": "Ruang Diskusi 24",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Harper Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,24",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 24000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-04-12"
      },
      {
        "id": 24001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-11-10"
      },
      {
        "id": 24002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-08-07"
      },
      {
        "id": 24003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-11-28"
      }
    ]
  },
  {
    "id": 25,
    "nama": "Ruang Diskusi 25",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Mason Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,25",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 25000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-03-20"
      },
      {
        "id": 25001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-07-28"
      },
      {
        "id": 25002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-11-11"
      },
      {
        "id": 25003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-05-07"
      }
    ]
  },
  {
    "id": 26,
    "nama": "Ruang Diskusi 26",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Isabella Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,26",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 26000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-01-08"
      },
      {
        "id": 26001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-04-07"
      },
      {
        "id": 26002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-07-17"
      },
      {
        "id": 26003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-06-05"
      }
    ]
  },
  {
    "id": 27,
    "nama": "Ruang Diskusi 27",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Sophia Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,27",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 27000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-07-05"
      },
      {
        "id": 27001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-07-03"
      },
      {
        "id": 27002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-01-03"
      },
      {
        "id": 27003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-10-27"
      }
    ]
  },
  {
    "id": 28,
    "nama": "Ruang Diskusi 28",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Oliver Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,28",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 28000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-07-13"
      },
      {
        "id": 28001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-06-06"
      },
      {
        "id": 28002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-02-24"
      },
      {
        "id": 28003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-11-18"
      }
    ]
  },
  {
    "id": 29,
    "nama": "Ruang Diskusi 29",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Harper Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,29",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 29000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-05-05"
      },
      {
        "id": 29001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-03-22"
      },
      {
        "id": 29002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-08-04"
      },
      {
        "id": 29003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-12-14"
      }
    ]
  },
  {
    "id": 30,
    "nama": "Ruang Diskusi 30",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Harper Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,30",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 30000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-02-03"
      },
      {
        "id": 30001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-04-24"
      },
      {
        "id": 30002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-10-23"
      },
      {
        "id": 30003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-08-02"
      }
    ]
  },
  {
    "id": 31,
    "nama": "Ruang Diskusi 31",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Harper Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,31",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 31000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-11-28"
      },
      {
        "id": 31001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-06-19"
      },
      {
        "id": 31002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-01-07"
      },
      {
        "id": 31003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-08-18"
      }
    ]
  },
  {
    "id": 32,
    "nama": "Ruang Diskusi 32",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Isabella Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,32",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 32000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-10-19"
      },
      {
        "id": 32001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-01-21"
      },
      {
        "id": 32002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-10-07"
      },
      {
        "id": 32003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-05-08"
      }
    ]
  },
  {
    "id": 33,
    "nama": "Ruang Diskusi 33",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Isabella Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,33",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 33000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-12-04"
      },
      {
        "id": 33001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-06-26"
      },
      {
        "id": 33002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-08-11"
      },
      {
        "id": 33003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-06-24"
      }
    ]
  },
  {
    "id": 34,
    "nama": "Ruang Diskusi 34",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,34",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 34000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-01-25"
      },
      {
        "id": 34001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-05-24"
      },
      {
        "id": 34002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-12-21"
      },
      {
        "id": 34003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-01-05"
      }
    ]
  },
  {
    "id": 35,
    "nama": "Ruang Diskusi 35",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,35",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 35000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-11-18"
      },
      {
        "id": 35001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-03-08"
      },
      {
        "id": 35002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-01-09"
      },
      {
        "id": 35003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-07-21"
      }
    ]
  },
  {
    "id": 36,
    "nama": "Ruang Diskusi 36",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Oliver Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,36",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 36000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-10-21"
      },
      {
        "id": 36001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-02-07"
      },
      {
        "id": 36002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-08-28"
      },
      {
        "id": 36003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-02-12"
      }
    ]
  },
  {
    "id": 37,
    "nama": "Ruang Diskusi 37",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Oliver Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,37",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 37000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-05-20"
      },
      {
        "id": 37001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-11-21"
      },
      {
        "id": 37002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-05-14"
      },
      {
        "id": 37003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-09-01"
      }
    ]
  },
  {
    "id": 38,
    "nama": "Ruang Diskusi 38",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,38",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 38000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-09-18"
      },
      {
        "id": 38001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-04-08"
      },
      {
        "id": 38002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-06-17"
      },
      {
        "id": 38003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-05-26"
      }
    ]
  },
  {
    "id": 39,
    "nama": "Ruang Diskusi 39",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Mason Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,39",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 39000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-07-12"
      },
      {
        "id": 39001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-11-27"
      },
      {
        "id": 39002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-08-28"
      },
      {
        "id": 39003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-02-15"
      }
    ]
  },
  {
    "id": 40,
    "nama": "Ruang Diskusi 40",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Sophia Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,40",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 40000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-12-27"
      },
      {
        "id": 40001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-02-28"
      },
      {
        "id": 40002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-12-27"
      },
      {
        "id": 40003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-06-06"
      }
    ]
  },
  {
    "id": 41,
    "nama": "Ruang Diskusi 41",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Harper Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,41",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 41000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-10-14"
      },
      {
        "id": 41001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-04-26"
      },
      {
        "id": 41002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-12-25"
      },
      {
        "id": 41003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-01-10"
      }
    ]
  },
  {
    "id": 42,
    "nama": "Ruang Diskusi 42",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Mason Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,42",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 42000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-02-14"
      },
      {
        "id": 42001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-04-16"
      },
      {
        "id": 42002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-09-25"
      },
      {
        "id": 42003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-02-08"
      }
    ]
  },
  {
    "id": 43,
    "nama": "Ruang Diskusi 43",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Mason Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,43",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 43000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-04-24"
      },
      {
        "id": 43001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-12-02"
      },
      {
        "id": 43002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-05-13"
      },
      {
        "id": 43003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-02-07"
      }
    ]
  },
  {
    "id": 44,
    "nama": "Ruang Diskusi 44",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Sophia Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,44",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 44000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-07-15"
      },
      {
        "id": 44001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-12-14"
      },
      {
        "id": 44002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-04-02"
      },
      {
        "id": 44003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-08-20"
      }
    ]
  },
  {
    "id": 45,
    "nama": "Ruang Diskusi 45",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Harper Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,45",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 45000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-03-25"
      },
      {
        "id": 45001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-06-26"
      },
      {
        "id": 45002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-05-12"
      },
      {
        "id": 45003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-04-10"
      }
    ]
  },
  {
    "id": 46,
    "nama": "Ruang Diskusi 46",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Sophia Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,46",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 46000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Young",
        "tanggal": "2025-08-25"
      },
      {
        "id": 46001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-11-17"
      },
      {
        "id": 46002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-11-08"
      },
      {
        "id": 46003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-11-04"
      }
    ]
  },
  {
    "id": 47,
    "nama": "Ruang Diskusi 47",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,47",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 47000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-12-26"
      },
      {
        "id": 47001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-04-20"
      },
      {
        "id": 47002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-10-06"
      },
      {
        "id": 47003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-01-18"
      }
    ]
  },
  {
    "id": 48,
    "nama": "Ruang Diskusi 48",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Isabella Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,48",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 48000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-07-27"
      },
      {
        "id": 48001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-09-04"
      },
      {
        "id": 48002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-06-14"
      },
      {
        "id": 48003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-09-01"
      }
    ]
  },
  {
    "id": 49,
    "nama": "Ruang Diskusi 49",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Isabella Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,49",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 49000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-04-13"
      },
      {
        "id": 49001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-05-04"
      },
      {
        "id": 49002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-09-11"
      },
      {
        "id": 49003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-11-02"
      }
    ]
  },
  {
    "id": 50,
    "nama": "Ruang Diskusi 50",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Harper Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,50",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 50000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-12-03"
      },
      {
        "id": 50001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-07-05"
      },
      {
        "id": 50002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-04-22"
      },
      {
        "id": 50003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-01-26"
      }
    ]
  },
  {
    "id": 51,
    "nama": "Ruang Diskusi 51",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Oliver Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,51",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 51000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-12-21"
      },
      {
        "id": 51001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-08-18"
      },
      {
        "id": 51002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-03-02"
      },
      {
        "id": 51003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-06-02"
      }
    ]
  },
  {
    "id": 52,
    "nama": "Ruang Diskusi 52",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Isabella Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,52",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 52000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-08-14"
      },
      {
        "id": 52001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-05-25"
      },
      {
        "id": 52002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-10-23"
      },
      {
        "id": 52003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-07-28"
      }
    ]
  },
  {
    "id": 53,
    "nama": "Ruang Diskusi 53",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Harper Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,53",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 53000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-03-27"
      },
      {
        "id": 53001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-04-23"
      },
      {
        "id": 53002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-09-05"
      },
      {
        "id": 53003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-02-12"
      }
    ]
  },
  {
    "id": 54,
    "nama": "Ruang Diskusi 54",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Isabella Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,54",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 54000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-01-15"
      },
      {
        "id": 54001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-01-14"
      },
      {
        "id": 54002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-10-12"
      },
      {
        "id": 54003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-10-07"
      }
    ]
  },
  {
    "id": 55,
    "nama": "Ruang Diskusi 55",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Isabella Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,55",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 55000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-11-02"
      },
      {
        "id": 55001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-11-20"
      },
      {
        "id": 55002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-04-21"
      },
      {
        "id": 55003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-06-16"
      }
    ]
  },
  {
    "id": 56,
    "nama": "Ruang Diskusi 56",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Isabella Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,56",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 56000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-08-25"
      },
      {
        "id": 56001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-05-17"
      },
      {
        "id": 56002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-11-22"
      },
      {
        "id": 56003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-12-17"
      }
    ]
  },
  {
    "id": 57,
    "nama": "Ruang Diskusi 57",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Mason Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,57",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 57000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-05-24"
      },
      {
        "id": 57001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-06-22"
      },
      {
        "id": 57002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-04-09"
      },
      {
        "id": 57003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-04-04"
      }
    ]
  },
  {
    "id": 58,
    "nama": "Ruang Diskusi 58",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Isabella Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,58",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 58000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-10-01"
      },
      {
        "id": 58001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-08-04"
      },
      {
        "id": 58002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-11-17"
      },
      {
        "id": 58003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-03-24"
      }
    ]
  },
  {
    "id": 59,
    "nama": "Ruang Diskusi 59",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Harper Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,59",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 59000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-02-16"
      },
      {
        "id": 59001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-12-12"
      },
      {
        "id": 59002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-07-07"
      },
      {
        "id": 59003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-08-25"
      }
    ]
  },
  {
    "id": 60,
    "nama": "Ruang Diskusi 60",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Sophia Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,60",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 60000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-02-21"
      },
      {
        "id": 60001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-08-17"
      },
      {
        "id": 60002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-04-21"
      },
      {
        "id": 60003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-02-13"
      }
    ]
  },
  {
    "id": 61,
    "nama": "Ruang Diskusi 61",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,61",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 61000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-12-26"
      },
      {
        "id": 61001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-01-07"
      },
      {
        "id": 61002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-10-24"
      },
      {
        "id": 61003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-08-10"
      }
    ]
  },
  {
    "id": 62,
    "nama": "Ruang Diskusi 62",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Mason Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,62",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 62000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-01-28"
      },
      {
        "id": 62001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-09-19"
      },
      {
        "id": 62002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-03-12"
      },
      {
        "id": 62003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-06-14"
      }
    ]
  },
  {
    "id": 63,
    "nama": "Ruang Diskusi 63",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Isabella Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,63",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 63000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-07-02"
      },
      {
        "id": 63001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-02-07"
      },
      {
        "id": 63002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-09-16"
      },
      {
        "id": 63003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-02-19"
      }
    ]
  },
  {
    "id": 64,
    "nama": "Ruang Diskusi 64",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Mason Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,64",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 64000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-12-14"
      },
      {
        "id": 64001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Young",
        "tanggal": "2025-04-03"
      },
      {
        "id": 64002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-12-12"
      },
      {
        "id": 64003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-11-02"
      }
    ]
  },
  {
    "id": 65,
    "nama": "Ruang Diskusi 65",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Isabella Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,65",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 65000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-08-13"
      },
      {
        "id": 65001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-11-15"
      },
      {
        "id": 65002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-11-06"
      },
      {
        "id": 65003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-11-04"
      }
    ]
  },
  {
    "id": 66,
    "nama": "Ruang Diskusi 66",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,66",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 66000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-02-21"
      },
      {
        "id": 66001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-08-13"
      },
      {
        "id": 66002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-04-21"
      },
      {
        "id": 66003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-01-25"
      }
    ]
  },
  {
    "id": 67,
    "nama": "Ruang Diskusi 67",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Mason Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,67",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 67000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-04-19"
      },
      {
        "id": 67001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-01-05"
      },
      {
        "id": 67002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-10-02"
      },
      {
        "id": 67003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-08-19"
      }
    ]
  },
  {
    "id": 68,
    "nama": "Ruang Diskusi 68",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Isabella Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,68",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 68000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-11-03"
      },
      {
        "id": 68001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-03-03"
      },
      {
        "id": 68002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-09-22"
      },
      {
        "id": 68003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-07-21"
      }
    ]
  },
  {
    "id": 69,
    "nama": "Ruang Diskusi 69",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,69",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 69000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-09-13"
      },
      {
        "id": 69001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-01-01"
      },
      {
        "id": 69002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-04-11"
      },
      {
        "id": 69003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-05-20"
      }
    ]
  },
  {
    "id": 70,
    "nama": "Ruang Diskusi 70",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Harper Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,70",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 70000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-04-09"
      },
      {
        "id": 70001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-03-24"
      },
      {
        "id": 70002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-01-04"
      },
      {
        "id": 70003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-12-17"
      }
    ]
  },
  {
    "id": 71,
    "nama": "Ruang Diskusi 71",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Mason Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,71",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 71000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-04-18"
      },
      {
        "id": 71001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-05-01"
      },
      {
        "id": 71002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-04-25"
      },
      {
        "id": 71003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-01-12"
      }
    ]
  },
  {
    "id": 72,
    "nama": "Ruang Diskusi 72",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Isabella Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,72",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 72000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-11-17"
      },
      {
        "id": 72001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-12-05"
      },
      {
        "id": 72002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-11-26"
      },
      {
        "id": 72003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-11-06"
      }
    ]
  },
  {
    "id": 73,
    "nama": "Ruang Diskusi 73",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Oliver Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,73",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 73000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Martin",
        "tanggal": "2025-09-22"
      },
      {
        "id": 73001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-04-06"
      },
      {
        "id": 73002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-06-17"
      },
      {
        "id": 73003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-09-21"
      }
    ]
  },
  {
    "id": 74,
    "nama": "Ruang Diskusi 74",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Oliver Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,74",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 74000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-06-25"
      },
      {
        "id": 74001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-03-07"
      },
      {
        "id": 74002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-11-10"
      },
      {
        "id": 74003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-04-23"
      }
    ]
  },
  {
    "id": 75,
    "nama": "Ruang Diskusi 75",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,75",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 75000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-03-27"
      },
      {
        "id": 75001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-01-10"
      },
      {
        "id": 75002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-04-17"
      },
      {
        "id": 75003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-07-21"
      }
    ]
  },
  {
    "id": 76,
    "nama": "Ruang Diskusi 76",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Isabella Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,76",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 76000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-09-21"
      },
      {
        "id": 76001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-12-22"
      },
      {
        "id": 76002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-09-12"
      },
      {
        "id": 76003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-12-24"
      }
    ]
  },
  {
    "id": 77,
    "nama": "Ruang Diskusi 77",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,77",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 77000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-07-04"
      },
      {
        "id": 77001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-01-15"
      },
      {
        "id": 77002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-02-21"
      },
      {
        "id": 77003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-01-01"
      }
    ]
  },
  {
    "id": 78,
    "nama": "Ruang Diskusi 78",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,78",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 78000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-09-20"
      },
      {
        "id": 78001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-06-26"
      },
      {
        "id": 78002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-10-02"
      },
      {
        "id": 78003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-08-01"
      }
    ]
  },
  {
    "id": 79,
    "nama": "Ruang Diskusi 79",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Oliver Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,79",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 79000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-01-16"
      },
      {
        "id": 79001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-10-27"
      },
      {
        "id": 79002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-06-11"
      },
      {
        "id": 79003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-08-03"
      }
    ]
  },
  {
    "id": 80,
    "nama": "Ruang Diskusi 80",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Isabella Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,80",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 80000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-04-01"
      },
      {
        "id": 80001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-01-20"
      },
      {
        "id": 80002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-11-17"
      },
      {
        "id": 80003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-09-15"
      }
    ]
  },
  {
    "id": 81,
    "nama": "Ruang Diskusi 81",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,81",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 81000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-06-10"
      },
      {
        "id": 81001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-12-13"
      },
      {
        "id": 81002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-04-19"
      },
      {
        "id": 81003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-06-01"
      }
    ]
  },
  {
    "id": 82,
    "nama": "Ruang Diskusi 82",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Sophia Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,82",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 82000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-02-25"
      },
      {
        "id": 82001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-06-11"
      },
      {
        "id": 82002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-11-25"
      },
      {
        "id": 82003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-11-04"
      }
    ]
  },
  {
    "id": 83,
    "nama": "Ruang Diskusi 83",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Oliver Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,83",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 83000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-05-17"
      },
      {
        "id": 83001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-07-27"
      },
      {
        "id": 83002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-02-08"
      },
      {
        "id": 83003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-03-14"
      }
    ]
  },
  {
    "id": 84,
    "nama": "Ruang Diskusi 84",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Mason Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,84",
    "follow": false,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 84000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-02-24"
      },
      {
        "id": 84001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-04-24"
      },
      {
        "id": 84002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-06-14"
      },
      {
        "id": 84003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-04-22"
      }
    ]
  },
  {
    "id": 85,
    "nama": "Ruang Diskusi 85",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Isabella Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,85",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 85000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-09-15"
      },
      {
        "id": 85001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-03-04"
      },
      {
        "id": 85002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Anderson",
        "tanggal": "2025-11-10"
      },
      {
        "id": 85003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Young",
        "tanggal": "2025-11-26"
      }
    ]
  },
  {
    "id": 86,
    "nama": "Ruang Diskusi 86",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Sophia Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,86",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 86000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-08-18"
      },
      {
        "id": 86001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-05-16"
      },
      {
        "id": 86002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-09-17"
      },
      {
        "id": 86003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-07-09"
      }
    ]
  },
  {
    "id": 87,
    "nama": "Ruang Diskusi 87",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Oliver Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,87",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 87000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-12-08"
      },
      {
        "id": 87001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-07-02"
      },
      {
        "id": 87002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-05-17"
      },
      {
        "id": 87003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-11-04"
      }
    ]
  },
  {
    "id": 88,
    "nama": "Ruang Diskusi 88",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Oliver Brown",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,88",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 88000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-09-10"
      },
      {
        "id": 88001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-10-03"
      },
      {
        "id": 88002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-01-23"
      },
      {
        "id": 88003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-11-23"
      }
    ]
  },
  {
    "id": 89,
    "nama": "Ruang Diskusi 89",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Harper Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,89",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 89000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-11-27"
      },
      {
        "id": 89001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-02-15"
      },
      {
        "id": 89002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-03-18"
      },
      {
        "id": 89003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-10-22"
      }
    ]
  },
  {
    "id": 90,
    "nama": "Ruang Diskusi 90",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Sophia Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,90",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 90000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Scott",
        "tanggal": "2025-01-01"
      },
      {
        "id": 90001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Anderson",
        "tanggal": "2025-12-14"
      },
      {
        "id": 90002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-03-20"
      },
      {
        "id": 90003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Martin",
        "tanggal": "2025-11-04"
      }
    ]
  },
  {
    "id": 91,
    "nama": "Ruang Diskusi 91",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,91",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 91000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-06-27"
      },
      {
        "id": 91001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-09-07"
      },
      {
        "id": 91002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-11-18"
      },
      {
        "id": 91003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-03-24"
      }
    ]
  },
  {
    "id": 92,
    "nama": "Ruang Diskusi 92",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Harper Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,92",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 92000,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-07-01"
      },
      {
        "id": 92001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-10-17"
      },
      {
        "id": 92002,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-12-17"
      },
      {
        "id": 92003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-07-01"
      }
    ]
  },
  {
    "id": 93,
    "nama": "Ruang Diskusi 93",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Oliver Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,93",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 93000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Sophia Anderson",
        "tanggal": "2025-02-28"
      },
      {
        "id": 93001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-05-19"
      },
      {
        "id": 93002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-02-05"
      },
      {
        "id": 93003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-02-08"
      }
    ]
  },
  {
    "id": 94,
    "nama": "Ruang Diskusi 94",
    "deskripsi": "Ruang untuk berbagi pengalaman dan ide.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,94",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 94000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-01-24"
      },
      {
        "id": 94001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-06-03"
      },
      {
        "id": 94002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-02-23"
      },
      {
        "id": 94003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Isabella Young",
        "tanggal": "2025-03-24"
      }
    ]
  },
  {
    "id": 95,
    "nama": "Ruang Diskusi 95",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Sophia Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,95",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 95000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-01-07"
      },
      {
        "id": 95001,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Brown",
        "tanggal": "2025-01-20"
      },
      {
        "id": 95002,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Scott",
        "tanggal": "2025-02-19"
      },
      {
        "id": 95003,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Anderson",
        "tanggal": "2025-12-14"
      }
    ]
  },
  {
    "id": 96,
    "nama": "Ruang Diskusi 96",
    "deskripsi": "Tempat bertukar pikiran secara kreatif.",
    "pengguna": "Harper Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,96",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 96000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Oliver Brown",
        "tanggal": "2025-04-16"
      },
      {
        "id": 96001,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-07-15"
      },
      {
        "id": 96002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-11-20"
      },
      {
        "id": 96003,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-02-06"
      }
    ]
  },
  {
    "id": 97,
    "nama": "Ruang Diskusi 97",
    "deskripsi": "Komunitas belajar bersama yang ramah.",
    "pengguna": "Mason Martin",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,97",
    "follow": false,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 97000,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Mason Anderson",
        "tanggal": "2025-04-07"
      },
      {
        "id": 97001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Martin",
        "tanggal": "2025-02-20"
      },
      {
        "id": 97002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Young",
        "tanggal": "2025-10-12"
      },
      {
        "id": 97003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Isabella Scott",
        "tanggal": "2025-04-17"
      }
    ]
  },
  {
    "id": 98,
    "nama": "Ruang Diskusi 98",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Isabella Young",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,98",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 98000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-06-02"
      },
      {
        "id": 98001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Martin",
        "tanggal": "2025-02-11"
      },
      {
        "id": 98002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Brown",
        "tanggal": "2025-06-18"
      },
      {
        "id": 98003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Sophia Scott",
        "tanggal": "2025-10-01"
      }
    ]
  },
  {
    "id": 99,
    "nama": "Ruang Diskusi 99",
    "deskripsi": "Diskusi tentang berbagai topik menarik.",
    "pengguna": "Harper Scott",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,99",
    "follow": true,
    "isCreatedByMe": true,
    "threads": [
      {
        "id": 99000,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Scott",
        "tanggal": "2025-10-27"
      },
      {
        "id": 99001,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang apa pendapat kalian tentang topik ini?",
        "pengguna": "Oliver Young",
        "tanggal": "2025-10-21"
      },
      {
        "id": 99002,
        "judul": "Apakah ada masa depan untuk topik ini?",
        "isi": "Diskusi tentang apa tantangan terbesar yang dihadapi?",
        "pengguna": "Harper Young",
        "tanggal": "2025-10-13"
      },
      {
        "id": 99003,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Isabella Brown",
        "tanggal": "2025-10-06"
      }
    ]
  },
  {
    "id": 100,
    "nama": "Ruang Diskusi 100",
    "deskripsi": "Forum diskusi yang interaktif dan inspiratif.",
    "pengguna": "Oliver Anderson",
    "gambarProfil": "https://source.unsplash.com/100x100/?person,100",
    "follow": true,
    "isCreatedByMe": false,
    "threads": [
      {
        "id": 100000,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang tips dan trik untuk sukses di bidang ini?",
        "pengguna": "Harper Young",
        "tanggal": "2025-08-06"
      },
      {
        "id": 100001,
        "judul": "Apa pendapat kalian tentang topik ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Sophia Martin",
        "tanggal": "2025-05-03"
      },
      {
        "id": 100002,
        "judul": "Tips dan trik untuk sukses di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Brown",
        "tanggal": "2025-06-04"
      },
      {
        "id": 100003,
        "judul": "Bagaimana perkembangan terbaru di bidang ini?",
        "isi": "Diskusi tentang bagaimana perkembangan terbaru di bidang ini?",
        "pengguna": "Mason Young",
        "tanggal": "2025-04-24"
      }
    ]
  }
]

export { data }