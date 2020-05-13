import { Component } from '@angular/core';
import { ModalService } from './service/modal.service';
import { trigger, state, style, animate, transition, query,stagger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(20%)', opacity: 0, height: 0 }),
        animate('600ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1,height: '*' }))
      ]),
      
      transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1, height: '*' }),
        animate('0ms ease-in', style({ transform: 'translateY(20%)', 'opacity': 0,height: '0' }))
      ])
    ]),
    trigger('listView', [
      state('in', style({
        transform: 'translateY(0%)', opacity: 1, height: '20px'
      })),
      state('out', style({
        transform: 'translateY(0%)', opacity: 1, height: '*' 
      })),
      transition('in => out', animate('800ms ease-in')),
      transition('out => in', animate('800ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'my-cards';
  cardList:any = [];
  selectedCartData:any;
  selectedDataName:any;
  helpMenuOpen: string;
    private bodyText: string;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
      this.helpMenuOpen = 'out';
        this.bodyText = 'This text can be updated in modal 1';
        this.cardList = [
          {
            id:1,
            name:'ABC',
            department:'SCIENTISTS HAVE LEARNED TO SUPPLEMENT THE SENSE OF SIGHT IN NUMEROUS WAYS. In front of the tiny pupil of the eye they put, on Mount Palomar, a great monocle 200 inches in diameter, and with it see 2000 times farther into the depths of space. Or they look through a small pair of lenses arranged as a microscope into a drop of water or blood, and magnify by as much as 2000 diameters the living creatures there, many of which are among man’s most dangerous enemies. Or, if we want to see distant happenings on earth, they use some of the previously wasted electromagnetic waves to carry television images which they re-create as light by whipping tiny crystals on a screen with electrons in a vacuum. Or they can bring happenings of long ago and far away as colored motion pictures, by arranging silver atoms and color-absorbing molecules to force light waves into the patterns of original reality. Or if we want to see into the center of a steel casting or the chest of an injured child, they send the information on a beam of penetrating short-wave X rays, and then convert it back into images we can see on a screen or photograph. THUS ALMOST EVERY TYPE OF ELECTROMAGNETIC RADIATION YET DISCOVERED HAS BEEN USED TO EXTEND OUR SENSE OF SIGHT IN SOME WAY.',
            color:'red'
          },
          {
            id:2,
            name:'PQR',
            department:'Technical Design',
            color:'green'
          },
          {
            id:3,
            name:'XYZ',
            department:'Technical Design',
            color:'blue'
          },
          {
            id:4,
            name:'MNO',
            department:'SCIENTISTS HAVE LEARNED TO SUPPLEMENT THE SENSE OF SIGHT IN NUMEROUS WAYS. In front of the tiny pupil of the eye they put, on Mount Palomar, a great monocle 200 inches in diameter, and with it see 2000 times farther into the depths of space. Or they look through a small pair of lenses arranged as a microscope into a drop of water or blood, and magnify by as much as 2000 diameters the living creatures there, many of which are among man’s most dangerous enemies. Or, if we want to see distant happenings on earth, they use some of the previously wasted electromagnetic waves to carry television images which they re-create as light by whipping tiny crystals on a screen with electrons in a vacuum. Or they can bring happenings of long ago and far away as colored motion pictures, by arranging silver atoms and color-absorbing molecules to force light waves into the patterns of original reality. Or if we want to see into the center of a steel casting or the chest of an injured child, they send the information on a beam of penetrating short-wave X rays, and then convert it back into images we can see on a screen or photograph. THUS ALMOST EVERY TYPE OF ELECTROMAGNETIC RADIATION YET DISCOVERED HAS BEEN USED TO EXTEND OUR SENSE OF SIGHT IN SOME WAY.',
            color:'pink'
          },
          {
            id:5,
            name:'STU',
            department:'Technical Design',
            color:'#E52B50'
          },
          {
            id:6,
            name:'DGH',
            department:'SCIENTISTS HAVE LEARNED TO SUPPLEMENT THE SENSE OF SIGHT IN NUMEROUS WAYS. In front of the tiny pupil of the eye they put, on Mount Palomar, a great monocle 200 inches in diameter, and with it see 2000 times farther into the depths of space. Or they look through a small pair of lenses arranged as a microscope into a drop of water or blood, and magnify by as much as 2000 diameters the living creatures there, many of which are among man’s most dangerous enemies. Or, if we want to see distant happenings on earth, they use some of the previously wasted electromagnetic waves to carry television images which they re-create as light by whipping tiny crystals on a screen with electrons in a vacuum. Or they can bring happenings of long ago and far away as colored motion pictures, by arranging silver atoms and color-absorbing molecules to force light waves into the patterns of original reality. Or if we want to see into the center of a steel casting or the chest of an injured child, they send the information on a beam of penetrating short-wave X rays, and then convert it back into images we can see on a screen or photograph. THUS ALMOST EVERY TYPE OF ELECTROMAGNETIC RADIATION YET DISCOVERED HAS BEEN USED TO EXTEND OUR SENSE OF SIGHT IN SOME WAY.',
            color:'yellow'
          },
        ];
        this.loadMargin()
    }

    openModal(id: string) {
      this.loadMargin()
        this.modalService.open(id);
    }

    closeModal(id: string) {
      this.selectedCartData  = ''
      this.selectedDataName = ''
        this.modalService.close(id);
    }

    selectedData(data){
      this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
      this.selectedCartData = ''
      if(data){
        this.selectedDataName = data.name
        console.log("AppComponent -> selectedData -> data", data)
        // const documentElement = document.documentElement;
        // documentElement.style.setProperty(`--${'cardMargin'}`, `${'-380px'}`);
        this.selectedCartData = data
      }else{
        this.closeCurrentSelectedCart()
      }
     
    }

    closeCurrentSelectedCart(){
      this.selectedDataName = ''
      this.selectedCartData  = '';
      this.loadMargin()
    }

    loadMargin(){
      const documentElement = document.documentElement;
      documentElement.style.setProperty(`--${'cardMargin'}`, `${'-40px'}`);
    }
}
