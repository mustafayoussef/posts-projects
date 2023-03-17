import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(snapshotArr: any, searchValue: string) {
    if (!snapshotArr) {
      return [];
    }
    if (!searchValue) {
      return snapshotArr;
    }
    if (snapshotArr && searchValue) {
      return snapshotArr.filter((snapshot: any) => {
        return snapshot.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
  }
}
