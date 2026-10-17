// Original Alpha Prana Healing photography, downloaded from alphapranahealing.com/wp-content/uploads.
// Static imports give next/image intrinsic sizes (no layout shift) and blur placeholders.

import logoWhite from "@/assets/images/brand/logo-white.webp";
import logoTeal from "@/assets/images/brand/logo-teal.webp";

import heroBalanceSea from "@/assets/images/home/hero-balance-sea.webp";
import partnerYogaBeach from "@/assets/images/home/partner-yoga-beach.webp";
import templeWaterBlessing from "@/assets/images/home/temple-water-blessing.webp";

import komangPortraitRock from "@/assets/images/komang/portrait-rock.webp";
import komangPrayerPool from "@/assets/images/komang/prayer-pool.webp";
import komangMeditationYellow from "@/assets/images/komang/meditation-yellow.webp";
import komangMeditationBowls from "@/assets/images/komang/meditation-bowls.webp";

import yogaGroupTriangle from "@/assets/images/yoga/group-triangle.webp";
import yogaWaterfallPose from "@/assets/images/yoga/waterfall-pose.webp";
import yoga01 from "@/assets/images/yoga/gallery-01.webp";
import yoga02 from "@/assets/images/yoga/gallery-02.webp";
import yoga03 from "@/assets/images/yoga/gallery-03.webp";
import yoga04 from "@/assets/images/yoga/gallery-04.webp";
import yoga05 from "@/assets/images/yoga/gallery-05.webp";
import yoga06 from "@/assets/images/yoga/gallery-06.webp";
import yoga07 from "@/assets/images/yoga/gallery-07.webp";
import yoga08 from "@/assets/images/yoga/gallery-08.webp";
import yoga09 from "@/assets/images/yoga/gallery-09.webp";
import yoga10 from "@/assets/images/yoga/gallery-10.webp";
import yoga11 from "@/assets/images/yoga/gallery-11.webp";
import yoga12 from "@/assets/images/yoga/gallery-12.webp";

import singingBowlsMat from "@/assets/images/healing/singing-bowls-mat.webp";
import reikiLying from "@/assets/images/healing/reiki-lying.webp";
import breathworkPavilion1 from "@/assets/images/healing/breathwork-pavilion-1.webp";
import breathworkPavilion2 from "@/assets/images/healing/breathwork-pavilion-2.webp";
import bowlSession from "@/assets/images/healing/bowl-session.webp";
import bowlBlessing from "@/assets/images/healing/bowl-blessing.webp";
import bowlChest from "@/assets/images/healing/bowl-chest.webp";
import komangBowlsPavilion from "@/assets/images/healing/komang-bowls-pavilion.webp";
import bowlsGong from "@/assets/images/healing/bowls-gong.webp";
import bowlsCloseup from "@/assets/images/healing/bowls-closeup.webp";
import flowerMandala from "@/assets/images/healing/flower-mandala.webp";
import circleGroup from "@/assets/images/healing/circle-group.webp";
import pavilionMats from "@/assets/images/healing/pavilion-mats.webp";
import circleGroup2 from "@/assets/images/healing/circle-group-2.webp";
import heartMandala from "@/assets/images/healing/heart-mandala.webp";
import circleGroup3 from "@/assets/images/healing/circle-group-3.webp";

import b01 from "@/assets/images/blessing/blessing-01.webp";
import b02 from "@/assets/images/blessing/blessing-02.webp";
import b03 from "@/assets/images/blessing/blessing-03.webp";
import b04 from "@/assets/images/blessing/blessing-04.webp";
import b05 from "@/assets/images/blessing/blessing-05.webp";
import b06 from "@/assets/images/blessing/blessing-06.webp";
import b07 from "@/assets/images/blessing/blessing-07.webp";
import b08 from "@/assets/images/blessing/blessing-08.webp";
import b09 from "@/assets/images/blessing/blessing-09.webp";
import b10 from "@/assets/images/blessing/blessing-10.webp";
import b11 from "@/assets/images/blessing/blessing-11.webp";
import b12 from "@/assets/images/blessing/blessing-12.webp";
import b13 from "@/assets/images/blessing/blessing-13.webp";
import b14 from "@/assets/images/blessing/blessing-14.webp";
import b15 from "@/assets/images/blessing/blessing-15.webp";
import b16 from "@/assets/images/blessing/blessing-16.webp";
import b17 from "@/assets/images/blessing/blessing-17.webp";
import b18 from "@/assets/images/blessing/blessing-18.webp";
import b19 from "@/assets/images/blessing/blessing-19.webp";
import b20 from "@/assets/images/blessing/blessing-20.webp";
import b21 from "@/assets/images/blessing/blessing-21.webp";
import b22 from "@/assets/images/blessing/blessing-22.webp";

