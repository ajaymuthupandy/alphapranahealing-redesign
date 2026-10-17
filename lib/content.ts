// Copy sourced from alphapranahealing.com. Long passages are tightened, never re-meant.

export const YOGA_STYLES = [
  "Hatha Yoga",
  "Gentle Yoga",
  "Vinyasa Flow",
  "Power Yoga",
  "Yin Yoga",
  "Laughter Yoga",
  "Private Couple Yoga",
  "Chakra Healing Yoga",
];

export type YogaClass = { slug: string; title: string; body: string; invite: string };

export const YOGA_CLASSES: YogaClass[] = [
  {
    slug: "hatha",
    title: "Hatha Yoga",
    body: "A grounding, mindful practice of steady postures, conscious breathing and inner awareness — balancing strength and softness, and gently guiding you back to your centre.",
    invite: "Experience the beauty of moving with intention and presence.",
  },
  {
    slug: "gentle",
    title: "Gentle Yoga",
    body: "A deeply nurturing practice that flows slowly with mindful breathing — ideal for relaxation, recovery, or moments when you simply need to slow down.",
    invite: "Come as you are and let your body and breath guide you.",
  },
  {
    slug: "vinyasa",
    title: "Vinyasa Flow",
    body: "An energising, fluid journey where movement and breath unite. Continuous sequences awaken strength, flexibility and focus, like a moving meditation.",
    invite: "Step onto the mat and let your breath lead the flow.",
  },
  {
    slug: "power",
    title: "Power Yoga",
    body: "A dynamic, empowering practice that builds strength, stamina and inner confidence while sharpening focus and resilience.",
    invite: "Ignite the strength that already lives within you.",
  },
  {
    slug: "yin",
    title: "Yin Yoga",
    body: "A meditative, soul-soothing practice inspired by the quiet wisdom of Bali. Long-held postures make space for emotional and energetic release, reflection and renewal.",
    invite: "Slow down, soften deeply, and be held in sacred stillness.",
  },
  {
    slug: "laughter",
    title: "Laughter Yoga",
    body: "An uplifting, heart-opening ceremony where laughter becomes medicine — breath, movement and intentional laughter to release stress and awaken joy. No experience needed.",
    invite: "Come laugh, and leave lighter, brighter and more alive.",
  },
  {
    slug: "couple",
    title: "Private Couple Yoga",
    body: "Synchronised movement, breathwork and presence for couples seeking deeper emotional and energetic connection. Perfect for honeymooners, partners or soul companions.",
    invite: "Share a meaningful moment together.",
  },
  {
    slug: "chakra",
    title: "Chakra Healing Yoga",
    body: "A ceremonial journey focused on balancing and activating the seven chakras — intentional movement, breath and awareness to clear blockages and restore harmony.",
    invite: "Realign your energy and awaken your inner light.",
  },
];

export type Session = {
  slug: string;
  title: string;
  lead: string;
  body: string[];
  benefitsIntro?: string;
  benefits?: string[];
  closing: string;
};

