Vim�UnDo� 	�1:�)�4�.��zgB�99����m2�                    4       4   4   4    ^���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                  const bcrypt = require()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                  const bcrypt = require('')5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                   const bcrypt = require('bcrypt')5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                 const User = require()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                 const User = require('')5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                 /const User = require('../database/models/User')5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                 module.exports = ()5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                 module.exports = (req, res)5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                   �             �                 �             �                 module.exports = (req, res) =>5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             ^���     �      
   	        }5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                             ^���     �   	                �   	          �         
        User.findOne()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �   
              })5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �   
              }, ())5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �   
              }, (error, user))5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �                   �             �   
              }, (error, user) =>)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               	    if ()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �             �                   if (user)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                   if (user){5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                     bcrypt.compare()5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                             ^��     �               1      bcrypt.compare(password, user.password, ())5�_�                       ;    ����                                                                                                                                                                                                                                                                                                                                                             ^��     �               <      bcrypt.compare(password, user.password, (error, same))5�_�                       >    ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                       �             �               ?      bcrypt.compare(password, user.password, (error, same) =>)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��"     �                       if ()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��%     �               
          �             �                       if (same)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��-     �                         res.redirect()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��-     �                         res.redirect('')5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��/     �                         res.redirect('/')5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             ^��6     �               	        }5�_�                        
    ����                                                                                                                                                                                                                                                                                                                                                             ^��?     �                       if (same) {   res.redirect('/');�                         res.redirect('/');5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             ^��B     �               %        if (same) {res.redirect('/');5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                             ^��D     �               &        if (same) { res.redirect('/');   } �               
        } 5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                             ^��K     �                       else {}5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                             ^��P     �                       else { res.redirect()}5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                             ^��P     �               !        else { res.redirect(j'')}5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                             ^��S     �               !        else { res.redirect(''')}5�_�   %   '           &      )    ����                                                                                                                                                                                                                                                                                                                                                             ^��Z     �               ,        else { res.redirect('/auth/login'')}5�_�   &   (           '      *    ����                                                                                                                                                                                                                                                                                                                                                             ^��]     �               +        else { res.redirect('/auth/login')}5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                             ^��h     �             �                   }5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                                             ^��p     �                5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                             ^��y     �                     return res.redirect()5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                             ^��y     �                     return res.redirect('')5�_�   +   -           ,      (    ����                                                                                                                                                                                                                                                                                                                                                             ^��     �               (      return res.redirect('/auth/login')5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                             ^��    �                 }5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               )        if (same) { res.redirect('/'); } 5�_�   .   0           /           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �                5�_�   /   1           0      
    ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               
    else {5�_�   0   2           1           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               else {5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               
    else {   #return res.redirect('/auth/login');�               )      return res.redirect('/auth/login');5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               .    else { return res.redirect('/auth/login');   }�                   }5�_�   3               4          ����                                                                                                                                                                                                                                                                                                                                                             ^���    �                 }5��