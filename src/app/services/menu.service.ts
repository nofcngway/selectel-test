import { Injectable, signal, computed } from '@angular/core';
import { MenuSection, MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _sections = signal<MenuSection[]>([
    {
      id: 1,
      name: 'Тип 1',
      items: [
        { id: 1, name: 'Item 1', value: 20, checked: false },
        { id: 2, name: 'Item 2', value: 30, checked: false },
        { id: 3, name: 'Item 3', value: 40, checked: false },
        { id: 4, name: 'Item 4', value: 50, checked: false },
      ]
    },
    {
      id: 2,
      name: 'Тип 2',
      items: [
        { id: 5, name: 'Option A', value: 15, checked: false },
        { id: 6, name: 'Option B', value: 25, checked: false },
        { id: 7, name: 'Option C', value: 35, checked: false },
      ]
    },
    {
      id: 3,
      name: 'Тип 3',
      items: [
        { id: 8, name: 'Alpha', value: 100, checked: false },
        { id: 9, name: 'Beta', value: 200, checked: false },
        { id: 10, name: 'Gamma', value: 300, checked: false },
        { id: 11, name: 'Delta', value: 400, checked: false },
      ]
    }
  ]);

  private _activeSection = signal<MenuSection | null>(null);

  sections = this._sections.asReadonly();
  activeSection = this._activeSection.asReadonly();

  selectedCount = computed(() => {
    const section = this._activeSection();
    if (!section) return 0;
    return section.items.filter(i => i.checked).length;
  });

  totalValue = computed(() => {
    const section = this._activeSection();
    if (!section) return 0;
    return section.items.filter(i => i.checked).reduce((sum, i) => sum + i.value, 0);
  });

  setActiveSection(section: MenuSection) {
    this._activeSection.set(section);
  }

  toggleItem(itemId: number) {
    this._sections.update(sections =>
      sections.map(section => ({
        ...section,
        items: section.items.map(item =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      }))
    );

    const active = this._activeSection();
    if (active) {
      const updated = this._sections().find(s => s.id === active.id);
      if (updated) this._activeSection.set(updated);
    }
  }
}