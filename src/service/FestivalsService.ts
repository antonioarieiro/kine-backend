import { Injectable, OnModuleInit } from '@nestjs/common';
import { api } from '../utils/ApiConfig';

const data = [];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let curentData: any = 0;

@Injectable()
export class FestivalService implements OnModuleInit {
  onModuleInit() {
    console.log(`Initialization FestivalModule...`);
    this.getFestivalsInit();
  }

  async getFestivalsInit() {
    (await api()).query.festivalModule
      .nextFestivalId()
      .then(async (response) => {
        curentData = response.toHuman();
        console.log(curentData);

        (await api()).query.festivalModule.festivals
          .entries()
          .then((response) => {
            response.splice(0, 15).map((value) => {
              if (value[1].toHuman()['status'] !== 'Inactive') {
                data.push(value[1].toHuman());
              }
            });
          });
      });
    return data;
  }

  async getFestivals() {
    (await api()).query.festivalModule
      .nextFestivalId()
      .then((response: any) => {
        if (parseInt(response.toHuman()) > parseInt(curentData)) {
          console.log('precisa mudar');
        }
      });
    return data;
  }
}
