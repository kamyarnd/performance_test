import { PageFlip } from "page-flip";

document.addEventListener("DOMContentLoaded", () => {
    const book = document.getElementById("book");

    const pageFlip = new PageFlip(book, {
        width: 600,          // عرض پایه
        height: 850,         // ارتفاع پایه
        size: "stretch",     // ریسپانسیو
        minWidth: 315,
        maxWidth: 2000,
        minHeight: 400,
        maxHeight: 2533,
        direction: "rtl",    // ✅ ورق خوردن از چپ برای فارسی
        flippingTime: 800,
        showCover: true,
        drawShadow: true,
        useMouseEvents: true,
    });

    // بارگذاری صفحات از HTML
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
});
