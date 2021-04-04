/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import bannerSlide0 from "../../pages/images/banner-0.jpeg";
import bannerSlide1 from "../../pages/images/banner-1.jpeg";
import bannerSlide2 from "../../pages/images/banner-2.jpeg";
import bannerSlide3 from "../../pages/images/banner-3.jpeg";
import bannerSlide4 from "../../pages/images/banner-4.jpeg";
import bannerSlide5 from "../../pages/images/banner-5.jpeg";
import bannerSlide6 from "../../pages/images/banner-6.jpeg";
import bannerSlide7 from "../../pages/images/banner-7.jpeg";
import bannerSlide8 from "../../pages/images/banner-8.jpeg";
import bannerSlide9 from "../../pages/images/banner-9.jpeg";

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
import thumbImage1 from "../../pages/images/section-partner.jpeg";

/* ------------------------------------ */
// BranchRight section data
/* ------------------------------------ */
import thumbImage2 from "../../pages/images/section-corporate.jpeg";

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */
import happyKids from "../assets/image/charity/section-corporate.jpeg";

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */
import thumb1 from "../assets/image/charity/blog/thumb-1.png";
import thumb2 from "../assets/image/charity/blog/thumb-2.png";

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */
import windows from "../assets/image/charity/clients/1.png";
import airbnb from "../assets/image/charity/clients/2.png";
import adidas from "../assets/image/charity/clients/3.png";
import ibm from "../assets/image/charity/clients/4.png";
import amazon from "../assets/image/charity/clients/5.png";
import google from "../assets/image/charity/clients/6.png";

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
    label: "Γίνε συναίτερος",
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
  },
  {
    id: 4,
    thumbUrl: bannerSlide1,
  },
  {
    id: 1,
    thumbUrl: bannerSlide5,
  },
  {
    id: 2,
    thumbUrl: bannerSlide4,
  },
  {
    id: 3,
    thumbUrl: bannerSlide2,
  },
  {
    id: 5,
    thumbUrl: bannerSlide3,
  },
  {
    id: 6,
    thumbUrl: bannerSlide6,
  },
  {
    id: 7,
    thumbUrl: bannerSlide7,
  },
  {
    id: 8,
    thumbUrl: bannerSlide8,
  },
  {
    id: 9,
    thumbUrl: bannerSlide9,
  },
];

export const featureData = {
  title: "Πρόσβαση σε κάθε τάξη, και στούντιο - χωρίς περιορισμούς",
  slogan:
    "Απολαύστε εκατοντάδες αθλητικές δραστηριότητες καθώς και ζωντανά μαθήματα με την πιο ευέλικτη αθλητική προσφορά στην Ελλάδα!",
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: "Αθλητικές δραστηριότητες",
      description:
        "Απολαύστε γιόγκα και γυμναστήριο με τους φίλους και τους αγαπημένους σας εκπαιδευτές.",
    },
    {
      id: 2,
      icon: featureIcon2,
      title: "Επίσκεψεις χωρίς όρια",
      description:
        "Σας αρέσει ένα στούντιο; Επισκεφθείτε όσο συχνά θέλετε χωρίς περιορισμούς.",
    },
    {
      id: 3,
      icon: featureIcon3,
      title: "Υποστηρίξτε τοπικά στούντιο",
      description:
        "Παραμένοντας ενεργοί, υποστηρίζετε τα τοπικά αθλητικά στούντιο και τους εκπαιδευτές σας.",
    },
    {
      id: 4,
      icon: featureIcon4,
      title: "Σταματήστε ανά πάσα στιγμή",
      description:
        "Παύση ή ακύρωση μηνιαίως. Πλήρης ευελιξία και σύντομες συμβάσεις.",
    },
    {
      id: 5,
      icon: featureIcon5,
      title: "Χωρίς επιπλέον βήματα",
      description:
        "Χρησιμοποιήστε μία εφαρμογή για να κλείσετε τα πάντα, χωρίς πρόσθετες εγγραφές, συνδέσεις ή βήματα check in.",
    },
    {
      id: 6,
      icon: featureIcon6,
      title: "Χωρίς συμβάσεις ή δεσμεύσεις",
      description:
        "Οι συνδρομές είναι από μήνα σε μήνα και κάνουμε εύκολη την αλλαγή του σχεδίου σας.",
    },
  ],
};

export const workData = {
  title: "Πως δουλεύει",
  features: [
    {
      id: 1,
      icon: search,
      title: "Ανακάληψε",
      description:
        "Από τη γιόγκα στο padel, από το bouldering έως την high-intensity training, περιηγηθείτε στις αγαπημένες σας δραστηριότητες ή δοκιμάστε κάτι νέο!",
    },
    {
      id: 2,
      icon: booking,
      title: "Κάνε κράτηση",
      description:
        "Με χιλιάδες δραστηριότητες από εκατοντάδες χώρους συνεργατών, είστε βέβαιοι ότι θα βρείτε την τέλεια δραστηριότητα για εσάς.",
    },
    {
      id: 3,
      icon: checkIn,
      title: "Check in",
      description:
        "Ήρθε η ώρα να ξεκινήσετε! Δραστηριότητες εσωτερικού χώρου ή υπαίθρια μαθήματα; Ελέγξτε με την εφαρμογή σας ή μέσω του ιστότοπου.",
    },
  ],
};
/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: "OUR FIRST MILESTONE",
  amount: "$4M",
  text: "RAISED TO DATE",
  counterItems: [
    {
      id: 1,
      amount: "154",
      title: "Successful Project",
    },
    {
      id: 2,
      amount: "1534",
      title: "People Impacted",
    },
    {
      id: 3,
      amount: "71",
      title: "Supported Country",
    },
    {
      id: 4,
      amount: "15k",
      title: "Money Donated",
    },
  ],
};

