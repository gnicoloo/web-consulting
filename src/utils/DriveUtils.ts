/**
 * Trasforma un link di Google Drive in un URL utilizzabile nel tag <img>
 * @param driveInput - Può essere l'URL completo o solo l'ID del file
 */
export const getDriveImageUrl = (driveInput?: string): string => {
  if (!driveInput) return "";

  let id = driveInput;

  // Se è un URL completo, estraiamo l'ID usando una Regex
  if (driveInput.includes("drive.google.com")) {
    const match = driveInput.match(/\/d\/(.+?)\/(view|edit)?/);
    id = match ? match[1] : driveInput;
  }

  // Questo è il formato "Universal" per l'anteprima diretta
  return `https://drive.google.com/uc?export=view&id=${id}`;
};


// src/utils/driveUtils.ts

/**
 * Converte un ID di Google Drive in un URL visualizzabile dal browser
 */
export const getDriveImageId = (id: string): string => {
  if (!id) return "";
  // Ritorna il formato export=view che bypassa l'interfaccia di Drive
  return `https://drive.google.com/uc?export=view&id=${id}`;
};


export const fetchDriveCsv = async <T>(
  url: string, 
  mapper: (cells: string[]) => T
): Promise<T[]> => {
  try {
    const response = await fetch(url);
    const text = await response.text();
    
    // Dividiamo per righe e poi per colonne
    const rows = text.split(/\r?\n/).map(row => row.split(','));
    
    // Saltiamo l'intestazione (riga 0) e mappiamo il resto
    return rows.slice(1)
      .filter(row => row.length > 1 && row[0].trim() !== "") // Evitiamo righe vuote
      .map(cells => mapper(cells.map(c => c.replace(/"/g, '').trim()))); // Pulizia celle
  } catch (error) {
    console.error("Errore durante il fetch del CSV:", error);
    return [];
  }
};