export const SESSIONS: Session[] = [
  {
    slug: "reiki",
    title: "Reiki Harmony & Energy Balance",
    lead: "Reconnect with the natural healing energy within you.",
    body: [
      "Reiki is a gentle, hands-on (or hands-above) technique in which the practitioner channels universal life-force energy to support your emotional, mental and physical wellbeing. You remain fully clothed and completely relaxed as energetic blockages clear and the nervous system calms.",
      "Safe, non-invasive and suitable for all ages.",
    ],
    benefitsIntro: "Perfect if you want to",
    benefits: [
      "Release stress, anxiety and emotional tension",
      "Improve energy flow and feel lighter inside",
      "Experience deep relaxation and inner calm",
      "Support your body's natural healing process",
      "Heal emotional wounds and overthinking",
      "Reconnect with clarity, peace and intuition",
    ],
    closing: "Soft, peaceful, grounding, and deeply nourishing.",
  },
  {
    slug: "chakra",
    title: "Balancing Chakra Healing",
    lead: "A transformative blend of energy work, sound therapy and traditional Balinese blessing rituals.",
    body: [
      "Your chakras shape how you think, feel and move through life. The healer channels natural universal energy to open, align and restore all seven — through soft massage, muscle stretching, crystal placement and singing bowl vibrations.",
      "The session also includes a Balinese blessing ceremony, offering spiritual cleansing and a renewed sense of grounding and protection.",
    ],
    benefitsIntro: "Perfect if you want to",
    benefits: [
      "Boost self-confidence and inner strength",
      "Release emotional blockages and mental fog",
      "Restore peace, clarity and balance",
      "Realign your energy with nature and the universe",
      "Feel lighter, calmer and deeply centred",
    ],
    closing: "Awaken your inner power. Harmonize your energy. Return to yourself.",
  },
  {
    slug: "breathwork",
    title: "Prana Flow Breathwork Journey",
    lead: "Discover the healing power of your breath.",
    body: [
      "Breath is life. Through mindful breathing techniques, visualisation and guided relaxation, you'll learn to use your breath to activate the body's natural healing system and let stress and stagnant emotions melt away.",
      "Gentle yet powerful — suitable for beginners and experienced practitioners.",
    ],
    benefitsIntro: "Use your breath to",
    benefits: [
      "Release anxiety and emotional heaviness",
      "Improve mental clarity and focus",
      "Calm the nervous system",
      "Increase energy and vitality",
      "Reduce stress and overthinking",
      "Connect with deeper awareness and intuition",
    ],
    closing: "Breathe deeply. Heal deeply. Return to yourself.",
  },
  {
    slug: "aura",
    title: "Cleaning & Activating the Aura",
    lead: "A powerful energetic cleanse to purify your energy field, remove emotional debris and recharge your inner light.",
    body: [
      "The healer channels natural universal energy through soft massage, muscle stretching, crystal placement and singing bowl vibrations, guiding your whole system back into harmony. The session also includes a Balinese blessing ceremony for spiritual cleansing and protection.",
    ],
    benefitsIntro: "Perfect if you want to",
    benefits: [
      "Boost self-confidence and inner strength",
      "Release emotional blockages and mental fog",
      "Restore peace, clarity and balance",
      "Feel lighter, calmer and deeply centred",
    ],
    closing: "Awaken your inner power. Harmonize your energy. Return to yourself.",
  },
  {
    slug: "trauma-release",
    title: "Healing for Trauma Release & Manifestation",
    lead: "A safe, sacred space to gently release the emotional imprints your body has been holding for years.",
    body: [
      "Trauma doesn't only live in the mind — it settles in your breath, muscles and reactions. Combining conscious breathing, somatic release, guided meditation and intentional manifestation, this breathwork session helps you unravel stored tension, break old cycles and step into a new version of yourself.",
      "Participants often describe it as a rebirth: the body lighter, the mind clearer, the heart open again.",
    ],
    closing: "This is your space to let go, heal deeply, and awaken the life you truly want to create.",
  },
  {
    slug: "breathwork-sound",
    title: "Breathwork + Sound Healing Relaxation",
    lead: "Breath, vibration and inner awareness come together to calm the nervous system.",
    body: [
      "Conscious breathing releases stress, stagnant emotions and mental tension while waves of singing bowls, bells and harmonic vibrations wash over the body — a deeply restorative experience rooted in one of humanity's oldest healing tools.",
      "The result is a profound sense of peace, emotional lightness and clarity.",
    ],
    closing: "Perfect for anyone who wants to slow down, reset, and reconnect with their inner self.",
  },
  {
    slug: "qi-gong",
    title: "Harmony Qi Gong with Singing Bowls",
    lead: "Awaken your life-force energy through Qi Gong infused with ancient sound healing.",
    body: [
      "Slow, graceful Qi Gong movements meet the deep vibration of singing bowls — opening the meridians, enhancing circulation and restoring the flow of Qi, while sound frequencies dissolve tension and quiet the mind. For beginners and experienced practitioners alike.",
    ],
    benefitsIntro: "Designed for anyone who wants to",
    benefits: [
      "Release stress, anxiety and emotional heaviness",
      "Improve energy flow, grounding and body awareness",
      "Strengthen the connection between breath, movement and emotion",
      "Experience gentle but powerful self-healing",
      "Feel calm, centred and recharged from within",
    ],
    closing: "Move with intention. Breathe with awareness. Heal with vibration.",
  },
  {
    slug: "tai-chi",
    title: "Tai Chi & Sound Healing Energy Journey",
    lead: "Graceful movement blended with the healing vibrations of the singing bowl.",
    body: [
      "Tai Chi is known as “meditation in motion”. Slow, intentional movements and mindful breathing release tension and centre the mind, while the singing bowl's resonance helps you drop into a calm, restorative state. Accessible for all levels — even complete beginners.",
    ],
    benefitsIntro: "Designed for anyone who wants to",
    benefits: [
      "Improve balance, posture and body awareness",
      "Reduce stress, anxiety and mental overwhelm",
      "Strengthen inner calm and emotional stability",
      "Enhance energy flow and overall vitality",
      "Find peace, clarity and grounding from within",
    ],
    closing: "Move with grace. Heal with sound. Realign your energy.",
  },
  {
    slug: "full-moon",
    title: "Full Moon Sound & Soul Cleansing",
    lead: "Step into the magic of the Full Moon and allow yourself to release, reset and rise.",
    body: [
      "A sacred ceremony to cleanse emotional heaviness, renew your energy and bring you back into alignment with your true self. The singing bowl guides you into deep relaxation where the body softens, the mind quiets and the heart begins to open.",
    ],
    benefitsIntro: "Under the moonlight, this ceremony helps you",
    benefits: [
      "Release emotional blockages and stagnant energy",
      "Calm the nervous system and clear mental clutter",
      "Realign your chakras through sound frequency",
      "Set powerful intentions for a new cycle",
      "Feel lighter, clearer and more connected to yourself",
    ],
    closing: "Give yourself permission to breathe, soften, and begin again!",
  },
];

