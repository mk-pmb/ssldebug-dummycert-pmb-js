#!/bin/sed -urf
# -*- coding: UTF-8, tab-width: 2 -*-

: read_all
$!{N;b read_all}
s~\n~\r~g
s~\r*$~"}~
s~\r\r+~",\n~g
s~\r~\\n~g
s~(^|\n)(\-{5}BEGIN (CERT|)[A-JL-Z ]+(KEY|))~\1"\L\3\4\E":"\2~g
s~^~{~
