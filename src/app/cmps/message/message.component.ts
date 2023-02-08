import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  @Input() messages: Message[] | null = null;
  @Input() selectedChat: Chat | null = null;
  @Input() otherUser: User | null = null; // the user you are chatting,depends on selectedChat
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  currentUser: User | null = null;
  userSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  showSearchMessage() {
    this.onSelectModal.emit('search-message');
  }
  showContactInfo(contactId: number | undefined) {
    this.onSelectModal.emit('contact-info');
    console.log(contactId);
  }
}
