/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { socialInstagram } from "react-icons-kit/ionicons/socialInstagram";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialYoutube } from "react-icons-kit/ionicons/socialYoutube";
import { androidMail } from "react-icons-kit/ionicons/androidMail";
import { androidMap } from "react-icons-kit/ionicons/androidMap";
import { iosTelephone } from "react-icons-kit/ionicons/iosTelephone";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import bannerSlide0 from "../../../public/images/banner-0.jpeg";
import bannerSlide1 from "../../../public/images/banner-1.jpeg";
import bannerSlide2 from "../../../public/images/banner-2.jpeg";
import bannerSlide3 from "../../../public/images/banner-3.jpeg";
import bannerSlide4 from "../../../public/images/banner-4.jpeg";
import bannerSlide5 from "../../../public/images/banner-5.jpeg";
import bannerSlide7 from "../../../public/images/banner-7.jpeg";
import bannerSlide9 from "../../../public/images/banner-9.jpeg";
import bannerSlide10 from "../../../public/images/banner-10.jpeg";

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import featureIcon1 from "../assets/image/charity/feature/icon-1.svg";
import featureIcon2 from "../assets/image/charity/feature/icon-2.svg";
import featureIcon3 from "../assets/image/charity/feature/icon-3.svg";
import featureIcon4 from "../assets/image/charity/feature/icon-4.svg";
import featureIcon5 from "../assets/image/charity/feature/icon-5.svg";
import featureIcon6 from "../assets/image/charity/feature/icon-6.svg";

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */
import search from "../assets/image/charity/discover.svg";
import booking from "../assets/image/charity/sofa.svg";
import checkIn from "../assets/image/charity/check.svg";

/* ------------------------------------ */
// BranchLelft section data
/* ------------------------------------ */
import thumbImage1 from "../../../public/images/section-partner.jpeg";

/* ------------------------------------ */
// BranchRight section data
/* ------------------------------------ */
import thumbImage2 from "../../../public/images/section-corporate.jpeg";

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */
import happyKids from "../assets/image/charity/section-corporate.jpeg";

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */

export const menuItems = [
  {
    label: "Τι προσφέρουμε",
    path: "#feature",
    offset: "81",
  },
  {
    label: "Πως δουλεύει",
    path: "#work",
    offset: "81",
  },
  {
    label: "Που μπορώ να πάω",
    path: "#locations",
    offset: "81",
  },
  {
    label: "Γίνε συνεργάτης",
    path: "#partner",
    offset: "81",
  },
  {
    label: "Πακέτα για επιχηρήσεις",
    path: "#corporate",
    offset: "81",
  },
  {
    label: "FAQ",
    path: "#faq",
    offset: "81",
  },
];

export const bannerSlides = [
  {
    id: 0,
    thumbUrl: bannerSlide0,
    alt: "Γυμναστήρια με μια συνδρομή",
  },
  {
    id: 4,
    thumbUrl: bannerSlide1,
    alt: "Κολυμβητήρια με μια συνδρομή",
  },
  {
    id: 1,
    thumbUrl: bannerSlide5,
    alt: "cross training με μια συνδρομή",
  },
  {
    id: 2,
    thumbUrl: bannerSlide4,
    alt: "Yoga class με μια συνδρομή",
  },
  {
    id: 10,
    thumbUrl: bannerSlide10,
    alt: "cross training με μια συνδρομή",
  },
  {
    id: 3,
    thumbUrl: bannerSlide2,
    alt: "Γυμναστήρια αναρρίχησης με μια συνδρομή",
  },
  {
    id: 5,
    thumbUrl: bannerSlide3,
    alt: "Kick boxing με μια συνδρομή",
  },
  {
    id: 7,
    thumbUrl: bannerSlide7,
    alt: "Pilates με μια συνδρομή",
  },
  {
    id: 9,
    thumbUrl: bannerSlide9,
    alt: "Μαθηματα χορού με μια συνδρομή",
  },
];

export const featureData = {
  title: "Πρόσβαση σε κάθε δραστηριότητα, χωρίς περιορισμούς",
  slogan:
    "Απόλαυσε εκατοντάδες αθλητικές δραστηριότητες καθώς και ζωντανά μαθήματα με την πιο ευέλικτη αθλητική προσφορά στην Ελλάδα!",
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: "Αθλητικές δραστηριότητες",
      description:
        "Απολαύστε από γιόγκα, πιλάτες εως αναρρίχηση και κολύμβηση με τους φίλους και τους αγαπημένους σας εκπαιδευτές.",
    },
    {
      id: 2,
      icon: featureIcon2,
      title: "Επίσκεψεις χωρίς όρια",
      description:
        "Σας αρέσει ένα στούντιο; Επισκεφθείτε όσο συχνά θέλετε χωρίς περιορισμούς.",
    },
    {
      id: 4,
      icon: featureIcon4,
      title: "Ευελιξία επιλογών",
      description:
        "Επιλέξτε την αθλητική δραστηριότητα που σας ταιριάζει ή δοκιμάστε κάτι καινούριο χωρίς δεσμεύσεις.",
    },
    {
      id: 3,
      icon: featureIcon3,
      title: "Υποστήριξε τα στούντιο της περιοχής σου",
      description:
        "Ανακαλύψτε εξειδικευμένα στούντιο στην περιοχή σας και υποστηρίξτε τις τοπικες αθλητικές εγκαταστάσεις και τους εκπαιδευτές τους.",
    },
    {
      id: 5,
      icon: featureIcon5,
      title: "Εύκολα, από την Urbanfit εφαρμογή στο κινητό σου",
      description:
        "Βρείτε όλες τις πληροφορίες για τα αγαπημένα σας γυμναστήρια και κάντε την κράτησή σας χωρίς επιπρόσθετες εγγραφές και συνδέσεις.",
    },
    {
      id: 6,
      icon: featureIcon6,
      title: "Χωρίς συμβάσεις ή δεσμεύσεις",
      description:
        "Ευέλικτη συνδρομή με δυνατότητα προσαρμογής του πλάνου σας. Παύση ή ακύρωση της συνδρομής σας μηνιαίως χωρίς δεσμεύσεις.",
    },
  ],
};

