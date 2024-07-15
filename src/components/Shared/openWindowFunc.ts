export function openCenteredWindow(url: string, title: string, width: number, height: number): void {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const left = (screenWidth - width) / 2;
    const top = (screenHeight - height) / 2;
    const options = `width=${width},height=${height},top=${top},left=${left}`;
    const newWindow = window.open(url, title, options);

    if (newWindow) {
        newWindow.addEventListener('resize', () => {
            newWindow.resizeTo(width, height);
            newWindow.moveTo(left, top);
        });
    }
}