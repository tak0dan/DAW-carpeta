import itertools

headers = [
'<?xml version="1.0" encoding="UTF-8"?>\n<svg',
'<svg xmlns="http://www.w3.org/2000/svg"',
'<svg version="1.1" xmlns="http://www.w3.org/2000/svg"'
]

for i,h in enumerate(headers):
    open(f"svg{i}.bin","wb").write(h.encode())
