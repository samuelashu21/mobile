import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export async function exportChatPDF(
  messages: any[]
) {
  const html = `
    <html>
      <body>
        <h1>Medical AI Chat Export</h1>

        ${messages
          .map(
            (m) => `
            <p>
              <b>${m.role}</b><br/>
              ${m.content}
            </p>
          `
          )
          .join("")}
      </body>
    </html>
  `;

  const file =
    await Print.printToFileAsync({
      html,
    });

  await Sharing.shareAsync(
    file.uri
  );
}