export const BLESSING_EXPERIENCES = [
  {
    title: "Sacred Melukat Cleansing Ritual",
    body: "An authentic Balinese purification at a sacred water temple. Guided by a local priest, release emotional burdens and restore spiritual clarity through holy spring water.",
  },
  {
    title: "Nature Healing Walks",
    body: "Walk through rice terraces, waterfalls or bamboo forests with grounding exercises, mindful breathing and gratitude practice.",
  },
  {
    title: "Sound Healing & Meditation",
    body: "Tibetan singing bowls, breath awareness and guided meditation to harmonise your energy and calm the mind.",
  },
  {
    title: "Private Chakra or Reiki Healing",
    body: "One-on-one energy healing tailored to your emotional and physical needs — balancing the chakras and soothing the nervous system.",
  },
  {
    title: "Letting Go Ceremony",
    body: "A reflective ritual by the sea or in nature to symbolically release old emotions, limiting beliefs or past pain.",
  },
  {
    title: "Temple Blessing Tour",
    body: "Sacred temples chosen for your intention — healing, peace, abundance or protection — with guidance in prayer, offerings and mindfulness.",
  },
  {
    title: "Evening Mindfulness Ritual",
    body: "Gentle meditation or journaling under the moonlight to integrate your experiences and connect with your inner wisdom.",
  },
];

export const BLESSING_FOR = [
  "Heal emotional or spiritual burdens",
  "Find inner peace and clarity",
  "Reconnect with themselves",
  "Explore Bali from a meaningful, spiritual perspective",
  "Experience authentic Balinese culture and ceremonies",
  "Recharge mentally and emotionally",
];

export type Testimonial = { name: string; quote: string; lead?: string; translation?: string };

