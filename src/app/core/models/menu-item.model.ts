export class CustomMenuItem {
    constructor() {
        this.IsChildVisible = false;
    }
    Label?: string;
    Icon?: string;
    RouterLink?: string;
    Childs?: CustomMenuItem[];
    IsChildVisible: boolean;
}