export const workData = {
  title: "Πως δουλεύει",
  features: [
    {
      id: 1,
      icon: search,
      title: "1. Ανακάλυψε νέα studio",
      description:
        "Από τη γιόγκα στο crossfit, από το bouldering στο high-intensity training. Ψάξτε και βρείτε τι ταιριάζει σε εσάς από μια μεγάλη ποικιλία δραστηριοτήτων.",
    },
    {
      id: 2,
      icon: booking,
      title: "2. Κάνε κράτηση",
      description:
        "Αφού βρείτε τη δραστηριότητα που θέλετε να κάνετε σήμερα, κλείστε θέση μέσω της εφαρμογής Urbanfit! Είναι τόσο εύκολο.",
    },
    {
      id: 3,
      icon: checkIn,
      title: "3. Γυμνάσου",
      description:
        "Ήρθε η ώρα να απολάυστε τη γυμναστική σας! Επισκεφτείτε το στουντιο που επιλέξατε και χρησιμοποιήστε την Urbanfit εφαρμογή για να κάνετε check-in.",
    },
  ],
};

export const mapData = {
  title: "Αθλητικά κέντρα σε όλη την Αθήνα",
  slogan: "Διάλεξε ότι σου ταιριάζει",
};

export const branchData = {
  id: 1,
  image: thumbImage1,
  slogan: "ΠΑΚΕΤΑ ΓΙΑ ΓΥΜΝΑΣΤΗΡΙΑ & ΣΤΟΥΝΤΙΟ",
  textTitle: `Γίνε συνεργάτης!`,
  description:
    "Η επιτυχία μας συνδέεται άμεσα με την επιτυχία των συνεργατών μας. Διαφημίστε δωρεάν την επιχείρησή σας μέσω του δικτύου μας και αυξήστε την αναγνωρισιμότητα και την προβολή της επιχείρησής σας.\n",
  lists: [
    {
      id: 1,
      text: "1. Αύξηση των εσόδων",
    },
    {
      id: 2,
      text: "2. Πρόσβαση σε νέους πελάτες",
    },
    {
      id: 3,
      text: "3. Δωρεάν marketing",
    },
    {
      id: 4,
      text: "4. Ενίσχυση της εικόνας σας",
    },
    {
      id: 5,
      text: "5. Μηδενικό κόστος εγγραφής",
    },
  ],
  linkUrl: "/partners",
  linkText: "Γίνε Συνεργάτης",
};

export const branchRightData = {
  id: 1,
  image: thumbImage2,
  slogan: "ΠΡΟΓΡΑΜΜΑΤΑ ΚΑΙ ΕΤΑΙΡΙΚΑ ΠΑΚΕΤΑ ΓΙΑ ΥΠΑΛΛΗΛΟΥΣ - COMING SOON",
  textTitle: `Χαρίστε στους υπαλλήλους σας καλύτερη φυσική κατάσταση και ευεξία!`,
  description:
    "Τώρα είναι η τέλεια στιγμή για να επενδύσετε στους υπαλλήλους σας.",
  lists: [
    {
      id: 1,
      text:
        "1. Χωρίς ετήσιες συμβάσεις για υπαλλήλους - ακυρώστε ανά πάσα στιγμή",
    },
    {
      id: 2,
      text: "2. Αυξήστε την παραγωγικότητα και το ομαδικό πνεύμα",
    },
    {
      id: 3,
      text: "3. Βελτιώστε την υγεία των υπαλλήλων σας",
    },
    {
      id: 4,
      text: "4. Ενισχύστε την αφοσίωση των εργαζομένων σας",
    },
    {
      id: 4,
      text: "5. Δημιουργήστε ελκυστικό περιβάλλον εργασίας",
    },
  ],
  linkUrl: "/packages",
  linkText: "Επικοινωνήστε μαζί μας",
};

export const promotionData = {
  slogan: "Προγραμμα Εταιρικης Ευεξιας",
  title: "Χαρήστε στους υπαλλήλους σας φυσική κατάσταση και ευεξία",
  text1: "Τώρα είναι η τέλεια στιγμή για να επενδύσετε στους υπαλλήλους σας.",
  lists: [
    {
      id: 1,
      text:
        "1. Χωρίς ετήσιες συμβάσεις για υπαλλήλους - ακυρώστε ανά πάσα στιγμή",
    },
    {
      id: 2,
      text: "2. Αυξήστε την παραγωγικότητα και το ομαδικό πνεύμα",
    },
    {
      id: 3,
      text: "3. Βελτιώστε την υγία των υπαλλήλων σας",
    },
    {
      id: 4,
      text: "4. Αυξηστε την αφοσίωση των εργαζομένων σας",
    },
  ],
  image: happyKids,
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: "One Time",
    value: "oneTime",
    text: "One Time donation given",
  },
  {
    id: 2,
    title: "Ongoing",
    value: "ongoing",
    text: "Everymonth donation given",
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: "usd",
    title: "$ USD",
  },
  {
    id: 2,
    value: "gbp",
    title: "£ GBP",
  },
  {
    id: 3,
    value: "cny",
    title: "¥ CNY",
  },
];

// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: "Urbanfit",
    menu: [
      {
        id: 1,
        label: "Γίνε μέλος",
        href: "/",
      },
      {
        id: 1,
        label: "Μάθε τι προσφέρουμε",
        href: "/#feature",
        offset: "81",
      },
      {
        id: 2,
        label: "Μάθε πως δουλεύει",
        href: "/#work",
      },
    ],
  },
  {
    id: 2,
    title: "Συνεργασία",
    menu: [
      {
        id: 1,
        label: "Γίνε συνεργάτης",
        href: "/partners",
      },
      {
        id: 2,
        label: "Εταιρικά πακέτα",
        href: "/#corporate",
      },
    ],
  },
  {
    id: 3,
    title: "Υποστήριξη",
    menu: [
      {
        id: 1,
        label: "Συχνές ερωτήσεις μελών",
        href: "/#faq",
      },
      {
        id: 2,
        label: "Συχνές ερωτήσεις συνεργατών",
        href: "/partners#faq",
      },
    ],
  },
];

export const copyright = [
  {
    id: 1,
    text: "Privacy Policy",
    link: "1#",
  },
  {
    id: 2,
    text: "Terms and Conditions",
    link: "1#",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={linkedin} />,
    name: "linkedin",
    link: "https://www.linkedin.com/company/urbanfitgr/",
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: "facebook",
    link: "https://www.facebook.com/UrbanFitgr-112860604235970/",
  },
  {
    id: 3,
    icon: <Icon icon={instagram} />,
    name: "instagram",
    link: "https://www.instagram.com/urbanfit.gr/",
  },
];

export const faq = {
  slogan: "Συχνές Ερωτήσεις Μελών Urbanfit",
  title: "Μπορείτε να μας καλέσετε στο +306988221619",
  faqs: [
    {
      id: 1,
      question: "Τι χρειάζομαι για την εγγραφή μου;",
      answer:
        "Το Urbanfit είναι μια αποκλειστικά ψηφιακή συνδρομή, πράγμα που σημαίνει ότι μπορείτε να κάνετε check-in σε αθλητικούς χώρους μόνο εάν έχετε με την εφαρμογή μας. Μπορείτε να κατεβάσετε την εφαρμογή δωρεάν από το Google Play Store ή το App Store. Πρέπει να έχετε smartphone iOS ή Android, καθώς και σύνδεση στο διαδίκτυο που λειτουργεί.",
    },
    {
      id: 2,
      question: "Πώς μπορώ να κάνω κράτηση και να επισκεφτώ χώρους;",
      answer:
        "Μπορείτε να βρείτε τη γκάμα αθλητικών δραστηριοτήτων απευθείας στην εφαρμογή μας. Όταν φτάσετε σε ένα χώρο, μπορείτε να κάνετε check-in σαρώνοντας τον κωδικό QR Urbanfit που συνήθως βρίσκεται κοντά στην είσοδο. Ορισμένες δραστηριότητες ενδέχεται να απαιτούν κράτηση.",
    },
    {
      id: 3,
      question:
        "Μπορώ να διακόψω ή να ακυρώσω τη συνδρομή μου ανά πάσα στιγμή;",
      answer:
        "Μπορείτε να θέσετε τη συνδρομή σας σε παύση ανά πάσα στιγμή, ξεκινώντας από τον επόμενο μήνα συνδρομής. Οι συνδρομές απαιτούν ειδοποίηση ενός ολόκληρου μήνα πριν από την ακύρωση.",
    },
    {
      id: 4,
      question: "Τι χρειάζομαι στο προφίλ μου για να μπορώ να κάνω check-in;",
      answer:
        "Πριν χρησιμοποιήσετε τη συνδρομή σας για πρώτη φορά, βεβαιωθείτε ότι έχετε συνδεθεί επιτυχώς στην εφαρμογή χρησιμοποιώντας τον κωδικό πρόσβασης και τη διεύθυνση ηλεκτρονικού ταχυδρομείου με το οποία έχετε εγγραφεί. Για να μπορέσετε να κάνετε check-in, πρέπει να ανεβάσετε μια εικόνα προφίλ, ώστε να μπορείτε να αναγνωριστείτε στο στούντιο ή τη γυμναστηριακή μονάδα. Για να ανεβάσετε φωτογραφία μπορείτε να χρησιμοποιήσετε την εφαρμογή στο κινήτο σας. Βεβαιωθείτε ότι έχετε σύνδεση στο Διαδίκτυο και ότι έχετε δώσει στην εφαρμογή πρόσβαση στην κάμερα. Μόλις το κάνετε αυτό, τότε δεν θα έχετε κανένα πρόβλημα να κάνετε check-in στην τοποθεσία που διαλέξατε να προπονηθείτε.",
    },
    {
      id: 6,
      question: "Πώς μπορώ να δοκιμάσω τη συνδρομή μόνο για ένα μήνα;",
      answer:
        "Για να εγγραφείτε για μόλις ένα μήνα, επιλέξτε ως ημερομηνία έναρξης της συνδρομής σας τουλάχιστον μία μέρα στο μέλλον. Στη συνέχεια ακυρώστε τη συνδρομή σας αμέσως ή τουλάχιστον μία ημέρα πριν από την έναρξη της συνδρομής. Μπορείτε να το κάνετε αυτό από το προφίλ σας στην εφαρμογή ή γράφοντας σε εμάς χρησιμοποιώντας τη φόρμα επικοινωνίας",
    },
    {
      id: 7,
      question: "Πρέπει να κάνω κράτηση πριν μπορώ να κάνω check-in;",
      answer:
        "Μπορείτε να δείτε εάν πρέπει να κάνετε κράτηση και πώς να το κάνετε ελέγχοντας το προφίλ του συνεργάτη στην εφαρμογή σας. Για να κλείσετε μια τάξη, βεβαιωθείτε ότι έχετε συνδεθεί στην εφαρμογή σας. \n" +
        "\n" +
        "Σε ορισμένες περιπτώσεις, πρέπει να επικοινωνήσετε με τον συνεργάτη μέσω τηλεφώνου ή email για να κάνετε κράτηση. Εάν κάνετε κράτηση και δεν μπορείτε να παρευρεθείτε, βεβαιωθείτε ότι έχετε ακυρώσει την κράτηση το συντομότερο δυνατόν, ώστε άλλα μέλη να πάρουν τη θέση σας. Εάν δεν υπάρχουν πληροφορίες σχετικά με τον τρόπο πραγματοποίησης μιας κράτησης, τότε δεν είναι απαραίτητο για τη συγκεκριμένη δραστηριότητα.\n",
    },
    {
      id: 5,
      question: "Μπορεί κάποιος άλλος να χρησιμοποιήσει τη συνδρομή μου;",
      answer:
        "Η συνδρομή σας ισχύει μόνο για ένα άτομο και δεν μπορεί να μεταφερθεί.",
    },
    {
      id: 5,
      question:
        "Έκανα μια δεσμευτική κράτηση, αλλά δεν μπορώ να τη διατηρήσω - τι πρέπει να κάνω;",
      answer:
        "Εάν έχετε κρατήσει ένα μέρος για μια δραστηριότητα και δεν μπορείτε να πάτε ή δεν θέλετε πλέον να παρευρεθείτε, φροντίστε να ακυρώσετε την κράτηση. Μπορείτε να το κάνετε αυτό από την εφαρμογή σας.\n" +
        'Λάβετε υπόψη ότι ορισμένοι συνεργάτες έχουν περίοδο ακύρωσης. Αυτό σημαίνει ότι ανάλογα με το πόσο πριν την δραστηριότητα θα αποφασίσετε να ακυρώσετε την κράτησή σας, ενδέχεται να δείτε την κατάσταση της κράτησης "αργά". Αυτό σημαίνει ότι δεν μπορείτε πια να ακυρώσετε τη κράτηση σας.',
    },
  ],
  link: "",
};