import type { StaticImageData } from "next/image";

export type Photo = { src: StaticImageData; alt: string };

export const brand = { logoWhite, logoTeal };

export const img = {
  heroBalanceSea: { src: heroBalanceSea, alt: "Komang holding a dancer's pose on volcanic rocks as waves break behind her" },
  partnerYogaBeach: { src: partnerYogaBeach, alt: "Komang guiding a partner stretch during a beach yoga session" },
  templeWater: { src: templeWaterBlessing, alt: "A guest praying beneath the holy spring spouts of a Balinese water temple" },

  komangPortrait: { src: komangPortraitRock, alt: "Komang Sukerni smiling in traditional Balinese dress, seated against a stone wall" },
  komangPrayer: { src: komangPrayerPool, alt: "Komang in quiet prayer with eyes closed beside a pool" },
  komangMeditationYellow: { src: komangMeditationYellow, alt: "Komang seated in meditation with hands at heart, singing bowls before her" },
  komangMeditationBowls: { src: komangMeditationBowls, alt: "Komang meditating on a blue mat surrounded by singing bowls" },

  yogaGroupTriangle: { src: yogaGroupTriangle, alt: "Students in a side-angle stretch on an open-air wooden yoga deck" },
  yogaWaterfall: { src: yogaWaterfallPose, alt: "A yogi in a seated twist on river rocks in front of a jungle waterfall" },
  yogaStudioDowndog: { src: yoga05, alt: "A group class holding downward dog in a sunlit studio" },

  singingBowlsMat: { src: singingBowlsMat, alt: "A healing bed prepared with cushions and singing bowls" },
  komangBowlsPavilion: { src: komangBowlsPavilion, alt: "Komang seated cross-legged in a Balinese pavilion behind singing bowls" },
  bowlsGong: { src: bowlsGong, alt: "A practitioner playing singing bowls and a gong in an open pavilion" },
  reikiLying: { src: reikiLying, alt: "A guest resting on a healing bed under warm amber light" },
  breathwork1: { src: breathworkPavilion1, alt: "A breathwork circle seated on mats in a thatched pavilion" },
  breathwork2: { src: breathworkPavilion2, alt: "Guests breathing with hands on chest and belly in a thatched pavilion" },
  bowlSession: { src: bowlSession, alt: "A guest lying among singing bowls during a sound session" },
  bowlBlessing: { src: bowlBlessing, alt: "Komang holding a singing bowl above a guest's head under lantern light" },
  trauma: { src: yoga09, alt: "A guided session on mats in a high-ceilinged studio" },
  bowlsCloseup: { src: bowlsCloseup, alt: "Singing bowls and a mallet laid out on a cloth" },
  fullMoon: { src: b13, alt: "Guests seated in a row in meditation at a temple spring" },

  blessingWaterfallArms: { src: b19, alt: "A guest with arms wide open beneath a waterfall during a blessing" },
  blessingWaterPour: { src: b11, alt: "A healer pouring holy water over a guest's head" },
  blessingPriest: { src: b07, alt: "A healer blessing a seated group at a sacred spring" },
  blessingRice: { src: b10, alt: "A healer placing blessed rice on a guest's brow" },
  blessingPrayer: { src: b02, alt: "A guest with eyes closed, receiving a blessing at the temple" },
  yogaShala: { src: yoga03, alt: "Students gathered and smiling together in an open-air Balinese shala" },
  yogaGarden: { src: yoga11, alt: "A deep backbend on a garden lawn beside palm trees" },
  yogaAdjust: { src: yoga02, alt: "Komang giving hands-on adjustments during a studio class" },
  yogaAssist: { src: yoga04, alt: "A guided assisted stretch beside tall windows" },
  yogaBrightStudio: { src: yoga08, alt: "A yoga class on mats in a bright, open studio" },
  yogaHeadstand: { src: yoga10, alt: "A headstand on the lawn beside a palace water garden" },
  yogaHandstand: { src: yoga12, alt: "A handstand in clear shallow sea water" },
  pavilionMats: { src: pavilionMats, alt: "Mats laid out in a circle in a thatched pavilion, ready for a session" },
  circleGroup: { src: circleGroup, alt: "Guests seated in a circle around singing bowls and candles" },
  circleGroup2: { src: circleGroup2, alt: "A group seated around a sound healing altar" },
  circleGroup3: { src: circleGroup3, alt: "A sound healing circle by candlelight" },
  heartMandala: { src: heartMandala, alt: "A heart-shaped flower mandala before a sound healing session" },
  flowerMandala: { src: flowerMandala, alt: "A flower mandala and singing bowls on a terrace overlooking rice fields" },
  bowlChest: { src: bowlChest, alt: "A singing bowl resting on a guest's chest" },
  blessingWhitePrayer: { src: b15, alt: "Guests dressed in white raising their hands in prayer at the temple" },
  blessingLaughing: { src: b18, alt: "A guest laughing during the blessing ceremony" },
  blessingSpring: { src: b09, alt: "A guest bathing at a spring beside stone statues" },
  blessingJunglePath: { src: b21, alt: "Guests walking the jungle path to the waterfall temple" },
  blessingFeet: { src: b22, alt: "Bare feet in a circle on wet temple stone" },
} satisfies Record<string, Photo>;

