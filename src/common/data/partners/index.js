/* interiro dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/
/* ------------------------------------ */
// Menu data
/* ------------------------------------ */
/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialDribbble } from "react-icons-kit/ionicons/socialDribbble";
import { socialGoogleplus } from "react-icons-kit/ionicons/socialGoogleplus";
import { socialSkype } from "react-icons-kit/ionicons/socialSkype";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { facebook } from "react-icons-kit/fa/facebook";
import { dribbble } from "react-icons-kit/fa/dribbble";
import { googlePlus } from "react-icons-kit/fa/googlePlus";
import { skype } from "react-icons-kit/fa/skype";
import { twitter } from "react-icons-kit/fa/twitter";
import slide1 from "../../../../public/images/partners-banner-1.jpeg";
import slide2 from "../../../../public/images/partners-banner-2.jpeg";
import slide3 from "../../../../public/images/partners-banner-3.jpeg";
import slide4 from "../../../../public/images/partners-banner-4.jpeg";
import slide5 from "../../../../public/images/partners-banner-5.jpeg";
import slide6 from "../../../../public/images/partners-banner-6.jpeg";
import slide7 from "../../../../public/images/partners-banner-7.jpeg";
import slide8 from "../../../../public/images/partners-banner-8.jpeg";

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import icon1 from "../../assets/image/partners/feature/svg-4.svg";
import icon2 from "../../assets/image/partners/feature/svg-3.svg";
import icon3 from "../../assets/image/partners/feature/svg-1.svg";
import icon4 from "../../assets/image/partners/feature/svg-2.svg";
import icon5 from "../../assets/image/partners/feature/svg-5.svg";

/* ------------------------------------ */
// About section data
/* ------------------------------------ */
import product from "../../assets/image/partners/win.jpeg";

/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */
import project1 from "../../assets/image/partners/projects/1.png";

/* ------------------------------------ */
// Team section data
/* ------------------------------------ */

import member1 from "../../assets/image/partners/team/member1.jpg";
import member2 from "../../assets/image/partners/team/member2.jpg";
import member3 from "../../assets/image/partners/team/member3.jpg";

/* ------------------------------------ */
// Gallery data
/* ------------------------------------ */
import galleryImg1 from "../../assets/image/partners/gallery/1.jpg";
import galleryImg2 from "../../assets/image/partners/gallery/2.jpg";
import galleryImg3 from "../../assets/image/partners/gallery/3.jpg";
import galleryImg4 from "../../assets/image/partners/gallery/4.jpg";
import galleryImg5 from "../../assets/image/partners/gallery/5.jpg";

/* ------------------------------------ */
// Footer data
/* ------------------------------------ */
import logo from "../../assets/image/partners/logo.svg";

export const menuData = [
  {
    label: "Feature",
    path: "#feature",
    offset: "80",
  },
  {
    label: "About",
    path: "#aboutUs",
    offset: "80",
  },
  {
    label: "Project",
    path: "#project",
    offset: "80",
  },
  {
    label: "Team",
    path: "#team",
    offset: "80",
  },
  {
    label: "News",
    path: "#news",
    offset: "40",
  },
  {
    label: "Testimonial",
    path: "#testimonial",
    offset: "80",
  },
];

