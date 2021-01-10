import { Component, Input } from "@angular/core";
import { from, of, interval } from "rxjs";
import { filter } from "rxjs/operators";
import { HttpServiceService } from "../../../http-service.service";
import { Article } from "../../models/article/article";
import { Store, Select } from "@ngxs/store";
import { AddArticle } from "../../models/article/article.action";
import { RemoveArticle } from "../../models/article/article.action";
import { ArticleState } from "../../models/article/article.state";
import { Observable } from "rxjs";

@Component({
  selector: "panier",
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  articlePanier$: Observable<Article[]>;
  prixPanier$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.articlePanier$ = this.store.select(ArticleState.getArticles);
    this.prixPanier$ = this.store.select(ArticleState.getPrix);
  }

  removeArticle(a: Article) {
    this.store.dispatch(new RemoveArticle(a)).subscribe();
  }
}