export const branchData = {
  id: 1,
  image: thumbImage1,
  slogan: "ΣΥΝΕΡΓΑΖΟΜΑΣΤΕ ΓΙΑ ΤΗΝ ΕΠΙΤΥΧΙΑ",
  textTitle: `Γίνε  <strong>συνεργάτης</strong>!`,
  description:
    "Όταν συνεργαζόμαστε με χώρους, κερδίζουν και οι δύο πλευρές. Σας ενδιαφέρει να γίνετε ένας από τους συνεργάτες μας;",
  lists: [
    {
      id: 1,
      text: "1. Επιπρόσθετο εισόδημα",
    },
    {
      id: 2,
      text: "2. Νέοι πελάτες",
    },
    {
      id: 3,
      text: "3. Δωρεάν marketing",
    },
    {
      id: 4,
      text: "4. Χωρίς κόστος",
    },
    {
      id: 5,
      text: "5. Ελκιστικά οφέλοι",
    },
  ],
  linkUrl: "/partners",
  linkText: "Μάθετε περισσότερα.",
};

export const branchRightData = {
  id: 1,
  image: thumbImage2,
  slogan: "ΠΡΟΓΡΑΜΜΑΤΑ ΕΤΑΙΡΙΚΗΣ ΕΥΕΞΙΑΣ",
  textTitle: `Χαρήστε στους υπαλλήλους σας φυσική <strong>κατάσταση</strong> και <strong>ευεξία</strong>!`,
  description:
    "Τώρα είναι η τέλεια στιγμή για να επενδύσετε στους υπαλλήλους σας. Χαρήστε στους υπαλλήλους σας φυσική κατάσταση και ευεξία!",
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
  linkUrl: "/packages",
  linkText: "Μάθετε περισσότερα.",
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

export const posts = [
  {
    id: 1,
    title: "Uganda Embraces South Sudanese Refugees, For Now",
    excerpt:
      "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
    thumbUrl: thumb1,
    btnText: "Learn More ",
    btnUrl: "#1",
  },
  {
    id: 2,
    title: "BRITs Week 2019 together with O2 is here",
    excerpt:
      "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
    thumbUrl: thumb2,
    btnText: "Learn More ",
    btnUrl: "#1",
  },
];

export const clients = [
  {
    id: 1,
    logo: windows,
    name: "windows",
    link: "#1",
  },
  {
    id: 2,
    logo: airbnb,
    name: "airbnb",
    link: "#2",
  },
  {
    id: 3,
    logo: adidas,
    name: "adidas",
    link: "#3",
  },
  {
    id: 4,
    logo: ibm,
    name: "ibm",
    link: "#4",
  },
  {
    id: 5,
    logo: amazon,
    name: "amazon",
    link: "#5",
  },
  {
    id: 6,
    logo: google,
    name: "google",
    link: "#6",
  },
];

/* ------------------------------------ */
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
        label: "Επιχειρησιακά πακέτα",
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
    link: "http://linkedin.com/in/urbanfit-gr-b7899020a",
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: "facebook",
    link: "https://www.facebook.com/urbanfitgr.urbanfitgr",
  },
  {
    id: 3,
    icon: <Icon icon={instagram} />,
    name: "instagram",
    link: "https://instagram.com/urbanfit.gr",
  },
];

export const faq = {
  slogan: "Συχνες Ερωτησεις Μελων",
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
        "Μπορείτε να βρείτε τη γκάμα αθλητικών δραστηριοτήτων απευθείας στην εφαρμογή μας. Όταν φτάσετε σε ένα χώρο, μπορείτε να κάνετε check in σαρώνοντας τον κωδικό QR Urbanfit που εμφανίζεται κοντά στην είσοδο. Ορισμένες δραστηριότητες ενδέχεται να απαιτούν κράτηση για προχωρημένους.",
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
      question: "Τι χρειάζομαι στο προφίλ μου για να μπορώ να κάνω check in;",
      answer:
        "https://urbansports.zendesk.com/hc/en-us/articles/115003466389-What-do-I-need-on-my-profile-so-that-I-can-check-in-",
    },
    {
      id: 6,
      question: "Πώς μπορώ να δοκιμάσω τη συνδρομή μόνο για ένα μήνα;",
      answer:
        "https://urbansports.zendesk.com/hc/en-us/articles/115005506545-How-can-I-test-the-membership-for-one-month-only-",
    },
    {
      id: 7,
      question: "Πρέπει να κάνω κράτηση πριν μπορώ να κάνω check in;",
      answer:
        "https://urbansports.zendesk.com/hc/en-us/articles/115003465809-Do-I-need-to-make-a-booking-before-I-can-check-in-",
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
        "https://urbansports.zendesk.com/hc/en-us/articles/115003496645-I-made-a-binding-booking-but-I-am-unable-to-keep-it-what-should-I-do-",
    },
  ],
  link: "",
};
