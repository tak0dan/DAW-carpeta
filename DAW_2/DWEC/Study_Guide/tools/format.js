'use strict';
// Minimal string/template/paren-aware pretty printer for the drill bank.
// Splits statements at top-level ";" and puts block braces on their own
// lines. Anything it is not sure about is left alone: gen.js re-runs every
// formatted snippet and aborts if the result differs from the claimed one.

const KW_BEFORE_BLOCK = /(\)|=>|\belse|\bdo|\btry|\bfinally)\s*$/;

function format(code) {
  let out = '';
  let indent = 0;
  let paren = 0; // () and [] depth
  const braces = []; // 'block' | 'obj'
  let i = 0;
  const nl = () => { out = out.replace(/[ \t]+$/, '') + '\n' +
    '  '.repeat(Math.max(indent, 0)); };
  const skipSpaces = () => { while (code[i] === ' ') i++; };

  while (i < code.length) {
    const c = code[i];
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (code[j] !== c) j += code[j] === '\\' ? 2 : 1;
      out += code.slice(i, j + 1); i = j + 1; continue;
    }
    if (c === '`') { // template literal, with nested ${ ... }
      let j = i + 1, depth = 0;
      while (j < code.length) {
        if (code[j] === '\\') { j += 2; continue; }
        if (depth === 0 && code[j] === '`') break;
        if (code[j] === '$' && code[j + 1] === '{') { depth++; j += 2; continue; }
        if (depth > 0 && code[j] === '{') depth++;
        if (depth > 0 && code[j] === '}') depth--;
        if (depth > 0 && (code[j] === '`')) { // nested template: skip it
          j++;
          while (code[j] !== '`') j += code[j] === '\\' ? 2 : 1;
        }
        j++;
      }
      out += code.slice(i, j + 1); i = j + 1; continue;
    }
    if (c === '(' || c === '[') { paren++; out += c; i++; continue; }
    if (c === ')' || c === ']') { paren--; out += c; i++; continue; }
    if (c === '{') {
      const before = out.replace(/\s+$/, '');
      const empty = /^\{\s*\}/.test(code.slice(i));
      const isBlock = paren === 0 && KW_BEFORE_BLOCK.test(before) ||
        /^\s*$/.test(before.slice(before.lastIndexOf('\n') + 1)) && paren === 0
        || /[;{}]\s*$/.test(before);
      if (empty) {
        out += '{}'; i = code.indexOf('}', i) + 1;
        const rest = code.slice(i).replace(/^\s+/, '');
        if (paren === 0 && isBlock && rest.length && !/^[;,)}.]/.test(rest)) {
          skipSpaces(); nl();
        }
        continue;
      }
      if (isBlock && paren === 0) {
        braces.push('block'); indent++;
        out = out.replace(/\s+$/, '') + ' {'; i++; skipSpaces(); nl(); continue;
      }
      braces.push('obj'); out += c; i++; continue;
    }
    if (c === '}') {
      const kind = braces.pop();
      if (kind === 'block') {
        indent--; nl(); out += '}'; i++;
        const rest = code.slice(i).replace(/^\s+/, '');
        if (/^(else|while)\b/.test(rest)) { out += ' '; skipSpaces(); }
        else if (rest.length && !/^[;,)}]/.test(rest)) { skipSpaces(); nl(); }
        continue;
      }
      out += c; i++; continue;
    }
    if (c === ';' && paren === 0) {
      out += ';'; i++; skipSpaces();
      if (i < code.length && code[i] !== '}') nl();
      continue;
    }
    out += c; i++;
  }
  return out.trim();
}

module.exports = { format };
