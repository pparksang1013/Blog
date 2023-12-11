export function isKoreanOrEnglish(title: string) {
    let firstWord = title.charAt(0);

    if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(firstWord)) {
        return "KR";
    } else if (/[a-zA-Z]/.test(firstWord)) {
        return "EN";
    }
}
