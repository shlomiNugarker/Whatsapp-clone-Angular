import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  @Input() chats: Chat[] | null | undefined;
  @Input() selectedChatId: number | undefined;
  @Input() currentUser: User | null | undefined;
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('selectChat') onSelect = new EventEmitter<Chat>();

  constructor() {}

  ngOnInit(): void {}

  selectChat(chat: Chat) {
    this.onSelect.emit(chat);
  }

  showProfile() {
    this.onSelectModal.emit('profile');
  }
  showNewChat() {
    this.onSelectModal.emit('new-chat');
  }
  showCommunities() {
    this.onSelectModal.emit('communities');
  }
}
