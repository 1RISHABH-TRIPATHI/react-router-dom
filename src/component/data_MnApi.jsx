/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import ShowMNI from './ShowMNI';
import SearchBar from './seeachBar';
import { useSearchParams } from 'react-router-dom';

function data_MnApi() {
    const data=[
        {
            id:1,
            name:"Konark-Mandir",
            imgUrl:"https://images.app.goo.gl/dygK44YS6TEzDRnu5",
           address:{
                district:"puri",
                state:"Odisha",
                county:"India"
    
            },
            Festival:"Chandrabhaga Melan",
            Affilation:"Hinduism",
            Deity:"Surya (SUN)",
           description:"Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri districtt, Odisha, India.The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE.",
            OthorUrl:"https://en.wikipedia.org/wiki/Konark_Sun_Temple",
            status:true
    
        },
        {
            id:2,
            name:"Jagannath Temple,",
            imgUrl:"https://images.app.goo.gl/632qTxfEdCyfZXm16",
           address:{
                "districtt":"puri",
                state:"Odisha",
                county:"India"
    
            },
            Festival:"Ratha Yatra And Snana Yatra",
            Affilation:"Hinduism",
            Deity:"Jagannath Swami",
           description:"The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu–one of the trinity of supreme divinity in Hinduism. It is located in Puri in the state of Odisha, situated on the eastern coast of India. King Indradyumna of Avanti built the main temple of Jagannath at Puri. The present temple was rebuilt from the tenth century onwards, on the site of the pre-existing temples in the compound, but not the main Jagannath temple, and begun by Anantavarman Chodaganga, the first king of the Eastern Ganga dynasty. Many rumours are spread about the temple's origin, but there is no solid evidence of it.The temple is one of the 108 Abhimana Kshethram of the Vaishnavite tradition.",
            OthorUrl:"https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri",
            status:true
        },
        {
            id:3,
            name:"Besakih Temple",
            imgUrl:"https://commons.wikimedia.org/wiki/File:Besakih_Bali_Indonesia_Pura-Besakih-02.jpg#/media/File:Besakih_Bali_Indonesia_Pura-Besakih-02.jpg",
           address:{
                district:"Basekih Bali ",
                state:"Karangasem",
                county:"Indonesia"
    
            },
            Festival:"",
            Affilation:"Hinduism",
            Deity:"",
           description:"Besakih Temple (Balinese) is a pura complex in the village of Besakih on the slopes of Mount Agung in eastern Bali, Indonesia. It is the most important, largest, and holiest temple of Balinese Hinduism, and one of a series of Balinese temples. Perched nearly 1000 meters up the side of Gunung Agung, it is an extensive complex of 23 separate but related temples with the largest and most important being Pura Penataran Agung. The temple is built on six levels, terraced up the slope. The entrance is marked by a candi bentar (split gateway), and beyond it, the Kori Agung is the gateway to the second courtyard.",
            OthorUrl:"https://en.wikipedia.org/wiki/Besakih_Temple",
            status:true
    
        },
        {
            id:4,
            name:"Swaminarayan Akshardham",
            imgUrl:"https://commons.wikimedia.org/wiki/File:Besakih_Bali_Indonesia_Pura-Besakih-02.jpg#/media/File:Besakih_Bali_Indonesia_Pura-Besakih-02.jpg",
           address:{
                district:"Noida",
                state:"Delhi",
                county:"India"
    
            },
            Festival:"",
            Affilation:"Hinduism",
            Deity:"Swaminarayan, Sita-Rama, Radha-Krishna, Shiva-Parvati and Lakshmi-Narayana",
           description:"Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture. Inspired by Yogiji Maharaj and created by Pramukh Swami Maharaj, it was constructed by BAPS.It is the world's second-largest BAPS Hindu temple, following Akshardham, New Jersey, in the U.S.",
            OthorUrl:"https://akshardham.com",
            status:true
        },
        {
            id:5,
            name:"Chhatarpur Temple",
            imgUrl:"https://commons.wikimedia.org/wiki/File:Besakih_Bali_Indonesia_Pura-Besakih-02.jpg#/media/File:Besakih_Bali_Indonesia_Pura-Besakih-02.jpg",
           address:{
                district:"Chhatarpur Noida",
                state:"Delhi",
                county:"India"
    
            },
            Festival:"",
            Affilation:"Hinduism",
            Deity:"Katyayani (Durga)",
           description:"Chhatarpur Temple (Officially: Shri Aadya Katyayani Shakti Peetham) is a temple dedicated to the goddess Katyayani. The entire complex of the temple is spread over a wide area of 28 hectares (70 acres).[1] It is located in Chhatarpur,on the southwestern outskirts of the New Delhi The temple was established in 1974, by Baba Sant Nagpal ji, who died in 1998. His samadhi shrine lies in the premises of the Shiv-Gauri Nageshwar Mandir within the temple complex",
            OthorUrl:"https://en.wikipedia.org/wiki/Chhatarpur_Temple",
            status:true
        },
        {
            id:6,
            name:"Mundeshwari Devi Temple",
            imgUrl:"https://images.app.goo.gl/RFm4ETwgofucpd736",
           address:{
                district:"Kaimur",
                state:"Bihar",
                county:"India"
    
            },
            Festival:"Ramnavami, Shivratri, Navaratra.",
            Affilation:"Hinduism",
            Deity:"Shiva and Shakthi",
           description:"The Mundeshwari Devi Temple (also spelled Mundesvari) is a Hindu temple, located at Ramgarh Village, 608 feet (185 m) on the Mundeshwari Hills of Kaimur plateau near Son River, in the Indian state of Bihar. It is an Archaeological Survey of India (ASI) protected monument since 1915. The ASI has recently dated the structure to 108 CE making it the oldest Hindu temple in Northern India. An information plaque at the site indicates the dating of the temple at least to 625 CE and Hindu inscriptions dated 635 CE were found in the temple.",
            OthorUrl:"https://en.wikipedia.org/wiki/Mundeshwari_Temple",
            status:true
        },
        {
            id:7,
            name:"Golden Temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=BPxvjVvo&id=93A9174B8094F3FA62BEE15C24A985CC6A0AF2B0&thid=OIP.BPxvjVvo8YmPwrFf3upw0gHaE8&mediaurl=https%3A%2F%2Fcdn.tripways.com%2F2020%2F11%2F07094043%2Fgolden-temple-3.jpg&exph=827&expw=1240&q=golden+temple&simid=608045946749586977&form=IRPRST&ck=14697B8368D9C77BBB4C686906C0E6E3&selectedindex=3&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Amritsar",
                state:"Punjab",
                county:"India"
    
            },
            Festival:"Guru Parv Jayanti",
            Affilation:"Sikhism",
            Deity:"Shree 10th Guru and Guru Granths",
           description:"The Golden Temple (also known as the Harmandir Sahib (lit. 'House of God'), or the Darbār Sahib, (lit. ''exalted court'',  or Suvaran Mandir) is a gurdwara located in the city of Amritsar, Punjab, India.It is the pre-eminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib.",
            OthorUrl:"https://www.goldentempleamritsar.org/",
            status:true
        },
        {
            id:8,
            name:"Ranganathaswamy Temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=e4FVX8%2BP&id=0AABA04031DEC84FF2DCD9DA6D33EF94B249D400&thid=OIP.e4FVX8-PssK7PnEmyA-UEAHaFj&mediaurl=https%3A%2F%2Fwww.japjitravel.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F02%2FRanganathaswamy-Temple-768x576.jpg&exph=576&expw=768&q=Ranganathaswamy+Temple%2c+Srirangam&simid=607993672708281319&form=IRPRST&ck=6070A83A956368211DBC9081C327102E&selectedindex=18&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Tiruchirapalli",
                state:"Tamil Nadu",
                county:"India"
    
            },
            Festival:"Vaikuntha Ekadashi Uriyadi Jeeyarpuram",
            Affilation:"Hinduism",
            Deity:"Ranganatha (Vishnu), Ranganayaki (Lakshmi)",
           description:"The Ranganathaswamy Temple is a Hindu temple dedicated to Ranganatha (a form of Vishnu), is located in Srirangam, Tiruchirapalli, Tamil Nadu, India. Constructed in the Dravidian architectural style, the temple is glorified by the Tamil poet-saints called the Alvars in their canon, the Naalayira Divya Prabhandam,and has the unique distinction of being the foremost among the 108 Divya Desams dedicated to the god Vishnu.",
            OthorUrl:"https://srirangapankajam.in",
            status:true
        },
        {
            id:9,
            name:"Somnath temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=dY0wB9Bh&id=AF1B7BCD1E6EEF489315E233021515021AAE878B&thid=OIP.dY0wB9BhIxvloPASfrsMLgHaEK&mediaurl=https%3A%2F%2Fwww.templedarshanyatri.com%2Fupload%2Fsomnath-temple.jpg&exph=450&expw=800&q=Somnath+Gujarat&simid=608020907092704907&form=IRPRST&ck=B1FCC90926A3FD60ADF855E6BEA5FE52&selectedindex=36&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Gir Somnath",
                state:"Gujarat",
                county:"India"
    
            },
            Festival:"Kartik Purnima,Navratri ",
            Affilation:"Hinduism",
            Deity:"Shiva",
           description:"The Somanath temple (IAST: somanātha) or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is the first among the twelve jyotirlinga shrines of Shiva. It is unclear when the first version of the Somnath temple was built, with estimates varying between the early centuries of the 1st millennium and about the 9th century CE. The temple is not mentioned in ancient Sanskrit texts of Hinduism as Somnath nomenclature, but the 'Prabhasa-Pattana' (Prabhas Patan) is mentioned as a tirtha (pilgrimage site), where this temple exists.For example, the Mahabharata in Chapters 109, 118, and 119 of Book 3 (Vana Parva), and Sections 10.45 and 10.78 of the Bhagavata Purana state Prabhasa to be a tirtha on the coastline of Saurashtra.",
            OthorUrl:"https://somnath.org",
            status:true
        },
        {
            id:10,
            name:"Lakshmana Temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=WMf4Q0wX&id=3B14244E6E0CF692CD5B4BAA3328BF34DDE8E9FB&thid=OIP.WMf4Q0wXQdC0BZ0CWd6idQHaDt&mediaurl=https%3A%2F%2Fkhajuraho.tourismindia.co.in%2Fimages%2Fplaces-to-visit%2Fheader%2Flakshman-temple-khajuraho-tourism-entry-fee-timings-holidays-reviews-header.jpg&exph=640&expw=1280&q=Lakshmana+Temple%2c+Khajuraho&simid=608023054567154914&form=IRPRST&ck=F21B46FFF815D082F328A6560A088DF0&selectedindex=9&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Chattarpur",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Khajuraho Dance Festival",
            Affilation:"Hinduism",
            Deity:"Vaikuntha Vishnu",
           description:"The Lakshmana Temple is a 10th-century Hindu temple built by Yashovarman during the Chandela dynasty located in Khajuraho, India. It is dedicated to Vaikuntha Vishnu - an aspect of Vishnu. As part of the Khajuraho Group of Monuments, and owing to its architecture and religious importance, the temple was inscribed on the UNESCO World Heritage List in 1986.",
            OthorUrl:"https://www.pujasthan.com/lakshmana-temple-khajuraho",
            status:true
        },
        {
            id:11,
            name:"Laxminarayan Temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=cO88uA1H&id=0AF802F8CCC65651D87BD7914E81C0D80FB362CF&thid=OIP.cO88uA1H16LAAg0giaJqRAAAAA&mediaurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F37%2FLaxminarayan_Temple_in_New_Delhi_03-2016.jpg%2F1200px-Laxminarayan_Temple_in_New_Delhi_03-2016.jpg&exph=316&expw=474&q=Laxminarayan+Temple+&simid=608032039624864319&form=IRPRST&ck=B29E3AF8C4646890172CF5C9F9A4931D&selectedindex=0&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Sindhudurg",
                state:"New Dehli",
                county:"India"
    
            },
            Festival:"Janmashtami, Diwali",
            Affilation:"Hinduism",
            Deity:"Laxmi Narayan (Vishnu with his consort Lakshmi)",
           description:"The Laxminarayan Mandir is a Hindu temple located in Delhi, India. The presiding deity in the temple is Laxminarayan i.e., Vishnu along with his consort Lakshmi. The temple was inaugurated by Mahatma Gandhi. Gandhi ensured that members of all castes would be allowed in the temple. It was built by Jugal Kishore Birla from 1933 and 1939. There are also small shrines on the sides dedicated to Shiva, Ganesha, Hanuman and Buddha.",
            OthorUrl:"https://www.historytoheritage.com/laxminarayan-temple-facts-and-visit",
            status:true
        },
        {
            id:12,
            name:"Mahakaleshwar Jyotirlinga Temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=tZqftydL&id=9D78FF2D21EFB5E4ABA67F58E77FE5CC60E2CBBA&thid=OIP.tZqftydLbE3hyZHSAxWUNAHaEY&mediaurl=https%3A%2F%2F1.bp.blogspot.com%2F-lkP4xoVMUNI%2FXy_C03hM9BI%2FAAAAAAAA7mI%2FI52gFQbIFOcK33Qowqx_uxkcGS-C7VyowCK4BGAYYCw%2Fs1600%2FMahakaleshwar_Temple_Ujjain.jpg&exph=473&expw=800&q=ujjain+mahakaleshwar+temple&simid=608012360103123443&form=IRPRST&ck=5A80B5D67334D65439B02B4A7E953F28&selectedindex=7&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Ujjain",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Mahashivratri",
            Affilation:"Hinduism",
            Deity:"Shiva",
           description:"Mahakaleshwar Jyotirlinga (IPA: [mahākāleśvara]) is a Hindu temple dedicated to Shiva and is one of the twelve Jyotirlingas, shrines which are said to be the most sacred abodes of Shiva. It is located in the ancient city of Ujjain in the state of Madhya Pradesh, India. The temple is situated on the side of the holy river Shipra. The presiding deity, Shiva in the lingam form is believed to be Swayambhu, deriving currents of power (Shakti) from within itself as against the other images and lingams that are ritually established and invested with mantra-shakti.",
            OthorUrl:"https://shrimahakaleshwar.com",
            status:true
        },
        {
            id:13,
            name:"Duladeo Temple",
            imgUrl:"https://www.bing.com/images/search?view=detailV2&ccid=GfNF5GDL&id=281DA237E2FA13087F6C74D8B310023995F94A05&thid=OIP.GfNF5GDL6pH6EmZdXcQPUwHaFj&mediaurl=https%3A%2F%2Fwww.trawell.in%2Fadmin%2Fimages%2Fupload%2F376640183Khajuraho_Duladeo_Temple_Main.jpg&exph=600&expw=800&q=Duladeo+Temple+&simid=608049726333463369&form=IRPRST&ck=17A0A370213823A1AF8933FA90E950D3&selectedindex=1&itb=0&ajaxhist=0&ajaxserp=0&vt=1&sim=11",
           address:{
                district:"Chattarpur",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Diwali",
            Affilation:"Hinduism",
            Deity:"Shiva",
           description:"The Duladeo Temple (Devanagri: दुलादेव मंदिर) is a Hindu temple in Khajuraho, Madhya Pradesh, India. The temple is dedicated to the god Shiva in the form of a linga, which is deified in the sanctum. 'Dulodeo' means 'Holy Bridegroom'.The temple is also known as 'Kunwar Math'. The temple faces east and is dated to 1000–1150 AD. It is the last of the temples built during the Chandela period. The temple is laid in the seven chariot plan (saptarata). The figurines carved in the temple have soft expressive features unlike other temples. The walls have a display of carved celestial dancers (apsara) in erotic postures and other figures. As part of the Khajuraho Group of Monuments, the temple was inscribed on the UNESCO World Heritage List in 1986",
            OthorUrl:"https://templesofindia.org/temple-view/dulhadeo-temple-chhatarpur-madhya-pradesh-638zth",
            status:true
        },
        {
            id:14,
            name:"Bateshwar Temple",
            imgUrl:"https://live.staticflickr.com/65535/50221674462_edf2985b5d_b.jpg",
           address:{
                district:"Morena",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Mahashivratri,Janmashtami, Diwali",
            Affilation:"Hinduism",
            Deity:"Shiva, Vishnu, Devi ",
           description:"The Bateshwar Hindu temples  are a group of nearly 200 sandstone Hindu temples and their ruins in north Madhya Pradesh in post-Gupta, early Gurjara-Pratihara style of North Indian temple architecture. It is about 35 kilometres (22 mi) north of Gwalior and about 30 kilometres (19 mi) east of Morena town. The temples are mostly small and spread over about 25 acres (10 ha) site. They are dedicated to Shiva, Vishnu and Shakti - representing the three major traditions within Hinduism. The site is within the Chambal River valley ravines, on the north-western slope of a hill near Padavali known for its major medieval era Vishnu temple. The Bateshwar temples were built between the 8th and the 10th-century. The site is likely named after the Bhuteshvar Temple, the largest Shiva temple at the site. It is also referred to as Batesvar temples site or Batesara temples site.",
            OthorUrl:"https://travelophia.com/blog/bateshwar-temple",
            status:true
        },
        {
            id:15,
            name:"Teli Temple",
            imgUrl:"https://i.pinimg.com/736x/ec/cd/b3/eccdb3368eeb9daa7dce5ab1e8f24af2.jpg",
           address:{
                district:"Gwalior",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Mahashivratri,Janmashtami, Diwali",
            Affilation:"Hinduism",
            Deity:"Shiva, Vishnu",
           description:"Teli ka Mandir, also known as Telika Temple, is a Hindu temple located within the Gwalior Fort in Madhya Pradesh, India. Dedicated to Shiva, Vishnu and Matrikas, it has been variously dated between the early 8th and early 9th century CE.It is an atypical design for a Hindu temple,[1] as it has a rectangular sanctum instead of the typical square. It integrates the architectural elements of the Nagara style and the Valabhi prasada. The temple is based on a Gurjara Pratihara-Gopagiri style North Indian architecture.",
            OthorUrl:"https://en.bharatpedia.org/wiki/Teli_ka_Mandir",
            status:true
        },
        {
            id:16,
            name:"Kandariya Mahadeva Temple",
            imgUrl:"https://1.bp.blogspot.com/-Dta2kqSUy6A/UPwve2FXpSI/AAAAAAAAA7Q/3CNMV-lFBtQ/s1600/Kandariya+Mahadeva.jpg",
           address:{
                district:"Chattarpur",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Mahashivratri",
            Affilation:"Hinduism",
            Deity:"Shiva, ",
           description:"The Kandariya Mahadeva Temple (Devanagari: कंदारिया महादेव मंदिर, Kandāriyā Mahādeva Mandir), meaning 'the Great God of the Cave', is the largest and most ornate Hindu temple in the medieval temple group found at Khajuraho in Madhya Pradesh, India. It is considered one of the best examples of temples preserved from the medieval period in India. Because of its outstanding preservation and testimony to the Chandela culture, the temple was inscribed on the UNESCO World Heritage List in 1986.",
            OthorUrl:"https://education.asianart.org/resources/kandariya-mahadeva-temple",
            status:true
        },
        {
            id:17,
            name:"Chhatarpur Temple",
            imgUrl:"https://www.gosahin.com/go/p/a/1515534057_Chhatarpur-Temple1.jpg",
           address:{
                district:"South Delhi",
                state:"Delhi",
                county:"India"
    
            },
            Festival:"Diwali",
            Affilation:"Hinduism",
            Deity:"Katyayani (Durga)",
           description:"Chhatarpur Temple (Officially: Shri Aadya Katyayani Shakti Peetham) is a temple dedicated to the goddess Katyayani. The entire complex of the temple is spread over a wide area of 28 hectares (70 acres).It is located in Chhatarpur, on the southwestern outskirts of the New Delhi The temple was established in 1974, by Baba Sant Nagpal ji, who died in 1998. His samadhi shrine lies in the premises of the Shiv-Gauri Nageshwar Mandir within the temple complex.",
            OthorUrl:"https://www.templepurohit.com/hindu-temple/chhatarpur-temple-delhi",
            status:true
        },
        {
            id:18,
            name:"Javari Temple",
            imgUrl:"https://thumbs.dreamstime.com/b/javari-temple-facade-south-east-view-eastern-group-khajuraho-madhya-pradesh-india-unesco-world-heritage-site-javari-temple-facade-240430154.jpg",
           address:{
                district:"Chattarpur",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Mahashivratri,Diwali",
            Affilation:"Hinduism",
            Deity:"Shiva",
           description:"The Javari Temple in Khajuraho, India, is a Hindu temple, which forms part of the Khajuraho Group of Monuments, a UNESCO World Heritage Site. It was built between c. 975 and 1100 A.D.The temple is dedicated to the Hindu deity Shiva. The main idol of the temple is broken and headless",
            OthorUrl:"https://blog.templesofindia.org/post/javari-temple-khajuraho-and-kandariya-mahadeva-temple-mp-temples-1",
            status:true
        },
        {
            id:19,
            name:"Bhojeshwar Temple",
            imgUrl:"https://2.bp.blogspot.com/-oI64AtMo-e8/XIIbnc06AXI/AAAAAAABUeQ/UDCfA_N01S0R5m6IgPZZ3jCOLR1CkpSqgCLcBGAs/w1200-h630-p-k-no-nu/Shiva_Temple%252C_Bhojpur_01.jpg",
           address:{
                district:"Raisen",
                state:"Madhya Pradesh",
                county:"India"
    
            },
            Festival:"Mahashivratri",
            Affilation:"Hinduism",
            Deity:"Shiva",
           description:"The Bhojeshwar Temple (IAST: Bhojeśvara) is an incomplete Hindu temple in Bhojpur village of Madhya Pradesh, India. Dedicated to Shiva, it houses a 7.5-foot (2.3 m) high lingam in its sanctum.The temple's construction is believed to have started in the 11th century, during the reign of the Paramara king Bhoja. The construction was abandoned for unknown reasons, with the architectural plans engraved on the surrounding rocks. The unfinished materials abandoned at the site, the architectural drawings carved on the rocks, and the mason's marks have helped scholars understand the temple construction techniques of 11th-century India. The temple has been designated as a Monument of National Importance by the Archaeological Survey of India (ASI).",
            OthorUrl:"https://imvoyager.com/interesting-bhojpur-temple-facts-guide-to-bhojeshwar-temple",
            status:true
        }
    
    
    
    ];
    const [searchparam]=useSearchParams();
  return (
    <div>
        <SearchBar />
      {
        data.map(api=>(
              <ShowMNI key={api.id}  name={api.name} Festival={api.Festival} Deity={api.Deity} address={api.address} Affilation={api.Affilation} description={api.description} status={api.status} imgUrl={api.imgUrl} OthorUrl={api.OthorUrl} />  
        ))}
    </div>
  )
}

export default data_MnApi
