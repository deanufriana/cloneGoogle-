const user = [
    {
        id: '55201140012',
        nama:'Devi Adi Nufriana',
        foto: require('../assets/user.png'),
        deskripsi: 'Belajar React Native',
        background:  { uri : "https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png"},
        post: [
            {
                id: '55201140012',
                post: 'Ini merupakan contoh post belajar react native kjashdkfjhksahfkjshfkjdhskjfhksjdhfkjshkfjhsadkjfhaskjhfksajhfkjshfkjshdfkjhdkfjhs',
                gambar: { uri : "https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png"},
                komentar: [
                    {
                        id: '55201140013',
                        komentar: 'Doing what like',
                        waktu: '1544064663'
                    },
                    {
                        id: '55201140012',
                        komentar: 'Tentu Saja',
                        waktu: '1544064663'
                    },
                ],
                plus: 12,
                bagikan: 12,
                privasi: 'Public',
            },
        ]
    },
    {
        id: '55201140013',
        nama:'Deanufriana',
        foto: require('../assets/user.png'),
        deskripsi: 'Belajar React Native',
        background:  { uri : "https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png"},
        post: [
            {
                id: '55201140012',
                nama: 'Devi Adi Nufriana',
                post: 'Ini merupakan contoh post belajar react native',
                gambar: { uri : "https://citrusbits.com/wp-content/uploads/2018/03/react-native-pros-and-cons.png"},
                komentar: [],
                plus: 12,
                bagikan: 12,
                privasi: 'Public'
            },
        ]
    },
]

export default user