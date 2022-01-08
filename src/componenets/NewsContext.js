import react, { createContext, useState } from "react";


export const Newscontext = createContext();

export const NewsProvide = (props)=>{

    const [news, setnews] = useState([
        {
            "source": {
                "id": "1",
                "name": "NDTV News"
            },
            
            "author": "Siddhant Chandra",
            "title": "1Xiaomi 12 Series Display Specifications Tipped Ahead of December 28 Launch - Gadgets 360",
            "description": "Xiaomi 12 lineup s display details have leaked ahead of its December 28 launch. The base model is tipped to feature a 6.28-inch full-HD+ display.",
            "fulldescription": "Xiaomi 12 series is officially confirmed to debut in China on December 28. So far, its various specifications and features have either been officially teased or leaked. Now, more details have surfaced online, showing the display specifications of the Xiaomi 12, Xiaomi 12X, and Xiaomi 12 Pro handsets. Xiaomi has recently revealed that the Xiaomi 12 lineup will be equipped with a hole-punch selfie camera. The Chinese tech giant also announced that the base Xiaomi 12 has obtained an A+ rating from DisplayMate. The latest leak comes from known tipster Digital Chat Station, who shared on Weibo that the vanilla Xiaomi 12 will feature a customised 6.28-inch full-HD+ (1080p) 10bit Huaxing flexible screen. Xiaomi recently revealed that the display of the vanilla Xiaomi 12 has received an A+ rating from DisplayMate. It is reportedly the highest display performance rating given by the firm. This display is tipped to be protected by Corning Gorilla Glass Victus",
            "postimg": "",
            
            "urlToImage": "https://i.gadgets360cdn.com/large/xiaomi_12_display_leak_1640240614506.jpg",
            "publishedAt": "18 Mar 2021",
            "content": "Xiaomi 12 series is officially confirmed to debut in China on December 28. So far, its various specifications and features have either been officially teased or leaked. Now, more details have surface… [+1692 chars]",
            "likes": "101",
            "category": "Business",
            "story":true
        },
        {
            "source": {
                "id": "2",
                "name": "NDTV News"
            },
            "author": "Rahul Singh",
            "title": "Cricket South Africa (CSA) Announces Revised Schedule For Bilateral Series Against West Indies Women's Team",
            "description": "The West Indies women's cricket team's upcoming bilateral tour of South Africa will take place from January 25 to February 6.  ",
            "fulldescription": "Cricket South Africa CSA on Wednesday announced a revised schedule for the upcoming bilateral series against West Indies consisting of a warmup match and four ODIs The tour is scheduled to take place between January 25 and February 6 and all matches will be hosted at the Imperial Wanderers Stadium in Johannesburg in a biosecure environment The statement also added that the venue was close to the hotel where both teams would be stayingCricket South Africa CSA is pleased to confirm a revised schedule for the inbound tour featuring the Momentum Proteas and the West Indies consisting of five matches including a warmup clash and four Womens OneDay Internationals ODI taking place between 25 January 06 February the press release saidTo accommodate the concerns and request of Cricket West Indies CWI CSA has resolved to host all matches in a biosecure environment BSE at the Imperial Wanderers Stadium in Johannesburg a venue close to the hotel which has been secured for exclusive use due to the ongoing pandemic it further addedListen to the latest songs only on JioSaavncomBoth teams will be using the matches to prepare for the upcoming 2022 ICC Womens World Cup The tournament will be hosted in New Zealand from March 4April 3The first ODI match will be held on January 28 followed by the second match on January 31 The third match will be held on February 3 and the fourth game on February 6",
            "postimg": "",
            "urlToImage": "https://c.ndtvimg.com/2022-01/r0fjmjj_south-africa-instagram_625x300_05_January_22.jpg?output-quality=80&downsize=1278:*",
            "publishedAt": "05 Jan 2022",
            "likes": "55",
            "category": "Sports",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "3",
                "name": "NDTV News"
            },
            "author": "Gagan Sharma",
            "title": "Ranveer soaked in all the Kapil paaji traits in '83': Sachin",
            "description": "Former Team India captain Sachin Tendulkar on Wednesday shared Ranveer Singh's still from '83' on Twitter, writing, [He] really soaked in all the Kapil [Dev] paaji traits.The film is based on Kapil Dev-led Team India's victory at the 1983 Cricket World Cup. A brilliant 'all-round' display...I know the win really inspired the little boy, Sachin further wrote on Twitter.",
            "fulldescription": "Sachin then dropped a hint to find him in the film as well, when he wrote: I know the win really inspired the little boy The film shows a little boy enjoying Team India's victory in the final of the World Cup. For the unversed, that little boy with curly hair is Sachin Responding to the legendary cricketer's message for him, Ranveer tweeted, And then the little boy went on to inspire generations! Thank you, Master! This means everything ",
            "postimg": "",
            "urlToImage": "https://static.toiimg.com/photo/87976035.jpeg",
            "publishedAt": "4 Jan 2022",
            "likes": "55",
            "category": "Bollywood",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "4",
                "name": "NDTV News"
            },
            "author": "Pavan",
            "title": "Omicron: Curfew in Delhi as India Covid cases surge",
            "description": "India reported 58,097 cases on Wednesday, a six-fold rise in a week that experts say is fuelled by the Omicron variant Both cities have brought back curfews and other restrictions to halt the spread of the virus",
            "fulldescription": "Dr NK Arora, head of India's vaccine task force, told NDTV on Monday that the third wave of the pandemic had already begun in the country, adding that the whole wave seems to be driven by a new variant... Omicron The country has reported more than 2,000 Omicron cases - Maharashtra, of which Mumbai is the capital, is leading the tally (653), followed by Delhi (464).Delhi's health minister Satyendar Jain has said that 81% of Covid samples in the city tested positive for Omicron.The All India Institute of Medical Sciences (AIIMS) - one of India's major hospitals - in Delhi has cancelled winter leave for doctors, according to reports. Preliminary data suggests that fewer people infected with Omicron need hospital treatment when compared with other variants. But experts advise caution as a surge in cases could put hospitals under strain. On Tuesday, authorities in Delhi imposed a weekend curfew, with all non-essential activity banned between Friday night and Monday morning. The capital last week closed gyms and cinemas, as well as imposing an overnight curfew in an effort to stem the spread ",
            "postimg": "https://ichef.bbci.co.uk/news/976/cpsprodpb/38FB/production/_122578541_gettyimages-1237486176-594x594.jpg",
            "urlToImage": "https://ichef.bbci.co.uk/news/976/cpsprodpb/FC88/production/_122584646_mediaitem122579222.jpg",
            "publishedAt": "3 Jan 2022",
            "likes": "112",
            "category": "Health",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "5",
                "name": "NDTV News"
            },
            "author": "Kapil",
            "title": "Battlegrounds Mobile India Latest Update: Krafton sets THIS deadline for data transfer from PUBG Mobile India",
            "description": "Ever since Battlegrounds Mobile India was launched in July 2021, the game has allowed users to transfer their data via Facebook and Twitter accounts",
            "fulldescription": "PUBG Mobile India's Indianised version Battlegrounds Mobile India is one of the most popular games and is thoroughly enjoyed by the fans. The game was released earlier in July and gamers have been having a gala time playing it. Many fans also downloaded the game using APK, OBB links for Android devices as well. Now, according to the latest update, Battlegrounds Mobile India is soon going to close down data transfers from PUBG Mobile so if you wish to transfer your data, now is the time to complete the process. South Korea's gaming developer Krafton announced the same for players who had played Livik map in PUBG Mobile on Friday. Krafton clarified that it will shut down data transfers from PUBG Mobile after December 31, 2021. Ever since Battlegrounds Mobile India was launched in July 2021, the game has allowed users to transfer their data via Facebook and Twitter accounts that they used as a login for PUBG Mobile Krafton had announced the discontinuation of data transfer from PUBG Mobile to Battlegrounds Mobile India on December 2. The post read, In order to ensure a more smooth gameplay for players who had used Mobile Normdic Map  Livik  before, Battlegrounds Mobile India  will transfer some of the data from the Prior App account to the New App. Players have time until December 31 to import their PUBG Mobile data. PUBG Mobile India was banned by the Government of India in September 2020 following an escalation of tensions between India and China over the Galwan Valley incident in Ladakh. PUBG Mobile India, along with 118 Chinese apps were banned by the government",
            "postimg": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/12/09/1009012-battlegrounds.jpg",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/12/09/1009012-battlegrounds.jpg",
            "publishedAt": "1 Jan 2022",
            "likes": "87",
            "category": "Technology",
            "banner":false,
            "story":false,
            "foobanne": true
        },
        {
            "source": {
                "id": "6",
                "name": "NDTV News"
            },
            "author": "Kapil",
            "title": "7th Pay Commission: Central government employees to receive Rs 4500 extra with January salary? Know here",
            "description": "We have a piece of good news for Central government employees! According to media reports, Central government employees are all set to receive some extra amount along with their January 2022 salary",
            "fulldescription": "An announcement regarding the same is expected to be made on Republic Day, January 26, 2022. According to a report in Zee Business, the Central government employees are all set to additionally receive Rs 4500 along with their January salary. Employees will be eligible for the same by filling out a voucher. How can Central government employees claim Rs 4,500? Children Education Allowance (CEA) is one of the allowances that the Centre gives its employees. Amid the COVID-19 pandemic, giving an exemption to employees, the Centre is allowing the claim for CEA along with January salary. No official document is required for the same For the unversed, under the 7th Pay Commission, central employees get a CEA of Rs 2250. The schools were closed amid the pandemic, however, the Centre has now allowed its employees to claim CEA without any documents. The government employees are given the allowance for the education of 2 children. Therefore, if an employee has two children, then the employee will receive Rs 4500 in their account. Meanwhile, the Central government employees, who are awaiting Dearness Allowance (DA) arrears that have been stuck for the past 18 months due to the coronavirus pandemic, are all set to receive some good news soon. An announcement in this regard is expected to be made in January 2022",
            "postimg": "",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/06/1013303-7th-pay.jpeg",
            "publishedAt": "5 Jan 2022",
            "likes": "190",
            "category": "Business",
            "banner":false,
            "story":false
        },
        {
            "source": {
                "id": "7",
                "name": "NDTV News"
            },
            "author": "Rahul Singh",
            "title": "Garena Free Fire January 5 Redeem Codes: Get diamonds voucher, gun, pet skins - How to redeem today's codes",
            "description": "Garena Free Fire has found fancy among the Indian e-gamers after the Indian government banned the very popular PUBG Mobile India over privacy issues in September 2020. Garena Free Fire",
            "fulldescription": "Garena Free Fire has found fancy among the Indian e-gamers after the Indian government banned the very popular PUBG Mobile India over privacy issues in September 2020. Garena Free Fire - an adventure-driven battle royale game - is available for download on Google Play Store. According to reports, Garena Free Fore is now one of the most popular mobile games in the world and is a favourite with e-gamers because of its HD quality graphics, dynamics, regular updates and redeem codes. Garena Free Fire players have their own strategy, including landing positions, acquiring weapons, supplies, and fighting enemies. Garena releases redeem codes daily containing 14 digits, which is a combination of letters and words. With the redeem codes for January 5, users will be able to unlock the diamond hack, royale vouchers and other rewards. However, it is to be noted that Garena Free Fire expired codes cannot be redeemed. You can see the FF Redeem Codes used in your game by visiting the redemption site. Garena Free Fire redeem codes for January 5, 2022: FBNO IRU9 8YT6 FGFY VGHD BE54 FI6G D765 45Q1 FRTF 234I R9TY FK4T 87G6 VT5R FAV4 BNKE RF8G F7YC TGDB E5MR FKOY H98B 7VY6 FD2E RBTN 6M7U FON9 B8V7 C6DT FR7E VR5B 6YNM FK8I V8C7 X65S F4DF ECVR 4B5U How to redeem the Garena Free Fire Redeem Codes: Step 1: You can visit the official website at https://reward.ff.garena.com/en  Step 2: Log in using their Facebook, Google, Twitter, or VK IDs. Step 3: Then copy and paste the redeem codes into the text box and click on the confirm button to continue. Step 4: After the confirmation, a dialogue box will pop up for cross-check. ",
            "postimg": "",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/05/1013147-garenanewwwww.jpg",
            "publishedAt": "4 Jan 2022",
            "likes": "98",
            "category": "Technology",
            "banner":false,
            "story":true
        },
        {
            "source": {
                "id": "8",
                "name": "NDTV News"
            },
            "author": "Pavan",
            "title": "Ziqitza Healthcare remarks the Importance of First Air Training for employees",
            "description": "Every year, 3,00,000 employees die in unintended workplace accidents throughout the world. The fact that 14 incidents published in the news in 2021 have already taken the lives of around 42 workers, with nearly 100 injured, demonstrates Indias escalating",
            "fulldescription": "Every year, 3,00,000 employees die in unintended workplace accidents throughout the world. The fact that 14 incidents published in the news in 2021 have already taken the lives of around 42 workers, with nearly 100 injured, demonstrates Indias escalating safety problems. In center nations, such as India, occupational risks are estimated to account for roughly 2.3 percent of lost Disability Adjusted Life Years (DALY). When you consider how many lives are lost each year, it makes you question what can be done to save not just our important employees, but their lives as well. Ziqitza Healthcare Ltd (ZHL) knows that this is where first aid comes in as a life saver. Being trained in first aid may help you give the proper treatment to the patient at the right time, and it s a valuable skill to have at work. Dr. Santosh Datar Medical Director, Ziqitza Healthcare, explains Employee training can be the difference between life and death, but it also shows that company profits come second to employee happiness. Here  s how employees can use first aid to save lives. It helps in the saving of lives. Knowing how to administer first aid can provide your employees the confidence to act quickly in the event of an injury or illness. When administered quickly, CPR (Cardiopulmonary Resuscitation) has been proven to save many lives, thus its a valuable skill to teach your employees. First-aid kits will be properly utilized. Employees should also be aware of what is contained in the first aid kit and how to utilize it efficiently. It also helps if your staff know how to keep their first-aid kits in their homes and cars in good working order. Reduce the amount of workplace accidents. Because your employees are thoroughly taught in the essentials of first aid, they are also aware of the possibility for disasters in the workplace. Training your employees in first aid also makes them more aware of their surroundings, which can help to limit the occurrence of workplace accidents. It will keep your employees safe outside of work also Once your employees are trained in first aid, they are trained for life. Their training can save lives even outside the office. Trained personnel can treat their families, friends and even the general public effectively in times of an emergency. This becomes easier if you conduct refresher courses from time to time. Ziqitza Rajasthan has managed similar first aid training sessions in the past fdgdfg dg",
            "postimg": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/06/1013214-3k.jpg",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/06/1013214-3k.jpg",
            "publishedAt": "3 Jan 2022",
            "likes": "64",
            "category": "Health",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "9",
                "name": "NDTV News"
            },
            "author": "Rahul Singh",
            "title": "Kajols sister Tanishaa Mukerji breaks silence on her secret wedding rumours",
            "description": "Tanisha Mukerji, who is currently in Goa, posted a photo of her feet with toe rings on Tuesday, prompting internet fans to speculate whether the actor had secretly married. Toe rings are an important accessory for married women, according to several remarks. Because she was in a no-network area, Mukerji was unaware of all the rumours circulating on the internet",
            "fulldescription": "Tanisha Mukerji, who is currently in Goa, posted a photo of her feet with toe rings on Tuesday, prompting internet fans to speculate whether the actor had secretly married. Toe rings are an important accessory for married women, according to several remarks. Because she was in a no-network area, Mukerji was unaware of all the rumours circulating on the internet. In an interview with Hindustan Times, she said, “I like wearing toe rings and I thought it looked good. Thats why, I took a picture and posted it. Theres nothing more to it. Do I need to justify my fashion sense to people? (laughs)” When it comes to marriage, the former Bigg Boss competitor acknowledges it is something she is thinking about.. “Of course, everybody thinks about it. My dream wedding keeps changing till I find the dream man to get married,” she quips, and adds, “Im not breaking all the hearts yet. If and when I tie the knot, I will let the world know it. Im not a quiet person. Itll (the wedding) be a fanfare.” She also added, “The whole world knows that Im single. Theres no need to keep it ambiguous. And Im happy being single.",
            "postimg": "",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/06/1013334-tanisha.jpg",
            "publishedAt": "22 Dec 2021",
            "likes": "210",
            "category": "Bollywood",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "10",
                "name": "NDTV News"
            },
            "author": "Pavan",
            "title": "IND vs SA: India take two wickets, South Africa end Day 3 on 118 runs, need 122 runs to win",
            "description": "South Africa have been cruising on Day 3, and they need just 122 more runs to pick up a win and level the three-match series 1-1. India, for their part, scored 266 runs in their second innings",
            "fulldescription": "South Africa have been cruising on Day 3, and they need just 122 more runs to pick up a win and level the three-match series 1-1. India, for their part, scored 266 runs in their second innings, however, the hosts look like they have just enough in the tank to go all the way. Skipper Dean Elgar has kept things tight on one end, as he finished Day 3 with 46 off 121 balls, partnered by Rassie Van der Dussen, who has 11 runs in 37 balls. India have it all to do, they will have to pick up early wickets, or else, South Africa will make a comeback in the series. The hosts have eight wickets in hand. Earlier on Day 3, India began valiantly through Ajinkya Rahane and Cheteshwar Pujara. The duo scored their respective fifties to power India into a strong position. However, their partnership didn't survive for long as Kagiso Rabada struck twice in quick succession to dismiss both Rahane and Pujara. Hanuma Vihari and Rishabh Pant came on but with two new batsmen on the crease, South African bowlers began to wreak havoc as they sent Pant and Ravi Ashwin packing in relatively short duration. Vihari however, tried to keep things ticking and struck a partnership with Shardul Thakur. However, once Marco Jansen got rid of Thakur on 28 runs, the Proteas were able to swipe aside Indian tailenders. Vihari though showed excellent grit and determination to remain not out at 40 runs off 84 deliveries, but couldn't do it all alone The Men in Blue ended their innings with 266 runs and had a lead of 239 runs. South Africa then came out to bat, knowing they needed to score 240 runs to level the three-match series. Aiden Markram and Dean Elgar also began brilliantly as they wove together a partnership of 47 runs but Shardul removed Markram with some excellent bowling. Keegan Petersen then came out to partner his skipper and they also scored 46 runs together before Ashwin worked his magic to send Petersen packing",
            "postimg": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/05/1013273-fiwuiwgwyaqkr4c.jpg",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/05/1013273-fiwuiwgwyaqkr4c.jpg",
            "publishedAt": "6 Jan 2022",
            "likes": "18",
            "category": "Sports",
            "banner":true,
            "story":true
        },
        






    ])

    return(
        <Newscontext.Provider value={[news,setnews]}>
            {props.children}
        </Newscontext.Provider>
    )
}