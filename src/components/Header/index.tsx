import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import { AppleLogo, ArrowCircleUp, X } from "phosphor-react";

// import logoImg from   "../../assets/logo.svg"
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <AppleLogo />

        <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}