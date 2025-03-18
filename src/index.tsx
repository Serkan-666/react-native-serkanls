import Serkanls from './NativeSerkanls';

export function multiply(a: number, b: number): number {
  return Serkanls.multiply(a, b);
}
export const nfc_start = async (nfcManager: any, NfcTech: any) => {
  try {
    await nfcManager.start();
    await nfcManager.requestTechnology(NfcTech.IsoDep, {
      alertMessage: 'Lütfen kimlik kartınızı cihaza yaklaştırın',
    });

    return 'NFC Başlatıldı.';
  } catch (error) {
    console.error(error);
    return error;
  }
};