// From the testimonial carousel on the original homepage (spelling tidied, meaning unchanged).
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mandy B",
    lead: "I highly recommend Sinta (Komang) and Prana Healing Yoga. My partner and I booked her for private couples yoga and one-on-one sessions — she was fantastic: warm, caring and very knowledgeable, and she modified poses to accommodate my physical limitations.",
    quote:
      "I highly recommend Sinta (Komang) and Prana Healing Yoga. When holidaying in Bali, my partner and I booked Sinta for some private couples yoga and 1 on 1 yoga sessions. Sinta was fantastic. Her English is very good (which was important to me, as I needed to be confident that she understood my physical limitations). She is warm, caring and very knowledgeable about her craft and she was able to modify some poses to accommodate my issues. Unfortunately asthma prevented me from attending some of the classes, but she offered to make me a video with some breathing exercises and later sent a video she'd specially translated (from Indonesian into English) to help with my back issues. On our next trip, we are planning on going on the waterfall blessing temple tour. The photos look amazing and we know we'll have a great time. Until then, thanks again Sinta. Xx",
  },
  {
    name: "Steve Chadwick",
    quote:
      "Recovering from a leg and ankle break hasn't been easy, however over the past year Komang's knowledge of healing yoga, patience and continued support to get me mobile again has made all the difference. Thank you for everything.",
  },
  {
    name: "Wira Danaputra",
    quote:
      "One of the best yoga practices I’ve had and experienced in Bali. I enjoy every class that Komang does. Especially Vinyasa and healing. She guides me thoroughly on my yoga journey. Suksma🙏🏽",
  },
  {
    name: "Saran Munnichs",
    quote:
      "She is a wonderful human and teacher and with devotion she cares for you. Brings you peace, health and mindfulness and a happy vibes! I will go back to her to learn from her again!",
  },
  {
    name: "Dox Catherine",
    quote:
      "The best teacher so far in all kinds of yoga classes, favourite is the healing, deep stretching and meditation on beautiful mantras 🙏 you make my day beautiful! Thanks, Komang cantik",
  },
  {
    name: "Wayan Darnanta",
    quote:
      "Saya pertama kali mengikuti prana healing yoga badan saya terasa lebih ringan dan lega.. Banyak diberikan motivasi untuk menghadapi emosi diri sendiri... the best, recommended!",
    translation:
      "The first time I joined Prana Healing Yoga, my body felt lighter and more at ease. Lots of encouragement to face my own emotions… the best, recommended!",
  },
  {
    name: "Desi Cabot",
    quote: "Very recommended place for yoga, such a friendly and charming teacher that makes you feel comfortable.",
  },
  {
    name: "DV Hobby Mancing",
    quote:
      "Prana healing yoga 🧘‍♂️ ✨️ bali the best way to improve your body and mind ✨️ yoga healing ♥️ loving yourself and smile with heart ❤️ 💙",
  },
  { name: "Yuri Baliman", quote: "Very good teacher, Komang! 🙂" },
];

export type Post = { slug: string; title: string; excerpt: string; date: string };

// The six articles listed on the original /blog page. Full text lives in lib/posts.json (imported from WordPress).
export const POSTS: Post[] = [
  {
    slug: "handpan-sound-healing-in-bali",
    title: "Handpan Sound Healing in Bali",
    excerpt:
      "A handpan is a modern, metal, lens-shaped percussion instrument played with both hands. Handpan sound healing in Bali brings its soft…",
    date: "2026-09-30",
  },
  {
    slug: "sound-healing-in-bali",
    title: "Sound Healing in Bali: A Transformative Healing Experience for Your Time in Bali",
    excerpt:
      "Bali is more than a beautiful destination. For many travelers, it is a place to pause…",
    date: "2026-09-01",
  },
  {
    slug: "the-importance-of-waking-up-early-and-starting-the-day-with-meditation",
    title: "The Importance of Waking Up Early and Starting the Day with Meditation",
    excerpt: "In today’s fast-paced world, many people begin their mornings in a rush…",
    date: "2026-06-20",
  },
  {
    slug: "svadhisthana-chakra",
    title: "Svadhisthana Chakra: The Center of Creativity, Emotion, and Flow",
    excerpt:
      "The Svadhisthana Chakra, often called the Sacral Chakra, is the second of the seven main chakras…",
    date: "2026-03-14",
  },
  {
    slug: "muladhara-chakra-the-foundation-of-body-and-daily-life",
    title: "Muladhara Chakra: The Foundation of Body and Daily Life",
    excerpt:
      "In many ancient spiritual traditions, the human body is seen not only as a physical structure…",
    date: "2026-03-14",
  },
  {
    slug: "full-moon-sound-healing-ritual",
    title: "Full Moon Sound Healing Ritual: A Sacred Night of Release and Renewal",
    excerpt:
      "The full moon has long been considered a powerful moment for reflection, release, and spiritual renewal…",
    date: "2026-03-11",
  },
];