export const bannerData = {
  title: "Συνεργαζόμαστε με σκοπό την επιτυχία!",
  lists: [
    {
      id: 0,
      text:
        // todo
        "Έχετε στούντιο γυμναστικής ή χώρο άθλησης; Γίνετε μέλος του δικτύου μας και αναδείξτε τον χώρο και τις υπηρεσίες σας. \nΕπεκτείνετε το πελατολόγιό σας χωρίς οικονομικές δεσμεύσεις και κάντε την επιχείρησή σας γνωστή σε μεγαλύτερο κοινό. Και όλα αυτά χωρίς προκαταβολές ή επιπλέον χρεώσεις.",
    },
  ],
  carousel: [
    {
      id: 1,
      thumbUrl: slide1,
      title: "Yoga",
    },
    {
      id: 5,
      thumbUrl: slide5,
      title: "Studios",
    },
    {
      id: 8,
      thumbUrl: slide8,
      title: "Γυμναστήρια",
    },
    {
      id: 2,
      thumbUrl: slide2,
      title: "Boxing",
    },
    {
      id: 3,
      thumbUrl: slide3,
      title: "Lift",
    },
    {
      id: 7,
      thumbUrl: slide7,
      title: "Yoga",
    },
    {
      id: 6,
      thumbUrl: slide6,
      title: "Crossfit",
    },
    {
      id: 4,
      thumbUrl: slide4,
      title: "Γυμναστήρια",
    },
  ],
};

export const featureData = {
  title: "OΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
  slogan: "Τα οφέλη σας ως συνεργάτες",
  features: [
    {
      id: 1,
      icon: icon1,
      title: "ΠΕΡΙΣΣΟΤΕΡΑ ΕΣΟΔΑ",
      description:
        "Αυξήστε τα έσοδά σας προσελκυοντας περισσότερους πελάτες μέσω του δικτύου μας και κάντε επαναλαμβανόμενες πωλήσεις. Σας πληρώνουμε για κάθε check-in!",
    },
    {
      id: 2,
      icon: icon2,
      title: "ΠΡΟΣΒΑΣΗ ΣΕ ΝΕΟΥΣ ΠΕΛΑΤΕΣ",
      description:
        "Με το Urbanfit, γίνετε γνωστοί σε νέες ομάδες πελατών και θα αυξήσετε τους συμμετέχοντες στα τμήματά σας.",
    },
    {
      id: 3,
      icon: icon3,
      title: "ΔΩΡΕΑΝ MARKETING",
      description:
        "Προωθούμε εσάς και τις αθλητικές σας εγκαταστάσεις μέσω του website μας και της συνεχής προώθησής περιεχομένου μέσω Social Media, Google και Νewsletter.",
    },
    {
      id: 4,
      icon: icon4,
      title: "ΚΑΝΕΝΑ ΚΟΣΤΟΣ ΕΓΓΡΑΦΗΣ",
      description:
        "Γίνετε συνεργάτης εντελώς δωρεάν - δεν υπάρχουν χρεώσεις εγγραφής. Λειτουργούμε με προμήθειες επί των κρατήσεων που σημαίνει ότι η επιτυχίας σας μετράει!",
    },
    {
      id: 5,
      icon: icon5,
      title: "ΕΝΙΣΧΥΣΗ ΤΗΣ ΕΙΚΟΝΑΣ ΣΑΣ",
      description:
        "Φωτογράφιση των εγκαταστάσεών σας. Δημιουργούμε μια προσαρμοσμένη καρτέλα με πλήρη περιγραφή της επιχείρησης, των υπηρεσιών και του προγράμματός σας.",
    },
  ],
};

export const aboutData = {
  thumbUrl: product,
  title: "Πως δουλεύει",
  title1:
    "1. Δηλώστε ενδιαφέρον συμπληρώνοντας την online φορμα (σε λιγότερο από 5 λεπτά)",
  text1:
    "Πείτε μας για την επιχείρησή σας και ένας απο τους συνεργάτες της Urbanfit θα επικοινωνήσει μαζί σας για τη δημιουργία της προσαρμοσμένης καρτέλας σας.",
  title2: "2. Προσθέστε τα διαθέσιμα μαθήματα και τα ραντεβού σας",
  text2:
    "Δηλώστε τα διαθέσιμα προγράμματα γυμναστικής και τις ώρες λειτουργίας τους που θα είναι διαθέσιμα στο δίκτυο μας. Αξιοποιήστε την εφαρμογή μας για να δείτε την απόδοσή και τα κέρδη σας.",
  title3: "3. Πληρωθείτε για κάθε check-in!",
  text3: "Υποδεχτείτε τους πελάτες και πληρωθείτε για την κάθε επίσκεψη.",
};

