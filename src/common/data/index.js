/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
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
