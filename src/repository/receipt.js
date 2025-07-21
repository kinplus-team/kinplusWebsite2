import jsPDF from "jspdf";
import KinplusLogoPDF from "../assets/logoBase64.js";




// Helper function to generate PDF receipt for users that paid online
export const generatePDFReceipt = ({
  fullName,
  email,
  phoneNumber,
  availability,
  track,
  amount,
  trackPackage,
}) => {
  const doc = new jsPDF();
  const logoBase64 = KinplusLogoPDF;
  const primaryColor = "#3A85FF";
  const borderColor = "#cccccc";
  const pageWidth = doc.internal.pageSize.getWidth();

  const packageName = trackPackage.split(" ")[0]; // Extract "Premium" from "Premium (₦250,000)"

  // Background
  doc.setFillColor(245, 245, 245);
  doc.rect(10, 10, 190, 130, "F");

  // Header Logo (slightly lowered)
  doc.addImage(logoBase64, "PNG", 160, 18, 20, 10); // y: 18 positions it better

  // Company Name (vertically centered with logo)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(primaryColor);
  doc.text("Kinplus Technologies Limited", 15, 26); // y: 26 aligns well with logo

  // Title - Centered with better spacing below
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text("Training Payment Receipt", pageWidth / 2, 45, {
    align: "center",
  });

  // New Y-start for next block with more space below title
  let yStart = 65;

  // Address block (left-aligned)
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Kinplus Technologies", 15, yStart);
  doc.text("2nd Floor, Christore Building", 15, yStart + 6);
  doc.text("Opp. Crunchies Restaurant", 15, yStart + 12);
  doc.text("Similoluwa, Ado-Ekiti", 15, yStart + 18);
  doc.text("07075199782, 08116400858", 15, yStart + 24);

  // Payer Details (aligned horizontally with address block)
  const rightStartY = yStart;
  const now = new Date();
  doc.text(`Payment Date: ${now.toLocaleDateString()}`, 115, rightStartY);
  doc.text(`Payer: ${fullName}`, 115, rightStartY + 6);
  doc.text(`Email: ${email}`, 115, rightStartY + 12);
  doc.text(`Phone: ${phoneNumber}`, 115, rightStartY + 18);
  doc.text(`Training Type: ${availability}`, 115, rightStartY + 24);

  // Table Header
  doc.setDrawColor(borderColor);
  doc.setFillColor(220, 220, 220);
  doc.setFont("helvetica", "bold");
  doc.rect(15, 100, 180, 10, "FD");
  doc.text("Training Track", 20, 107);
  doc.text("Package", 100, 107);
  doc.text("Amount (NGN)", 160, 107);

  // Table Content
  doc.setFont("helvetica", "normal");
  doc.setFillColor(255, 255, 255);
  doc.rect(15, 110, 180, 10, "FD");
  doc.text(track, 20, 117);
  doc.text(packageName, 100, 117);
  doc.text(`${amount.toLocaleString()}`, 160, 117);

  // Save
  setTimeout(() => {
    doc.save("kinplus_training_payment_receipt.pdf");
  }, 0);
};



// Helper function to generate image receipt for users that paid online
export const generateImageReceipt = ({
  fullName,
  email,
  phoneNumber,
  availability,
  track,
  amount,
  trackPackage,
}) => {
  const canvas = document.createElement("canvas");
  canvas.width = 700; // Reduced the width here to match a typical A4 ratio
  canvas.height = 550; // Increased the height here slightly for more vertical space
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const logo = new Image();
  logo.crossOrigin = "anonymous";
  logo.src = KinplusLogoPDF;

  const safePackageName = (trackPackage || "").split(" ")[0];

  // Trying to debug if the trackPackage gets to the generateImageReceipt function
  console.log("Image Receipt Data:", {
    fullName,
    email,
    phoneNumber,
    availability,
    track,
    amount,
    trackPackage,
  });

  logo.onload = () => {
    // Header: Company name and logo
    const logoWidth = 60;
    const logoHeight = 30;
    const logoX = canvas.width - logoWidth - 30;
    const logoY = 30;
    ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

    ctx.fillStyle = "#3A85FF";
    ctx.font = "bold 24px Helvetica";
    ctx.textAlign = "left";
    ctx.fillText(
      "Kinplus Technologies Limited",
      30,
      logoY + logoHeight / 2 + 8
    );

    // Title
    ctx.fillStyle = "#000";
    ctx.font = "bold 20px Helvetica";
    ctx.textAlign = "center";
    ctx.fillText("Training Payment Receipt", canvas.width / 2, 110);

    ctx.textAlign = "left"; // Reset alignment for body

    // Address block (left)
    let yStart = 150;
    ctx.font = "14px Arial";
    ctx.fillText("Kinplus Technologies", 30, yStart);
    ctx.fillText("2nd Floor, Christore Building", 30, yStart + 20);
    ctx.fillText("Opp. Crunchies Restaurant", 30, yStart + 40);
    ctx.fillText("Similoluwa, Ado-Ekiti", 30, yStart + 60);
    ctx.fillText("07075199782, 08116400858", 30, yStart + 80);

    // Payer details (right)
    const rightX = 420;
    const now = new Date();
    ctx.fillText(`Payment Date: ${now.toLocaleDateString()}`, rightX, yStart);
    ctx.fillText(`Payer: ${fullName}`, rightX, yStart + 20);
    ctx.fillText(`Email: ${email}`, rightX, yStart + 40);
    ctx.fillText(`Phone: ${phoneNumber}`, rightX, yStart + 60);
    ctx.fillText(`Training Type: ${availability}`, rightX, yStart + 80);

    // Table Header
    let tableY = yStart + 100;
    ctx.fillStyle = "#dcdcdc";
    ctx.fillRect(30, tableY, 640, 30); // match new width

    ctx.fillStyle = "#000";
    ctx.font = "bold 14px Arial";
    ctx.fillText("Training Track", 40, tableY + 20);
    ctx.fillText("Package", 300, tableY + 20);
    ctx.fillText("Amount (NGN)", 540, tableY + 20);

    // Table Content
    ctx.fillStyle = "#fff";
    ctx.fillRect(30, tableY + 30, 640, 30);

    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.fillText(track, 40, tableY + 50);
    ctx.fillText(safePackageName, 300, tableY + 50);
    ctx.fillText(`${amount.toLocaleString()}`, 540, tableY + 50);

    // Export to PNG
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "kinplus_training_payment_receipt.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  logo.onerror = () => {
    alert("Failed to load the logo. Please try again.");
  };
};