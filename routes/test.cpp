#include <cstdio>

int n, m;

int main() {
	scanf("%d %d", &n, &m);
	for(int i=1; i<=n; i++) {
		for(int j=1; j<=m; j++) {
			printf("%d %d\n", i, j);
		}
	}
	return 0;
}