export const partners = {
  "spiti-yoga": {
    slug: "spiti-yoga",
    id: 1,
    latitude: 37.97829444719235,
    longitude: 23.730325435963476,
    shelter: "Spiti Yoga",
    image: "/images/partner-spiti-yoga.jpg",
    link: "https://spitiyoga.gr/",
    gmLink: "https://goo.gl/maps/44iQfqCJHJH2D4eLA",
    address: "Λεωχάρους 6, Αθήνα, 10562, 5ος όροφος",
    phoneNumber: "+306948060953",
    description:
      "Το Spiti Yoga είναι ένας χώρος σωματικής άσκησης και έκφρασης που φιλοξενεί μαθήματα Yoga, Pilates, Barre à Terre και Χορού. Δημιουργήθηκε το Σεπτέμβριο του 2015 από τον Γιώργο Ανδρουλάκη, χορευτή, δάσκαλο Yoga και θεραπευτή Thai massage. Στον χώρο, εκτός από τα τακτικά μαθήματα, διοργανώνονται σεμινάρια και εκπαιδευτικά προγράμματα με κεντρικό άξονα τα διάφορα είδη Yoga και τις εναλλακτικές θεραπείες. Επιπλέον, προσφέρονται θεραπευτικές συνεδρίες (Thai massage, Reiki, Shiatsu).\n",
    socialProfiles: [
      {
        icon: socialInstagram,
        url: "https://www.instagram.com/spitiyoga/",
        name: "instagram",
      },
      {
        icon: socialFacebook,
        url: "https://www.facebook.com/spitiyoga",
        name: "facebook",
      },
      {
        icon: iosWorld,
        url: "https://spitiyoga.gr/",
        name: "website",
      },
      {
        icon: androidMap,
        url: "https://goo.gl/maps/44iQfqCJHJH2D4eLA",
        name: "location",
      },
      {
        icon: iosTelephone,
        url: "tel:+306948060953",
        name: "phone number",
      },
      {
        icon: androidMail,
        url: "mailto:spitiyoga@gmail.com",
        name: "email",
      },
    ],
    courses: [
      {
        icon: "/images/yoga-8.svg",
        text: "Hatha Yoga",
        details:
          "Εξασκήσου με τις παραδοσιακές στάσεις yoga. Η πρακτική περιλαμβάνει την αναπνοή, το σώμα και το μυαλό, και τα μαθήματα διακούν συνήθως 45 λεπτά έως 90 λεπτά. Δουλεύουμε συνεχείς αναπνοές, στάσεις yoga και διαλογισμός.",
      },
      {
        icon: "/images/yoga-7.svg",
        text: "Vinyasa Yoga",
        details:
          "Μια ομαλή μετάβαση μεταξύ των asanas. Ο σκοπός της Vinyasa Yoga είναι να χρησιμοποιήσει την αναπνοή για να ευθυγραμμίσει το σώμα και το μυαλό. Θα αναπτύξετε μια ισχυρότερη σύνδεση νου-σώματος και θα αναπτύξετε δύναμη και ευελιξία.",
      },
      {
        icon: "/images/yoga-aerial.svg",
        text: "Aerial Yoga",
        details:
          "Συνδυάζει τις παραδοσιακές στάσεις yoga, pilates και χορό με τη χρήση αιώρας. Η εναέρια yoga σας επιτρέπει να διατηρείτε άνετα κάθε στάση. Με την πάροδο του χρόνου, μπορείτε ακόμη και να περιμένετε να βελτιώσετε την ικανότητα των πνευμόνων σας. Το μάθημα εναέριας yoga θα σας βοηθήσει σίγουρα να τεντώσετε με ασφάλεια τους μύες και τους τένοντες σας.",
      },
      {
        icon: "/images/yoga-2.svg",
        text: "Yin Yoga",
        details: "H Yin Yoga είναι ένα στυλ yoga με αργό ρυθμό. Ένα μάθημα Yin yoga αποτελείται συνήθως από μια σειρά παθητικών στάσεων που λειτουργούν κυρίως στο χαμηλότερο μέρος του σώματος - τους γοφούς, τη λεκάνη, τους εσωτερικούς μηρούς, την κάτω σπονδυλική στήλη. Αυτές οι περιοχές είναι ιδιαίτερα πλούσιες σε συνδετικούς ιστούς. Οι πόζες κρατούνται για έως και πέντε λεπτά, μερικές φορές περισσότερο.",
      },
      {
        icon: "/images/yoga-nidra.svg",
        text: "Nidra yoga",
        details:
          "Η Nidra Yoga είναι ένα στυλ yoga όπου το σώμα χαλαρώνει απόλυτα. Eίναι μια κατάσταση συνείδησης ανάμεσα στο ξύπνημα και τον ύπνο, που συνήθως προκαλείται από έναν αθοδηγημένο διαλογισμό.",
      },
      {
        icon: "/images/pilates-mat.svg",
        text: "Pilates mat",
        details:
          "Το Mat Pilates είναι μια πρακτική άσκησης pilates που μπορεί να γίνεται σε χαλάκι. Aυτό σημαίνει ότι δεν χρησιμοποιείται αναμορφωτής. Στο μάθημα, δουλεύονται στάσεις όπως σανίδες, πλευρικές σανίδες και πολλές ασκήσεις κορμού.",
      },
      {
        icon: "/images/pilates-mat-1.svg",
        text: "Θεραπευτικό Pilates mat",
        details:
          "Θεραπευτικό Pilates είναι μια ο μέθοδος άσκησης η οποία επικεντρώνεται στη σωστή στάση του σώματος, και στη σταθεροποίηση του κεντρικού κορμού.",
      },
      {
        icon: "/images/yoga-5.svg",
        text: "Barre à Terre",
        details:
          "Το Barre à terre είναι μια τεχνική ενδυνάμωσης των κάτω άκρων και της κοιλιακής χώρας που βασίζεται στο ασκησιολόγιο του μπαλέτου.",
      },
    ],
  },
  "stadio-sports-power": {
    slug: "stadio-sports-power",
    id: 5,
    latitude: 38.03821668061964,
    longitude: 23.691459726807487,
    shelter: "STADIO Sports Power",
    image: "/images/partner-stadio-fitness-club-4.jpeg",
    link: "http://www.stadio-sportspower.gr/",
    gmLink: "https://g.page/stadio-sportspower",
    address: "Προκοπίου 7, Πετρούπολη 132 31",
    phoneNumber: "+302105024206",
    description:
      "Σκοπός των προγραμμάτων μας είναι η προσαρμογή ειδικών ασκήσεων για κάθε άθλημα ή αγώνισμα ξεχωριστά ώστε να έχουμε τα μέγιστα αποτελέσματα και τις προσαρμογές που θέλουμε, τα οποία θα βοηθήσουν και θα αυξήσουν την απόδοση. Με άριστο επαγγελματισμό, υπομονή κι επιμονή, υπευθυνότητα και αμοιβαία ηθική δέσμευση δημιουργούμε μακρόχρονες σχέσεις εμπιστοσύνης και αφοσίωσης με τους αθλητές μας.",
    socialProfiles: [
      {
        icon: socialYoutube,
        url: "https://www.youtube.com/channel/UChYcmKrtaowYW7hoF4QOEsA",
        name: "youtube",
      },
      {
        icon: socialInstagram,
        url: "https://instagram.com/stadiosportspower",
        name: "instagram",
      },
      {
        icon: socialFacebook,
        url: "https://www.facebook.com/stadiosportspower/",
        name: "facebook",
      },
      {
        icon: iosWorld,
        url: "https://www.stadio-sportspower.gr/",
        name: "website",
      },
      {
        icon: androidMap,
        url: "https://g.page/stadio-sportspower",
        name: "location",
      },
      {
        icon: iosTelephone,
        url: "tel:+302105024206",
        name: "phone number",
      },
      {
        icon: androidMail,
        url: "mailto:stadiogym@stadiogym.gr",
        name: "email",
      },
    ],
    courses: [
      {
        icon: "/images/personal-training-0.svg",
        text: "Personal Training",
        details:
          "Personal Training σημαίνει προπόνηση με προσωπικό γυμναστή. Με τη μέθοδο αυτή τα αποτελέσματα είναι μεγαλύτερα και γρηγορότερα. Αυτό συμβαίνει γιατί ο προσωπικός γυμναστής είναι πάντα δίπλα στον ασκούμενο με σκοπό να τον καθοδηγήσει σωστά, αρχικά δημιουργώντας το κατάλληλο πρόγραμμα προσαρμοσμένο στις ανάγκες του και μετά καθοδηγώντας τον κατά τη διάρκεια της εκτέλεσης του.",
      },
      {
        icon: "/images/personal-training-1.svg",
        text: "Προπόνηση Αθλητών",
        details:
          "Οι καθηγητές φυσικής αγωγής μας μπορούν να εκπονήσουν συνδυαστικά προπονητικά προγράμματα, ώστε να ελέγχουν και να αξιολογούν την αποτελεσματικότητα των επιδόσεων των αθλητών, καλύπτοντας όλες τις ανάγκες τις προετοιμασίες τους.",
      },
      {
        icon: "/images/hiit-0.svg",
        text: "Cross training",
        details:
          "To Cross-training, θα το δεις συχνά και ως κυκλική προπόνηση, αναφέρεται σε συνδυασμό ασκήσεων από άλλα προγράμματα, διαφοετικά από την κλασική σου προπόνηση. Σε μία προπόνηση το cross training περιλαμβάνει 45 λεπτά ενος έντονου προγράμματος με ασκήσεις από μια ποικιλία προπονήσεων. Το αποτέλεσμα; Έντονη προπόνηση ΗΙΙΤ που καίει θερμίδες και ποτάμια ιδρώτα.",
      },
      {
        icon: "/images/trx.svg",
        text: "TRX",
        details:
          "Γνωστό και ως Total Resistance eXercise, είναι μια ειδική μέθοδος προπόνησης με ιμάντες. Χρησιμοποιεί τους ειδικούς ιμάντες με λαβές και την κατάλληλη τοποθέτηση του σώματος του ασκούμενου για να αναπτύξει τη δύναμη, την ισορροπία και τη δύναμη των σταθεροποιών μυών ταυτόχρονα. Η χρήση των ιμάντων TRX αξιοποιεί τη βαρύτητα για να παρέχει την κατάλληλη επιβάρυνση στον ασκούμενο, η οποία αλλάζει σε ευκολότερη ή δυσκολότερη ανάλογα με την τοποθέτηση του σώματος.",
      },
    ],
  },
  cuerposuerte: {
    slug: "cuerposuerte",
    id: 0,
    latitude: 37.934201572147366,
    longitude: 23.7092749728358,
    shelter: "Cuerpo Suerte Fitness Lab",
    image: "/images/partner-cuerpo-suerte.jpeg",
    link: "https://cuerposuerte.gr/",
    gmLink: "https://goo.gl/maps/Wdz8TGrv7mgXy8zDA",
    address: "Αρκαδιουπόλεως 30 & Παμφυλίας,  Παλαιό Φάληρο, 17564",
    phoneNumber: "+302121069691",
    description:
      "Το γυμναστήριο Cuerpo Suerte Fitness Lab είναι ένας σύγχρονος και άρτια εξοπλισμένος χώρος που επιτρέπει όχι μονο την ασφαλή εκγύμναση των ασκούμενων, αλλα και την αποκατάσταση τους απο οποιαδήποτε χρόνια πάθηση και μυοσκελετικό τραυματισμό. Στόχος του είναι οι ασκούμενοι ανεξαρτήτως φύλου, ηλικίας και φυσικής κατάστασης να είναι πάντα ικανοποιημένοι απο την άσκηση, τα οφέλη της και τα αποτελέσματα της καθώς και απο την φιλική και ευχάριστη ατμόσφαιρα του γυμναστηρίου.\n",
    socialProfiles: [
      {
        icon: socialInstagram,
        url: "https://www.instagram.com/cuerposuerte",
        name: "instagram",
      },
      {
        icon: socialFacebook,
        url: "https://www.facebook.com/cuerposuertefitnesslab/",
        name: "facebook",
      },
      {
        icon: iosWorld,
        url: "https://cuerposuerte.gr/",
        name: "website",
      },
      {
        icon: androidMap,
        url: "https://goo.gl/maps/Wdz8TGrv7mgXy8zDA",
        name: "location",
      },
      {
        icon: iosTelephone,
        url: "tel:+302121069691",
        name: "phone number",
      },
    ],
    courses: [
      {
        icon: "/images/personal-training.svg",
        text: "Personal Training",
        details:
          "Personal Training σημαίνει προπόνηση με προσωπικό γυμναστή. Με τη μέθοδο αυτή τα αποτελέσματα είναι μεγαλύτερα και γρηγορότερα. Αυτό συμβαίνει γιατί ο προσωπικός γυμναστής είναι πάντα δίπλα στον ασκούμενο με σκοπό να τον καθοδηγήσει σωστά, αρχικά δημιουργώντας το κατάλληλο πρόγραμμα προσαρμοσμένο στις ανάγκες του και μετά καθοδηγώντας τον κατά τη διάρκεια της εκτέλεσης του.",
      },
      {
        icon: "/images/personal-training-2.svg",
        text: "Group Training",
        details:
          "To Group Training πρόκειται για ομαδικές προπονήσεις με λίγα άτομα. Mε άλλα λογια, είναι η εμπειρία ενός Personal Training σε μικρά ομαδικά τμήματα.",
      },
      {
        icon: "/images/trx.svg",
        text: "TRX cross training",
        details:
          "Γνωστό και ως Total Resistance eXercise, είναι μια ειδική μέθοδος προπόνησης με ιμάντες. Χρησιμοποιεί τους ειδικούς ιμάντες με λαβές και την κατάλληλη τοποθέτηση του σώματος του ασκούμενου για να αναπτύξει τη δύναμη, την ισορροπία και τη δύναμη των σταθεροποιών μυών ταυτόχρονα. Η χρήση των ιμάντων TRX αξιοποιεί τη βαρύτητα για να παρέχει την κατάλληλη επιβάρυνση στον ασκούμενο, η οποία αλλάζει σε ευκολότερη ή δυσκολότερη ανάλογα με την τοποθέτηση του σώματος.",
      },
      {
        icon: "/images/pilates-jump.svg",
        text: "Training pilates hopping",
        details: "With jumping BOOTS",
      },
    ],
  },
  "stadio-fitness-club": {
    slug: "stadio-fitness-club",
    id: 2,
    latitude: 38.03908162341641,
    longitude: 23.6912210846564,
    shelter: "STADIO Fitness Club",
    image: "/images/partner-stadio-fitness-club-1.jpeg",
    link: "https://www.stadiogym.gr/",
    gmLink: "https://g.page/stadiogym",
    address: "25ης Μαρτίου 142, Πετρούπολη 132 31",
    phoneNumber: "+302105024206",
    description:
      "Γυμναστήριο που παρέχει ομαδικά μαθήματα Cycling, TRX, Tae Box, Μπάρες, Pilates, Yoga, Zumba. Επίσης υπάρχει μεγάλη αίθουσα οργάνων για μυϊκή τόνωση & σύσφιξη όπου κάλλιστα μπορείτε να κάνετε Personal Training!",
    socialProfiles: [
      {
        icon: socialYoutube,
        url: "https://www.youtube.com/channel/UChYcmKrtaowYW7hoF4QOEsA",
        name: "youtube",
      },
      {
        icon: socialInstagram,
        url: "https://www.instagram.com/stadiogym/?hl=en",
        name: "instagram",
      },
      {
        icon: socialFacebook,
        url: "https://www.facebook.com/stadiogym/",
        name: "facebook",
      },
      {
        icon: iosWorld,
        url: "https://www.stadiogym.gr/",
        name: "website",
      },
      {
        icon: androidMap,
        url: "https://g.page/stadiogym",
        name: "location",
      },
      {
        icon: iosTelephone,
        url: "tel:+302105024206",
        name: "phone number",
      },
      {
        icon: androidMail,
        url: "mailto:stadiogym@stadiogym.gr",
        name: "email",
      },
    ],
    courses: [
      {
        icon: "/images/rowing-0.svg",
        text: "Αίθουσα μυηκής τόνοσης",
        details:
          "Ένας χώρος με διαδρόμους, ποδήλατα stepper, τροχαλίες, μπάρες και ελεύθερα βάρη.",
      },
      {
        icon: "/images/pilates-1.svg",
        text: "Pilates",
        details:
          "Oι pilates είναι μια μέθοδος άσκησης που αποτελείται από ασκήσεις ευελιξίας, μυϊκή ενδυνάμωση και ασκήσεις αντοχής. Οι pilates δίνουν έμφαση στη σωστή ορθοστατική ευθυγράμμιση, τη δύναμη του κορμού και την ισορροπία των μυών.",
      },
      {
        icon: "/images/spinning-1.svg",
        text: "Spinning & Cycling",
        details:
          "Η εσωτερική ποδηλασία, που συχνά ονομάζεται και spinning, είναι μια μορφή άσκησης με μαθήματα που εστιάζουν στην αντοχή, τη δύναμη, τα διαστήματα και την υψηλή ένταση. Οι τάξεις περιλαμβάνουν τη χρήση ενός ειδικού ποδηλάτου σταθερής άσκησης με σταθμισμένο σφόνδυλο.",
      },
      {
        icon: "/images/tae-bo.svg",
        text: "Tae Bo",
        details:
          "Το tae bo είναι ένα είδος άθλησης που συνδυάζει στοιχεία του tae kwon do, του μποξ και άλλων ρουτίνων φυσικής κατάστασης. Συνδιάζετε με έντονη μουσική και και χορευτικές κινήσεις.",
      },
      {
        icon: "/images/yoga-9.svg",
        text: "Yoga",
        details:
          "Η yoga είναι μια φυσική δραστηριότητα που αποτελείται κυρίως από στάσεις και ακολουθίες flow. Μερικές φορές συνοδεύονται από αναπνευστικές ασκήσεις. Συχνά τα μαθήματα τελειώνει χαλαρώνοντας ή με διαλογισμό.",
      },
    ],
  },
  "stadio-ladies-fitness": {
    slug: "stadio-ladies-fitness",
    id: 3,
    latitude: 38.013595878269,
    longitude: 23.691424020897482,
    shelter: "STADIO Ladies Fitness & Pilates",
    image: "/images/partner-stadio-fitness-club-2.jpeg",
    link: "https://www.smilestudios.gr/",
    gmLink: "https://g.page/stadioladies",
    address: "Μεσολογγίου 54, Περιστέρι 121 34",
    phoneNumber: "+302105779100",
    description:
      "Γυμναστική μόνο για Γυναίκες. Παρέχει ποιοτικά πρόγραμμα κυκλικής άσκησης 30 λεπτών. Θα βρείτε ένα πλήρες εξοπλισμένο studio για Pilates. Με όργανα όπως Reformers, Cadilac, Wuda Chairs, Wall Units, Barrell. Οι γυμναστές μας είναι πολύ καλά εκπαιδευμένες από την βασική μας γυμνάστρια την Annemarie Huizinga, η οποία είναι Ολλανδικής υπηκοότητας.",
    socialProfiles: [
      {
        icon: socialInstagram,
        url: "https://www.instagram.com/stadiogymladies_pilates/",
        name: "instagram",
      },
      {
        icon: socialFacebook,
        url: "https://www.facebook.com/stadiogymladies/",
        name: "facebook",
      },
      {
        icon: iosWorld,
        url: "https://www.smilestudios.gr/",
        name: "website",
      },
      {
        icon: androidMap,
        url: "https://g.page/stadioladies",
        name: "location",
      },
      {
        icon: iosTelephone,
        url: "tel:+302105779100",
        name: "phone number",
      },
      {
        icon: androidMail,
        url: "mailto:info@smilestudios.gr",
        name: "email",
      },
    ],
    courses: [
      {
        icon: "/images/personal-training-0.svg",
        text: "Personal Training",
        details:
          "Η εσωτερική ποδηλασία, που συχνά ονομάζεται και spinning, είναι μια μορφή άσκησης με μαθήματα που εστιάζουν στην αντοχή, τη δύναμη, τα διαστήματα και την υψηλή ένταση. Οι τάξεις περιλαμβάνουν τη χρήση ενός ειδικού ποδηλάτου σταθερής άσκησης με σταθμισμένο σφόνδυλο.",
      },
      {
        icon: "/images/metabolic-training-1.svg",
        text: "Metabolic Training ΗΙΙΤ",
        details:
          "Είναι σύνθετες ασκήσεις με λίγη ανάπαυση. Δίνεται έμφαση στο να μεγιστοποιηθεί το κάψιμο των θερμίδων και να αυξηθεί ο μεταβολικός ρυθμός κατά τη διάρκεια και μετά την προπόνηση.",
      },
      {
        icon: "/images/pilates-ball-0.svg",
        text: "Pilates",
        details:
          "Oι pilates είναι μια μέθοδος άσκησης που αποτελείται από ασκήσεις ευελιξίας, μυϊκή ενδυνάμωση και ασκήσεις αντοχής. Οι pilates δίνουν έμφαση στη σωστή ορθοστατική ευθυγράμμιση, τη δύναμη του κορμού και την ισορροπία των μυών.",
      },
      {
        icon: "/images/mat-0.svg",
        text: "Pilates Μat",
        details:
          "Το Mat Pilates είναι μια πρακτική άσκησης pilates που μπορεί να γίνεται σε χαλάκι. Aυτό σημαίνει ότι δεν χρησιμοποιείται αναμορφωτής. Στο μάθημα, δουλεύονται στάσεις όπως σανίδες, πλευρικές σανίδες και πολλές ασκήσεις κορμού.",
      },
      {
        icon: "/images/roller-0.svg",
        text: "Μαθήματα για γοφοούς κοιλιακούς",
        details:
          "Οι ασκήσεις για τους κοιλιακούς και τους γλουτούς είναι εύκολες και μπορεί να τις εκτελέσει ακόμα και ένας αρχάριος. Οι ασκήσεις δίνουν ιδιαίτερη έμφαση στην περιοχή της κοιλιάς, των γλουτών και των ποδιών. Μέσα σε σύντομο διάστημα θα δείτε την εμφάνισή σας να αλλάζει θεαματικά.",
      },
      {
        icon: "/images/trampoline-0.svg",
        text: "Μαθήματα τραμπολίνο",
        details:
          "Τα μαθήματα τραμπολίνου είναι μια έντονη αερόβια προπόνηση, που σημαίνει ότι αυξάνει τον ρυθμό με τον οποίο η καρδιά μας αντλεί αίμα. Συνεπώς αυξάνει το οξυγόνο, γύρω από το σώμα μας. Αυτό ενισχύει τους μυς του καρδιαγγειακού μας συστήματος.",
      },
    ],
  },
  "stadio-pilates": {
    slug: "stadio-pilates",
    id: 4,
    latitude: 38.038240875631445,
    longitude: 23.691329442328204,
    shelter: "STADIO Pilates",
    image: "/images/partner-stadio-fitness-club-3.jpeg",
    link: "https://www.stadio-pilates.gr/",
    gmLink: "https://g.page/pilates-stadio",
    address: "Προκοπίου 7, Πετρούπολη 132 31",
    phoneNumber: "+302105024206",
    description:
      "Pilates Classic. Είναι η αυθεντική μέθοδος και πολύ αποτελεσματική όπως μας την δίδαξε ο εμπνευστής της Joseph. Ο τρόπος που εκτελείτε από εμάς είναι το αποτέλεσμα της 30χρονης εμπειρίας μας με πολλές διαφορετικές μεθόδους άσκησης, αλλά και σοβαρής μελέτης των τρόπων βελτίωσης της Φυσικής Κατάστασης του ανθρώπινου σώματος. Είναι η μέθοδος που πιστεύουμε και σας προτείνουμε για τα καλύτερα αποτελέσματα.",
    socialProfiles: [
      {
        icon: socialInstagram,
        url: "https://www.instagram.com/pilatesstadio",
        name: "instagram",
      },
      {
        icon: socialFacebook,
        url: "https://www.facebook.com/pilatesstadio/",
        name: "facebook",
      },
      {
        icon: iosWorld,
        url: "https://www.stadio-pilates.gr/",
        name: "website",
      },
      {
        icon: androidMap,
        url: "https://g.page/pilates-stadio",
        name: "location",
      },
      {
        icon: iosTelephone,
        url: "tel:+302105024206",
        name: "phone number",
      },
      {
        icon: androidMail,
        url: "mailto:stadiogym@stadiogym.gr",
        name: "email",
      },
    ],
    courses: [
      {
        icon: "/images/pilates-1.svg",
        text: "Pilates Classic",
        details:
          "Oι pilates είναι μια μέθοδος άσκησης που αποτελείται από ασκήσεις ευελιξίας, μυϊκή ενδυνάμωση και ασκήσεις αντοχής. Οι pilates δίνουν έμφαση στη σωστή ορθοστατική ευθυγράμμιση, τη δύναμη του κορμού και την ισορροπία των μυών.",
      },
    ],
  },
  //    2: {
  //      id: 2,
  //      latitude:  37.97829444719235,
  //      longitude:  23.730325435963476,
  //      shelter: "Domn Wellness Hall",
  //      image: "/images/partner-spiti-yoga.jpg",
  /// /         link: "",
  //      gmLink: "https://goo.gl/maps/TRLF7DH8pGjWoWhE8",
  //      address: "Μ. Μερκούρη 19, Χαλάνδρι 15238",
  //      phoneNumber: "+306983478886",
  //      description:
  //       "Το Domn Wellness Hall είναι ένας σύγχρονος χώρος σωματικής άσκησης. (Personal & mini group trainings, Pilates mat, Yoga & aerial classes.) \n",
  //         },
};
// https://www.flaticon.com/packs/sport-fitness-1
// https://www.flaticon.com/packs/gym-14
// https://www.flaticon.com/packs/fitness-44