export const projectData = {
  title: "WORK PROCEDURE",
  slogan: "How We Do Our Projects",
  thumbUrl: project1,
  projects: [
    {
      id: 1,
      text:
        "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
      text2:
        "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
    },
    {
      id: 2,
      text:
        "Schedule a brainstorming session in a quiet place with few distractions. If you are working on a project alone, you can use group discussions with friends or colleagues to gain a new perspective on the topic. When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
      text2:
        "Completing a successful project requires a significant amount of time and work, which means evaluating your priorities and planning your course of action.",
    },
    {
      id: 3,
      text:
        "Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.",
      text2:
        "When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.",
    },
  ],
};

export const teamData = {
  title: "OUR TEAM MEMBER",
  slogan: "Meet Our Perfectionist",
  members: [
    {
      id: 1,
      avatar: member1,
      name: "Roman Ul Oman",
      designation: "Project Manager",
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: "#1",
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: "#1",
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: "#1",
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: "#1",
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: "#1",
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: "Jeny Doe",
      designation: "Lead Designer",
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: "#1",
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: "#1",
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: "#1",
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: "#1",
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: "#1",
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: "Naina Cooper",
      designation: "Marketing Manager",
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: "#1",
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: "#1",
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: "#1",
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: "#1",
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: "#1",
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News section data
/* ------------------------------------ */
export const newsData = [
  {
    id: 1,
    title: "Corporate design is a crucial part of your brand.",
    excerpt:
      "Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us",
    link_text: "Read",
    link_url: "#",
  },
  {
    id: 2,
    title: "Learn more about landscape plans, how to design them.",
    excerpt:
      "Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best",
    link_text: "Read",
    link_url: "#",
  },
  {
    id: 3,
    title: "Discover our design ideas, beautiful photos for interior design.",
    excerpt:
      "Discover our design ideas, beautiful photos and how-to projects to create partners Design. We try to reflect your personality on our design",
    link_text: "Read",
    link_url: "#",
  },
  {
    id: 4,
    title: "partners design is an art and we are trying to paint monalisa.",
    excerpt:
      "With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary",
    link_text: "Read",
    link_url: "#",
  },
];

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: "TESTIMONIAL",
  slogan: "What Our Clients Say",
  reviews: [
    {
      id: 0,
      name: "Parker Joe",
      designation: "Co-Founder & CEO",
      username: "@amader craft",
      account_url: "#",
      comment:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar:
        "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg",
    },
    {
      id: 1,
      name: "Britney havana",
      designation: "Co-Founder & CEO",
      username: "@Light’s craft",
      account_url: "#",
      comment:
        "Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 2,
      name: "June Spears",
      designation: "Co-Founder & CEO",
      username: "@Eagle’s craft",
      account_url: "#",
      comment:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Jessica Parker",
      designation: "Co-Founder & CEO",
      username: "@Earth’s craft",
      account_url: "#",
      comment:
        "Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work !",
      avatar:
        "https://pbs.twimg.com/profile_images/1049383024306081792/cQkGbpRO.jpg",
    },
    {
      id: 4,
      name: "Django Dsuja",
      designation: "Co-Founder & CEO",
      username: "@Moon’s craft",
      account_url: "#",
      comment:
        "Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)",
      avatar:
        "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
    },
  ],
};

export const galleryData = [
  {
    id: 1,
    thumbUrl: galleryImg1,
    name: "Eco friendly",
    link: "#",
  },
  {
    id: 2,
    thumbUrl: galleryImg2,
    name: "Living",
    link: "#",
  },
  {
    id: 3,
    thumbUrl: galleryImg3,
    name: "Corner",
    link: "#",
  },
  {
    id: 4,
    thumbUrl: galleryImg4,
    name: "Wall decor",
    link: "#",
  },
  {
    id: 5,
    thumbUrl: galleryImg5,
    name: "Restroom",
    link: "#",
  },
];

/* ------------------------------------ */
// Newsletter data
/* ------------------------------------ */
export const newsletterData = {
  title: "SUBSCRIBE NEWSLETTER",
  slogan: "Don’t Miss Out Any Offer",
  note:
    "Note: Please call us at 12pm to 8am. otherwise our customer supporter will not available to reach your call, but you can drop mail anytime.",
};

export const footerData = {
  logo,
  mail: "hello@redq.io",
  phone: "123-456-7890",
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: "facebook",
      link: "#",
    },
    {
      id: 2,
      icon: <Icon icon={dribbble} />,
      name: "dribbble",
      link: "#",
    },
    {
      id: 3,
      icon: <Icon icon={googlePlus} />,
      name: "googlePlus",
      link: "#",
    },
    {
      id: 4,
      icon: <Icon icon={skype} />,
      name: "skype",
      link: "#",
    },
    {
      id: 5,
      icon: <Icon icon={twitter} />,
      name: "twitter",
      link: "#",
    },
  ],
  menuWidgets: [
    {
      id: 1,
      title: "ABOUT US",
      menu: [
        {
          id: 1,
          text: "Support Center",
          link: "#",
        },
        {
          id: 2,
          text: "Customer Support",
          link: "#",
        },
        {
          id: 3,
          text: "About Us",
          link: "#",
        },
        {
          id: 4,
          text: "Copyright",
          link: "#",
        },
        {
          id: 5,
          text: "Popular Campaign",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      title: "OUR INFORMATION",
      menu: [
        {
          id: 1,
          text: "Return Policy",
          link: "#",
        },
        {
          id: 2,
          text: "Privacy Policy",
          link: "#",
        },
        {
          id: 3,
          text: "Terms & Conditions",
          link: "#",
        },
        {
          id: 4,
          text: "Site Map",
          link: "#",
        },
        {
          id: 5,
          text: "Store Hours",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      title: "MY ACCOUNT",
      menu: [
        {
          id: 1,
          text: "Press inquiries",
          link: "#",
        },
        {
          id: 2,
          text: "Social media directories",
          link: "#",
        },
        {
          id: 3,
          text: "Images & B-roll",
          link: "#",
        },
        {
          id: 4,
          text: "Permissions",
          link: "#",
        },
        {
          id: 5,
          text: "Speaker requests",
          link: "#",
        },
      ],
    },
    {
      id: 4,
      title: "POLICY",
      menu: [
        {
          id: 1,
          text: "Application security",
          link: "#",
        },
        {
          id: 2,
          text: "Software principles",
          link: "#",
        },
        {
          id: 3,
          text: "Unwanted software policy",
          link: "#",
        },
        {
          id: 4,
          text: "Responsible supply chain",
          link: "#",
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// social profile
/* ------------------------------------ */
export const socialProfile = [
  {
    id: 1,
    icon: "flaticon-facebook-logo",
    link: "#",
  },
  {
    id: 2,
    icon: "flaticon-twitter-logo-silhouette",
    link: "#",
  },
  {
    id: 3,
    icon: "flaticon-instagram",
    link: "#",
  },
  {
    id: 4,
    icon: "flaticon-tumblr-logo",
    link: "#",
  },
  {
    id: 5,
    icon: "flaticon-dribble-logo",
    link: "#",
  },
];

export const faq = {
  slogan: "Συχνες Ερωτησεις συνεργατων",
  title: "Μπορείτε να μας καλέσετε στο 6988221619",
  faqs: [
    {
      id: 9,
      question: "Πώς μπορώ να έρθω σε επαφή με το Urbanfit;",
      answer:
        "Απαντούμε στις ερωτήσεις σας από Δευτέρα έως Παρασκευή. Καλέστε μας στο 004917645732805 ή αλλιως μπορειτε να μας στείλετε ενα email στο urbanfitgr@gmail.com και θα σας απαντήσουμε άμεσα!",
    },
    {
      id: 1,
      question:
        "Με ποιον μπορώ να επικοινωνήσω εάν έχω ερωτήσεις σχετικά με τη συμφωνία συνεργασίας μου ή αν θέλω να προσαρμόσω τη σύμβασή μου;",
      answer:
        "Εάν έχετε απορίες σχετικά με τη συμφωνία συνεργασίας σας, απλώς επικοινωνήστε μαζί μας είτε μέσω τηλεφώνου στο 004917645732805 είτε μέσω email στο urbanfitgr@gmail.com και θα σας απαντήσουμε άμεσα! Στο μήνυμά σας, εξηγήστε το αίτημά σας όσο το δυνατόν ακριβέστερα, ώστε να μπορέσουμε να το διαβιβάσουμε στον αρμόδιο υπάλληλο το συντομότερο δυνατό. Το ερώτημά σας θα προωθηθεί στη συνέχεια στο αρμόδιο τμήμα, ώστε να λάβετε μια απάντηση το συντομότερο δυνατό.",
    },
    {
      id: 2,
      question: "Πώς λειτουργεί το check στην Urbanfit;",
      answer:
        "Η διαδικασία check in είναι εύκολη και πραγματοποιείται μέσω της εφαρμογής Urbanfit, την οποία κάθε μέλος έχει εγκαταστήσει εκ των προτέρων στο κινητό τους. Τα μέλη μας πηγαίνουν στον επιθυμητό συνεργάτη (γυμναστήριο, στούντιο yoga κτλπ), σαρώσουν τον κωδικό QR που βρήσκετε κόντα στην είσοδο του χώρου και μπορούν να ξεκινήσουν αμέσως. Εάν η κράτηση είναι απαραίτητη εκ των προτέρων (περιορισμένος αριθμός συμμετεχόντων για μαθήματα, ομαδικά αθλήματα ή επιθυμητό ατομικό ραντεβού), τα μέλη θα ενημερωθούν για αυτό κατά την προεγγραφή μέσω την εφαρμογής μας.",
    },
    {
      id: 3,
      question:
        "Πώς μπορώ να επιβεβαιώσω το check-in ενός μέλους του Urbanfit;",
      answer:
        "Αφού κάποιο μέλος σαρώσει τον κωδικό QR και επιλέξει τη σωστή δραστηριότητα, η οθόνη στην εφαρμογή γίνετε πράσινη. Αυτό επιβεβαιώνει ένα επιτυχημένο check-in. Στην εφαρμογή συνεργατών μπορείτε να παρακολουθείτε τα check-in σας σε πραγματικό χρόνο ή να ελέγχετε τη μηνιαία επισκόπηση των check-in. Επιπλέον, μπορείτε να βρείτε τα μηνιαία τιμολόγιά σας εδώ και να προσθέσετε χειροκίνητα check-in σε περίπτωση που υπάρχει κάποιο σφάλμα στην εφαρμογή.",
    },
    // {
    //   id: 4,
    //   question:
    //     "Τι συμβαίνει όταν το check-in ενός μέλους του Urbanfit δεν λειτουργεί;",
    //   answer:
    //     "https://uscpam.zendesk.com/hc/en-gb/articles/360020981654-What-happens-when-a-Urban-Sports-Club-member-s-check-in-doesn-t-work-",
    // },
    {
      id: 6,
      question:
        "Πώς πρέπει να συμπεριφέρομαι όταν ένα μέλος του Urbanfit μου δείχνει ένα μήνυμα σφάλματος κατά τη διαδικασία του check in;",
      answer:
        "Ένα μήνυμα σφάλματος σημαίνει ότι δεν επιτρέπεται η αποδοχή και η επίσκεψη δεν θα αντισταθμιστεί από το Urbanfit. Τα μηνύματα σφάλματος έχουν συνήθως έναν καλό λόγο (έληξε η ιδιότητα μέλους, εξαντλημένο όριο επισκέψεων κ.λπ.). \nΜερικές φορές ένα ίσως το μέλος να μην έχει καλο σήμα δικτύου, οπότε σε ορισμένες περιπτώσεις, εάν δεν υπάρχει προφανής λόγος για το μήνυμα σφάλματος, βοηθάει να εκτελέσετε τη διαδικασία check in για δεύτερη φορά. \nΕάν εξακολουθεί να μην είναι δυνατή η είσοδος στο check in, δεν επιτρέπεται η αποδοχή. Το Urbanfit δεν επιστρέφει αυτές τις επισκέψεις. Εάν το μέλος εξακολουθεί να θέλει να εκπαιδεύσει μαζί σας, μπορείτε να χρεώσετε την επίσκεψη σε αυτήν την περίπτωση απευθείας με το μέλος σχετικά με τις κανονικές σας συνθήκες. Το μέλος μπορεί στη συνέχεια να επικοινωνήσει με την υποστήριξη των μελών μας.",
    },
    {
      id: 7,
      question: "Πώς μπορώ να λάβω έναν νέο κωδικό QR;",
      answer:
        'Εάν ο κωδικός QR σας είναι φθαρμένος, σπασμένος ή δυσανάγνωστος, θα χαρούμε να σας στείλουμε έναν νέο. Επικοινωνήστε μαζί μας μέσω email στο urbanfitgr@gmail.com. \nΩς τίτλο παρακαλούμε να έχετε "Χρειάζομαι έναν νέο κωδικό QR". \n\nΕπίσης παρακαλούμε να εισαγάγετε τα ακόλουθα στοιχεία \n1. Ονομα τοποθεσίας, \n2. αριθμός και μορφή του επιθυμητού κωδικού QR (A5 stand-up ή A6 card, \n3. πλήρης διεύθυνση αποστολή. \n\nΘα σας στείλουμε έναν νέο κωδικό QR το συντομότερο δυνατό σε μορφή pdf. Στη συνέχεια θα μπορείτε να εκτυπώσετε τον κωδικό ωστε τα μέλη να μπορούν να τον σκανάρουν.',
    },
    // {
    //   id: 5,
    //   question:
    //     "Πώς λειτουργεί η τιμολόγηση μεταξύ των συνεργατών και του Urbanfit;",
    //   answer:
    //     "Το Urbanfit αντισταθμίζει το προηγούμενο συμφωνηθέν κόστος ενός checkin ανά μέλος του Urbanfit. Το τιμολόγιο για τα check-in για έναν ολόκληρο μήνα υποβάλλεται σε επεξεργασία το αργότερο έως τις 15 κάθε επόμενου μήνα. Μπορείτε να βρείτε ένα αντίγραφο του μηνιαίου τιμολογίου στο εργαλείο συνεργάτη." +
    //     "https://uscpam.zendesk.com/hc/en-gb/articles/360020981194-How-does-the-invoicing-work-between-the-partners-and-Urban-Sports-Club-",
    // },
    {
      id: 5,
      question:
        "Τι συμβαίνει όταν ένα μέλος του Urbanfit δεν εμφανίζεται για επιβεβαιωμένο ραντεβού;",
      answer:
        "Όταν ένα μέλος του Urbanfit δεν μπορεί να παρευρεθεί σε ένα συγκεκριμένο ραντεβού, έχει τη δυνατότητα να ακυρώσει το εν λόγω ραντεβού εντός του παραχωρημένου παραθύρου ακύρωσης που έχει ορίσει ο συνεργάτης. Σε περίπτωση καθυστερημένης ακύρωσης, η κράτηση θα εξακολουθεί να αφαιρείται από τα όρια επισκέψεων του μέλους και το στούντιο θα λάβει κανόνικα τη πληρωμή για αυτό το check-in. Σε περίπτωση πολλαπλών παραβιάσεων, θα χρεώσουμε στο μέλος πρόστιμο.",
    },
  ],
  link: "",
};