const BLESSING_ALTS = [
  "A guest beneath a rushing waterfall",
  "A healer placing blessed rice on a guest's brow",
  "Guests seated in prayer on a temple path",
  "A guest receiving a blessing at the spring",
  "A healer blessing a guest in a purple sarong",
  "A guest washing beneath a temple spring spout",
  "A healer blessing a seated group",
  "A lone figure beneath a towering waterfall",
  "A guest bathing at a spring beside stone statues",
  "A blessing at the brow beside temple parasols",
  "A healer pouring holy water over a guest's head",
  "A healer guiding a seated group",
  "Guests seated in a row in meditation",
  "A guest sipping holy water",
  "Guests in white raising hands in prayer",
  "A healer blessing a group at the spring",
  "A guest with arms open under a waterfall",
  "A guest laughing during the ceremony",
  "A guest with arms wide beneath falling water",
  "Guests standing in the pool before a waterfall",
  "Guests walking the jungle path to the temple",
  "Bare feet in a circle on wet temple stone",
];

export const gallery = {
  healing: [
    { src: bowlChest, alt: "A singing bowl resting on a guest's chest" },
    { src: bowlSession, alt: "A guest lying among singing bowls" },
    { src: bowlBlessing, alt: "Komang holding a singing bowl over a guest's head" },
    { src: komangMeditationBowls, alt: "Komang meditating surrounded by singing bowls" },
    { src: bowlsCloseup, alt: "Singing bowls and mallet" },
    { src: bowlsGong, alt: "Bowls and gong in an open pavilion" },
    { src: komangBowlsPavilion, alt: "Komang seated in a Balinese pavilion" },
    { src: circleGroup3, alt: "A sound healing circle by candlelight" },
    { src: flowerMandala, alt: "A flower mandala and bowls on a terrace" },
    { src: circleGroup, alt: "Guests seated in a circle around bowls and candles" },
    { src: pavilionMats, alt: "Mats arranged in a circle in a thatched pavilion" },
    { src: circleGroup2, alt: "A group seated around a sound healing altar" },
    { src: heartMandala, alt: "A heart-shaped flower mandala before a session" },
  ],
  yoga: [
    { src: yoga01, alt: "Assisted savasana in a glass-walled studio" },
    { src: yoga02, alt: "Hands-on adjustments during a studio class" },
    { src: yoga03, alt: "Students gathered in an open-air shala" },
    { src: yoga04, alt: "A guided assisted stretch by a window" },
    { src: yoga05, alt: "A group in downward dog" },
    { src: yoga06, alt: "Students resting on mats in a large studio" },
    { src: yoga07, alt: "A class seated beneath a wooden roof" },
    { src: yoga08, alt: "A class in a bright open studio" },
    { src: yoga09, alt: "Students on mats in a high-ceilinged hall" },
    { src: yoga10, alt: "A headstand beside a palace water garden" },
    { src: yoga11, alt: "A backbend on a garden lawn" },
    { src: yoga12, alt: "A handstand in clear shallow water" },
  ],
  blessing: [b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22].map(
    (src, i) => ({ src, alt: BLESSING_ALTS[i] }),
  ),
} satisfies Record<string, Photo[]>;
