import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full">
                <header className="post-header">
                  <h1 className="post-title underline">{this.props.pageContext.frontmatter.title}</h1>
                </header>
                {this.props.pageContext.frontmatter.subtitle && 
                <div className="post-subtitle">
                  {htmlToReact(this.props.pageContext.frontmatter.subtitle)}
                </div>
                }
                {this.props.pageContext.frontmatter.img_path && 
                <div className="post-thumbnail">
                  <img src={safePrefix(this.props.pageContext.frontmatter.img_path)} alt={this.props.pageContext.frontmatter.title} />
                </div>
                }
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
              </article>
            </Layout>
        );
    }
}
