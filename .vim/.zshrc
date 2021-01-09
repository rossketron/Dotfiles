# Zsh Config File
autoload -Uz vcs_info
zstyle ':vcs_info:*' formats \
    '%B%F{1}[%F{2}%b%F{1}]'

precmd() { vcs_info }

# Enable colors and change prompt:
autoload -U colors && colors
setopt prompt_subst
PS1='%B%{$fg[red]%}[%{$fg[yellow]%}%n%{$fg[green]%}@%{$fg[blue]%}%m %{$fg[magenta]%}%~%{$fg[red]%}]${vcs_info_msg_0_} 
%{$fg[red]%}$%b%{$reset_color%} ' 

# History in cache directory:
setopt histignorealldups sharehistory
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh/cache/history

# Basic auto/tab complete:
autoload -U compinit
zmodload zsh/complist
compinit -d ~/.zsh/.zcompdump
_comp_options+=(globdots)  # Include hidden files in comp
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' group-name ''
zstyle ':completion:*'  menu select
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'
zstyle ':completion:*' verbose true

# VIM mode Baby!!!
bindkey -v
export KEYTIMEOUT=20

# Use vim keys in tab complete menu:
# This means you can't type with [h,j,k,l] in menus
bindkey -M viins ' h' vi-backward-char
bindkey -M viins ' j' vi-down-line
bindkey -M viins ' k' vi-up-line
bindkey -M viins ' l' vi-forward-char
bindkey -M viins 'kj' vi-cmd-mode
bindkey -M menuselect 'h' vi-backward-char
bindkey -M menuselect 'j' vi-down-line-or-history
bindkey -M menuselect 'k' vi-up-line-or-history
bindkey -M menuselect 'l' vi-forward-char
bindkey -v '^?' backward-delete-char

# Change cursor shape based on current Vi mode:
function zle-keymap-select {
    if [[ ${KEYMAP} == vicmd ]] ||
       [[ $1 = 'block' ]]; then
        echo -ne '\e[1 q'
    elif [[ ${KEYMAP} == main ]] ||
         [[ ${KEYMAP} == viins ]] ||
         [[ ${KEYMAP} == '' ]] ||
         [[ $1 == 'beam' ]]; then
        echo -ne '\e[5 q'
    fi
}
zle -N zle-keymap-select
zle-line-init() {
    zle -K viins # initiate 'vi insert' as keymap, can remove if set bindkey -V elsewhere
    echo -ne "\e[5 q"
}
zle -N zle-line-init
echo -ne '\e[5 q' #use beam shape cursor on startup
preexec() { echo -ne '\e[5 q' ; } # use beam shape cursor for each new prompt

#Use lf to switch directories and bind it to ctrl-o
lfcd() {
    tmp="$(mktemp)"
    lf -last-dir-path="$tmp" "$@"
    if [ -f "$tmp" ]; then
        dir="$(cat "$tmp")"
        rm -f "$tmp"
        [ -d "$dir" ] && [ "$dir" != "$(pwd)" ] && cd "$dir"
    fi
}
bindkey -s '^o' 'lfcd\n'

# Edit line in vim with ctrl-e:
autoload edit-command-line; zle -N edit-command-line
bindkey '^e' edit-command-line

alias stop="^c"
alias gitkeep="touch .gitkeep"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export PATH="/usr/local/opt/mongodb-community@4.0.bin:$PATH"

# Load aliases and shortcuts if they exist:
[ -f "$HOME/.zsh/aliasrc" ] && source "$HOME/.zsh/aliasrc"

# [ -f "$HOME/.zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" ] &&
# source "$HOME/.zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"
