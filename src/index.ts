// Фільтрація масиву

// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
  return array.filter((element) => condition(element));
}





// Узагальнений стек

// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.



class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }

  clear(): void {
    this.elements = [];
  }
}



// Узагальнений словник

// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has.
//  Обмежте ключі тільки валідними типами для об'єкта

class Dictionary<T> {
  private items: { [key: string]: T } = {};

  set<K extends string>(key: K, value: T): void {
    this.items[key] = value;
  }

  get<K extends string>(key: K): T | undefined {
    return this.items[key];
  }

  has<K extends string>(key: K): boolean {
    return key in this.items;
  }
}


// class Dictionary<T extends string | number | symbol, U> {
//   private items: Record<T, U> = {} as Record<T, U>;

//   set(key: T, value: U): void {
//     this.items[key] = value;
//   }

//   get(key: T): U | undefined {
//     return this.items[key];
//   }

//   has(key: T): boolean {
//     return key in this.items;
//   }
// }


// class Dictionary<T , U> {
//   private items: { [key: string]: U } = {};

//   set(key: T, value: U): void {
//     this.items[String(key)] = value;
//   }

//   get(key: T): U | undefined {
//     return this.items[String(key)];
//   }

//   has(key: T): boolean {
//     return String(key) in this.items;
//   }
// }



